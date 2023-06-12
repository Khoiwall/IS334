import ButtonComponent from "@/components/ButtonComponent";
import { useState } from "react";
import PinProductsModal from "../PinProductsModal";
import Section from "./Section";
import Thumbnails from "./Thumbnails";
//
import RtfEditor from "@/components/RtfEditor";
interface Props {
  video: any;
  publishVideo: number;
  setVideo: any;
  setPublishVideo: any;
}
export default function DetailsSection({
  video,
  setVideo,
  publishVideo,
  setPublishVideo,
}: Props) {
  const [isShowPinProductsModal, setIsShowPinProductsModal] =
    useState<boolean>(false);
  return (
    <div className="flex-1 border-solid overflow-auto border border-x-[#303030] border-y-transparent">
      <Section
        id="Add Details"
        title="Chi tiết"
        description="Nhập tiêu đề và mô tả video. Làm cho video của bạn nổi bật, đặt tên video phù hợp và sử dụng mô tả để giúp khán giả của bạn."
      >
        <div className="text-14 font-bold mb-4">Tiêu đề*</div>
        <input
          className="mb-9 text-14 w-full px-5 py-[18px] border border-solid border-primary bg-[#110B14] rounded-xl"
          onChange={(e) => {
            setVideo({ ...video, name: e.target.value });
          }}
          value={video.name}
        />
        <div className="text-14 font-bold mb-3">Mô tả</div>

        <RtfEditor
          value={video.bio}
          onValueChange={(e: any) => {
            setVideo({ ...video, bio: e });
          }}
        />
      </Section>
      <Section
        title="Hình ảnh"
        description="Chọn hoặc tải lên hình ảnh hiển thị nội dung trong video của bạn. Một hình thu nhỏ tốt phải nổi bật và thu hút sự chú ý của người xem. Tìm hiểu thêm"
      >
        <div className="flex">
          <Thumbnails video={video} setVideo={setVideo} />
        </div>
      </Section>
      <div className="border border-solid border-y-[#303030] border-x-transparent pt-[20px] pb-[60px] mt-5">
        <Section
          id="Add Products"
          title={`Thêm sản phẩm (${video.products.length})`}
          description="Ghim sản phẩm đã thêm hoặc thêm sản phẩm mới để bán cùng với video của bạn. "
        >
          <ButtonComponent
            padding="py-[15px] px-6"
            onClick={() => {
              setIsShowPinProductsModal(true);
            }}
            title="Chọn sản phẩm"
            className=" hover:bg-[#27B12E] bg-primary text-black rounded-lg"
            classNameText="text-14 font-semibold"
          />
          {isShowPinProductsModal && (
            <PinProductsModal
              setIsOpen={setIsShowPinProductsModal}
              video={video}
              setVideo={setVideo}
            />
          )}
        </Section>
      </div>
    </div>
  );
}
