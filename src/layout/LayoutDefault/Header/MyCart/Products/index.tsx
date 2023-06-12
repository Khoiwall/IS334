import { useContext } from "react";
import { makeid } from "@/utils/randomString";
import { CartContext } from "@/context/CartContext";
import ProductOnCart from "./ProductOnCart";

function Products() {
  const { cart } = useContext(CartContext);
  return (
    <div className="mb-5">
      <div className="relative">
        <div className="w-full h-full">
          <div className="border-b border-solid border-[#3B363D]">
            <div className="max-h-[508px] overflow-auto">
              <div className="py-4 pl-6 pr-2.5">
                <div className="flex flex-col gap-6 h-full">
                  {cart?.map((product: any) => {
                    return <ProductOnCart product={product} key={makeid(10)} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Products;
