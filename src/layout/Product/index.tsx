import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
// import { ProductRye } from "src/app/types";
import ImageAndGif from "@/components/ImageAndGifNew";
import { useAppDispatch, useAppSelector } from "@/hook/reduxHook";
// import BaseLayout from "src/layouts/BaseLayout";
// import { ProductAPI } from "src/services/api-v1.5";
// import { setProduct } from "src/stores/reducers/ProductDetailRedux";
import LoadingProductsSimilar from "./Loading/LoadingProductsSimilar";
import LoadingProduct from "./Loading/ProductLoading";
import Product from "./Product";
import ProductsSimilar from "./ProductsSimilar";
import { ProductAPI } from "@/api";
import ImageAndGifNew from "@/components/ImageAndGifNew";

function DetailProduct() {
  const { userId, id } = useRouter().query;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingSimilar, setIsLoadingSimilar] = useState<boolean>(false);
  const [product, setProduct] = useState<any>(null);

  // const { product } = useAppSelector((state) => state?.productDetail);

  const getProduct = async () => {
    const response = await ProductAPI.getProduct(id as string);
    console.log(response);
    if (response && (response?.status === 200 || response?.status === 201)) {
      setProduct(response?.data?.data);
    }
    setIsLoading(true);
  };
  useEffect(() => {
    if (id && typeof id === "string") {
      if (!product || product?._id !== id) {
        getProduct();
      } else {
        setIsLoading(true);
      }
    }
  }, [userId, id]);

  return (
    <div className="max-w-[1920px] bg-[#110B14] scrollbar-content py-8 3xl:mx-auto 2xl:mx-14 xl:mx-10 md:mx-8 mx-4">
      {isLoading ? (
        product ? (
          <div className="flex flex-col w-full pt-5 pb-10">
            <Product product={product} />
          </div>
        ) : (
          <div className="min-h-[330px] flex-col flex items-center justify-center mt-6">
            <ImageAndGifNew
              className="relative pt-[260px] pl-[460px]"
              alt={""}
              src={
                "https://ucarecdn.com/10aa5127-d83e-4cea-a92d-92bae97491d5/-/quality/smart/-/format/webp/"
              }
              rounded="rounded-xl"
            />
            <h2 className="mt-2 text-2xl font-bold text-white">
              Not Found Product
            </h2>
          </div>
        )
      ) : (
        <LoadingProduct />
      )}
    </div>
  );
}

export default DetailProduct;
