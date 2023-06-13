import ImageAndGifNew from "@/components/ImageAndGifNew";
import { CardMedia, Link, Skeleton } from "@mui/material";
import ProductCardBanner from "./ProductCardBanner";
interface Props {
  banner: any;
}

function CardBannerLive({ banner }: Props) {
  return (
    <div className="mx-8 relative">
      <div className="relative 2xl:min-h-[0px] min-h-[336px] pt-[56.25%] 2xl:mr-[68px] video-not-center">
        <div className="absolute top-0 left-0 w-full h-full border border-solid border-white/10 rounded-[24px]">
          <CardMedia
            src={banner?.link}
            component="video"
            className="w-full h-full top-0  video object-contain"
            loop
            muted
            autoPlay
            sx={{
              objectFit: "contain",
              borderRadius: "24px",
            }}
            poster={banner?.images[banner?.currentImage]}
          />
          <ImageAndGifNew
            src={banner?.images[banner?.currentImage] || ""}
            alt={banner?.name || ""}
            className="relative w-full h-full img-slick"
            rounded="rounded-[24px]"
          />
        </div>
      </div>
      <ProductCardBanner banner={banner} />
    </div>
  );
}

export default CardBannerLive;
