import SellingProduct from "@/components/SellingProduct";
import { PRODUCTS } from "@/contants/DATABANNER";
import { useEffect, useState } from "react";
import Sort from "./Sort";
import Filters from "./Filters";
import Search from "./Search";

function Products({ products: productsFromDB }: any) {
  const [displayProducts, setDisplayProducts] = useState([...PRODUCTS]);
  const [products, setProducts] = useState([...PRODUCTS]);

  return (
    <div className="flex text-white mt-[54px] min-h-[calc(100vh-54px)] px-5 ">
      <Filters products={products} setDisplayProducts={setDisplayProducts} />
      <div className="flex-1">
        <Search products={products} setDisplayProducts={setDisplayProducts} />
        <Sort
          displayProducts={displayProducts}
          setDisplayProducts={setDisplayProducts}
        />
        <div className="grid 2xl:grid-cols-8 xl:grid-cols-6 sm:grid-cols-4 grid-cols-2 text-white gap-5 p-5">
          {displayProducts?.map((product: any, index: number) => {
            return (
              <SellingProduct setWidth={true} key={index} product={product} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Products;
