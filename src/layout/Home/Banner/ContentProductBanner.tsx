import ImageProductBanner from "./ImageProductBanner";
import InforProductBanner from "./InforProductBanner";

interface Prop {
  banner: any;
}
function ContentProductBanner({ banner }: Prop) {
  return (
    <div className="mt-6">
      <h3 className="text-[16px] leading-[24px] font-semobild font-['Poppins'] text-white">
        Nến thơm đang được bán trong video
      </h3>
      <div className="mt-4">
        <div className="flex gap-6">
          <ImageProductBanner banner={banner} />
          <InforProductBanner banner={banner} />
        </div>
      </div>
    </div>
  );
}
export default ContentProductBanner;
