import { useState } from "react";
import ProductDescriptionAndAction from "./ProductDescriptionAndAction";
import ProductImgAndOverView from "./ProductImgAndOverView";

interface Props {
  product: any;
}

function Product({ product }: Props) {
  const [mainImage, setMainImage] = useState<string>(product?.images[0] || "");
  return (
    <div className="relative text-white">
      <div className="border-b border-solid border-white/20">
        <div className="flex">
          <ProductImgAndOverView
            mainImage={mainImage}
            setMainImage={setMainImage}
            product={product}
          />
          <div className="border-r border-solid border-white/20 2xl:mx-[60px] xl:mx-10 sm:mx-8 mx-6"></div>
          <ProductDescriptionAndAction product={product} />
        </div>
      </div>
    </div>
  );
}
export default Product;
