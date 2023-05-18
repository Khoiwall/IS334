import Slider from "react-slick";
import CardBannerVideoLoading from "./CardBannerVideoLoading";

const skeleton = [1];

function Banner() {
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
    <>
      <div className="metastream-banner w-full relative block">
        <Slider {..._settings}>
          {skeleton?.map((index: number) => {
            return (
              <div key={index}>
                <CardBannerVideoLoading />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
export default Banner;
