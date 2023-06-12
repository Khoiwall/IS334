import { useState } from "react";
import PriceAndStock from "./PriceAndStock";
import ProductAction from "./ProductAction";
import ProductDescription from "./ProductDescription";

interface Props {
  product: any;
}

function ProductDescriptionAndAction({ product }: Props) {
  const [selectVariant, setSelectVariant] = useState<{
    title1: string;
    title2: string;
  }>({
    title1: "",
    title2: "",
  });
  return (
    <div className="relative flex-1 flex flex-col sm:mt-5">
      <div className="sticky top-[72px] overflow-auto">
        <div className="sm:mb-[30px]">
          <div className="w-full">
            <ProductDescription product={product} />
          </div>
        </div>
        <div className="sm:mb-[30px]">
          <div className="w-full">
            <PriceAndStock product={product} />
          </div>
        </div>

        <div className="sm:mb-[30px]">
          <div className="w-full">
            <ProductAction product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDescriptionAndAction;
