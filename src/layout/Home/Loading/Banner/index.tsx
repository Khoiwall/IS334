import { Skeleton } from "@mui/material";
import Banner from "./Banner";

function LoadingBanner() {
  return (
    <div className="md:block hidden  pt-8 lg:mx-auto w-banner-custom w-full skeleton-video">
      <div className="flex items-center 2xl:pl-20 xl:pl-10 px-8">
        <div className="2xl:mr-[128px] xl:mr-16 mr-0 max-w-[360px] min-w-[360px] xl:block hidden">
          <Skeleton width="360px" height="144px" />
          <p className="text-lg text-white/80 mt-4">
            <Skeleton width="360px" height="44px" />
          </p>
        </div>
        <div className="flex-1 overflow-auto">
          <Banner />
        </div>
      </div>
    </div>
  );
}
export default LoadingBanner;
