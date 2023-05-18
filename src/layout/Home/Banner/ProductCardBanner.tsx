import ContentProductBanner from "./ContentProductBanner";
import HeaderProductBanner from "./HeaderProductBanner";

interface Props {
  banner: any;
}
function ProductCardBanner({ banner }: Props) {
  return (
    <div className="h-full absolute top-0 -left-8 nft flex items-center z-[50]">
      <div className="relative lg:hidden block nft-stream">
        <div className="flex items-center h-full">
          <div className="p-6 bg-[#1B161E] rounded-[24px]">
            <HeaderProductBanner banner={banner} />
            <ContentProductBanner banner={banner} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardBanner;
