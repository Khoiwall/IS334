import { BANNERS } from "@/contants/DATABANNER";
import { useState } from "react";
import LayoutBanner from "./Banner";
import LoadingBanner from "./Loading/Banner";

function Home() {
  const [banners, setBanner] = useState<any>(BANNERS);
  const [videoList, setVideoList] = useState<any>([]);
  const [product, setProduct] = useState<any>([]);
  const [shops, setShops] = useState<any>([]);
  const [isLoadingProduct, setIsLoadingProduct] = useState<boolean>(false);
  const [isLoadingBanner, setIsLoadingBanner] = useState<boolean>(true);
  const [isLoadingVideo, setIsLoadingVideo] = useState<boolean>(false);
  const [isLoadingShop, setIsLoadingShop] = useState<boolean>(false);

  return (
    <div className="pt-[54px]">
      <div className="md:ml-[300px] text-white">
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
          {/* {isLoadingProduct ? (
            product?.length !== 0 ? (
              <div>
                <Header
                  nextOrPrev={nextOrPrevVideo}
                  title="Sản phẩm bán chạy"
                  isVideoPB={true}
                />
                <VideoPlayBackList
                  sliderVideo={sliderVideoPlayPB}
                  videosPlayBack={product}
                />
              </div>
            ) : null
          ) : (
            <LoadingVideo />
          )}
          {isLoadingVideo ? (
            videoList?.length !== 0 ? (
              <div>
                <Header nextOrPrev={nextOrPrevVideo} title="Videos" />
                <VideoList sliderVideo={sliderVideo} videoList={videoList} />
              </div>
            ) : null
          ) : (
            <LoadingVideo />
          )}
          {isLoadingShop ? (
            shops?.length !== 0 ? (
              <div>
                <Header nextOrPrev={nextOrPrevVideo} title="Shop bán chạy" />
                <VideoList sliderVideo={sliderVideo} videoList={videoList} />
              </div>
            ) : null
          ) : (
            <LoadingVideo />
          )} */}
        </div>
      </div>
    </div>
  );
}
export default Home;
