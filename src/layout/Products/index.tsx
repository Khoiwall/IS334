import SellingProduct from "@/components/SellingProduct";
import { PRODUCTS } from "@/contants/DATABANNER";
import { useEffect, useState } from "react";
import Sort from "./Sort";
import Filters from "./Filters";
import Search from "./Search";
import { ProductAPI } from "@/api";
import SpinLoading from "@/components/SpinLoading";

function Products({ products: productsFromDB }: any) {
  const [displayProducts, setDisplayProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function asyncFunc() {
    const response = await ProductAPI.getProducts();
    if (response && (response?.status === 200 || response?.status === 201)) {
      setProducts(response.data?.data ?? []);
      setDisplayProducts(response.data?.data ?? []);
    }
    setIsLoading(true);
  }

  useEffect(() => {
    asyncFunc();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex text-white mt-[54px] py-8 min-h-[calc(100vh-54px)] px-5 3xl:mx-auto 2xl:mx-14 xl:mx-10 md:mx-8 mx-4">
          <Filters
            products={products}
            setDisplayProducts={setDisplayProducts}
          />
          <div className="flex-1">
            <Search
              products={products}
              setDisplayProducts={setDisplayProducts}
            />
            <Sort
              displayProducts={displayProducts}
              setDisplayProducts={setDisplayProducts}
            />
            <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 text-white gap-5 p-5">
              {displayProducts?.map((product: any, index: number) => {
                return (
                  <SellingProduct
                    setWidth={true}
                    key={index}
                    product={product}
                    sizeType="medium"
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex min-h-[calc(100vh-54px)]">
          <SpinLoading fill="fill-primary" width="w-10" height="h-10" />
        </div>
      )}
    </>
  );
}
export default Products;
