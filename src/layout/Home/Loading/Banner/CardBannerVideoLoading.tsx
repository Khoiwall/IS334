import { Skeleton } from "@mui/material";
import ProductCardBannerLoading from "./ProductCardBannerLoading";

function CardBannerVideoLoading() {
  return (
    <div className="mx-8 relative skeleton-video">
      <div className="relative 2xl:min-h-[0px] min-h-[336px] pt-[56.25%] 2xl:mr-[68px] video-not-center">
        <div className="absolute top-0 left-0 w-full h-full border border-solid border-white/10 rounded-[24px]">
          <Skeleton width="100%" height="100%" sx={{ borderRadius: "24px" }} />
        </div>
      </div>
      <ProductCardBannerLoading />
    </div>
  );
}
export default CardBannerVideoLoading;
