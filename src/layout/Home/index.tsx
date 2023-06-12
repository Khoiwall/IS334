import { ProductAPI } from "@/api";
import { BANNERS, VIDEOS } from "@/contants/DATABANNER";
import { useEffect, useRef, useState } from "react";
import LayoutBanner from "./Banner";
import HeaderHomePage from "./HeaderHomePage";
import LoadingBanner from "./Loading/Banner";
import ProductsHomepage from "./Products";
import VideosHomePage from "./Videos";

function Home() {
  const [banners, setBanner] = useState<any>(BANNERS);
  const [videoList, setVideoList] = useState<any>(VIDEOS);
  const [products, setProduct] = useState<any>([]);
  const [shops, setShops] = useState<any>(["123"]);
  const [isLoadingProduct, setIsLoadingProduct] = useState<boolean>(false);
  const [isLoadingBanner, setIsLoadingBanner] = useState<boolean>(true);
  const [isLoadingVideo, setIsLoadingVideo] = useState<boolean>(true);
  const sliderVideo = useRef(null);
  const sliderVideoPlayPB = useRef(null);

  const nextOrPrevVideo = (isNext: boolean, isVideoPB?: boolean) => {
    if (isVideoPB) {
      if (isNext) {
        (sliderVideoPlayPB?.current as any)?.slickNext();
      } else {
        (sliderVideoPlayPB?.current as any)?.slickPrev();
      }
    } else {
      if (isNext) {
        (sliderVideo?.current as any)?.slickNext();
      } else {
        (sliderVideo?.current as any)?.slickPrev();
      }
    }
  };
  console.log(products);
  const getProducts = async () => {
    const response = await ProductAPI.getProducts();
    console.log(response);
    if (response && (response?.status === 201 || response?.status === 200)) {
      console.log(1123);
      setProduct(response?.data?.data);
    }
    setIsLoadingProduct(true);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="pt-[54px] py-16">
      <div className="text-white">
        <div className="max-w-[1920px] 3xl:mx-auto 2xl:mx-14 xl:mx-10 md:mx-8 mx-4">
          {isLoadingBanner ? (
            banners?.length !== 0 ? (
              <LayoutBanner bannerList={banners} />
            ) : (
              <LoadingBanner />
            )
          ) : (
            <LoadingBanner />
          )}
          {isLoadingProduct ? (
            products?.length !== 0 ? (
              <div>
                <HeaderHomePage
                  nextOrPrev={nextOrPrevVideo}
                  title="Sản phẩm bán chạy"
                  isVideoPB={true}
                />
                <ProductsHomepage products={products} />
              </div>
            ) : null
          ) : null}
          {isLoadingVideo ? (
            videoList?.length !== 0 ? (
              <div>
                <HeaderHomePage nextOrPrev={nextOrPrevVideo} title="Videos" />
                <VideosHomePage videos={videoList} />
              </div>
            ) : null
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default Home;
function async(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
