import Banner from "./Banner";

interface Prop {
  bannerList: any[];
}

function LayoutBanner({ bannerList }: Prop) {
  console.log(bannerList);
  return (
    <div className="md:block hidden  pt-8 lg:mx-auto max-w-custom w-full">
      <div className="flex items-center 2xl:pl-20 xl:pl-10 px-8">
        <div className="2xl:mr-[128px] xl:mr-16 mr-0 max-w-[360px] min-w-[360px] xl:block hidden">
          <h2 className="font-['Inter'] font-bold text-[64px] leading-[112%] text-white">
            {"Mua & Bán nến thơm"}
          </h2>
          {/* <p className="text-lg text-white/80 mt-4">
            {"Nhóm cho tui cái mô tả ở đây"}
          </p> */}
        </div>
        <div className="flex-1 overflow-auto">
          <Banner bannerList={bannerList} />
        </div>
      </div>
    </div>
  );
}
export default LayoutBanner;
