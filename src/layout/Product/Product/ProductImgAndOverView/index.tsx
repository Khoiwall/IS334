import { useState } from "react";
import NestedTabs from "@/components/NestedTabs";
import ImageProduct from "./ImageProduct";
import ProductDetail from "./ProductDetail";
import TabProductDetail from "./TabProductDetail";
import Review from "./Review";
import Comments from "./Comments";

interface Props {
  setMainImage: any;
  mainImage: string;
  product: any;
}

function ProductImgAndOverView({ setMainImage, mainImage, product }: Props) {
  const [tab, setTab] = useState<number>(0);
  return (
    <div className="flex-1 flex flex-col py-5">
      <NestedTabs
        marginBot="mb-5"
        tabs={["Home", "Proudct", product?.name || ""]}
      />
      <div className="mb-[30px]">
        <div className="relative">
          <ImageProduct
            product={product}
            setMainImage={setMainImage}
            mainImage={mainImage}
          />
        </div>
      </div>
      <div className="mb-[30px]">
        <div className="relative">
          <TabProductDetail tab={tab} setTab={setTab} />
        </div>
      </div>
      <div className="mb-[30px]">
        <div className="relative">
          {tab === 0 ? (
            <ProductDetail product={product} />
          ) : (
            <Comments product={product} />
          )}
        </div>
      </div>
    </div>
  );
}
export default ProductImgAndOverView;
