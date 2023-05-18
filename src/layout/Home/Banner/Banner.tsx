import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import CardBannerVideoLoading from "../Loading/Banner/CardBannerVideoLoading";

import CardBannerLive from "./CardBannerLive";

import NextOrPrevComponent from "./NextOrPrevComponent";

interface Props {
  bannerList: any[];
}

function Banner({ bannerList }: Props) {
  const sliderBannerMobile = useRef(null);
  const sliderBanner = useRef(null);
  const nextOrPrev = (isNext: boolean) => {
    if (isNext) {
      (sliderBanner?.current as any)?.slickNext();
      (sliderBannerMobile?.current as any)?.slickNext();
    } else {
      (sliderBannerMobile?.current as any)?.slickPrev();
      (sliderBanner?.current as any)?.slickPrev();
    }
  };
  const _settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 60000,
    slidesToShow: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToScroll: 1,
          className: "center-banner",
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="metastream-banner w-full relative block">
      <NextOrPrevComponent nextOrPrev={nextOrPrev} />
      <Slider {..._settings} ref={sliderBannerMobile}>
        {bannerList && bannerList?.length > 0 ? (
          bannerList?.map((banner: any) => {
            return (
              <div key={banner?._id}>
                <CardBannerLive banner={banner} />
              </div>
            );
          })
        ) : (
          <CardBannerVideoLoading />
        )}
      </Slider>
    </div>
  );
}
export default Banner;
