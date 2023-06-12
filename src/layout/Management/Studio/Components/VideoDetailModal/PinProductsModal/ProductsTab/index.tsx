import ButtonComponent from "@/components/ButtonComponent";
import ConverICon from "@/components/ConvertIcon";
import { IconFilter, IconSearchSm } from "@/components/Icon/Generate";
import Product from "./Product";
import { useEffect, useState } from "react";
import { ProductAPI } from "@/api";
// import { ProductAPI } from "src/services/api-v1.5";

interface Props {
  products: any[];
  setProducts: any;
}
export default function ProductsTab({ products, setProducts }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //fetch from backend
  const [searchText, setSearchText] = useState<string>("");
  const [currentProducts, setCurrentProducts] = useState<any[]>([]);
  console.log(currentProducts);
  const getProducts = async () => {
    setIsLoading(true);
    const response = await ProductAPI.getProducts();
    if (response && response?.data?.status === "success") {
      setProducts(response?.data?.data);
      setCurrentProducts(response?.data?.data);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    setCurrentProducts(
      products.filter((p) => p.title.includes(searchText) == true)
    );
  }, [searchText]);
  return (
    <div className="flex-1 flex flex-col  overflow-auto">
      <div className="py-[28px] px-[32px]">
        <div className="flex gap-4 mb-[28px]">
          <div className="flex w-[644px] h-[52px] bg-[#110B14] rounded-xl py-[15px] px-[23px]">
            <ConverICon Icon={IconSearchSm} stroke="white" />
            <input
              placeholder="Search for products in your store."
              className="text-[16px] bg-[#110B14] w-full ml-5"
              onChange={(e) => setSearchText(e.target.value)}
            ></input>
          </div>
          <ButtonComponent
            Icon={IconFilter}
            icon={true}
            padding="p-[9px] opacity-70"
            onClick={() => {}}
            infoIcon={{ width: "24", height: "24", stroke: "white" }}
            className="bg-[#252027] hover:bg-primary rounded-lg hover:text-[#252027] hover-svg w-[52px] h-[52px]"
          />
        </div>

        {products.length == 0 ? (
          <div className="">
            <h3 className="font-['Poppins'] font-bold text-xl mb-[12px] mt-[8px]">
              You have{" "}
              {currentProducts.filter((p) => p.isSelected == true).length}{" "}
              products in your store
            </h3>
            <h4 className=" text-[16px] opacity-70 font-medium pb-8">
              Start by adding products to your store
            </h4>
            <ButtonComponent
              padding="py-4 px-8"
              onClick={getProducts}
              isLoading={isLoading}
              title="ADD PRODUCTS"
              classNameText="font-semibold text-[16px]"
              className="h-[52px] w-[192px] hover:bg-[#27B12E] bg-primary text-black rounded-[12px]"
            />
          </div>
        ) : (
          <div>
            <div className="pb-[20px]">
              {currentProducts.filter((p) => p.isSelected == true).length}{" "}
              Selected &nbsp; &nbsp;|&nbsp; &nbsp;
              <span
                className="text-primary hover:underline cursor-pointer"
                onClick={() => {
                  let res: any[] = [];
                  products.map((p: any) => {
                    p.isSelected = true;
                    res.push(p);
                  });
                  setProducts(res);
                }}
              >
                Select All
              </span>
              &nbsp;&nbsp; | &nbsp;&nbsp;
              <span
                className="text-primary hover:underline cursor-pointer"
                onClick={() => {
                  let res: any[] = [];
                  products.map((p: any) => {
                    p.isSelected = false;
                    res.push(p);
                  });
                  setProducts(res);
                }}
              >
                Deselect All
              </span>
            </div>
            {currentProducts.length == 0 ? (
              <div>Not found any item</div>
            ) : (
              <div className="grid xl:grid-cols-6 md:grid-cols-5 sm:grid-cols-3 grid-cols-2 xl:gap-7 sm:gap-5 gap-3">
                {currentProducts.map((product: any, i) => (
                  <button
                    className="bg-transparent"
                    onClick={() => {
                      let res = [...products];
                      res[i].isSelected = !res[i].isSelected;
                      setProducts(res);
                    }}
                  >
                    <Product product={product} />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
