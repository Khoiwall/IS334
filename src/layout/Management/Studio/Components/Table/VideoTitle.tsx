import Link from "next/link";

import ImageAndGifNew from "@/components/ImageAndGifNew";
import CheckBox from "./CheckBox";

interface Props {
  item: any;
  onSelected: any;
}

function VideoTitle({ item, onSelected }: Props) {
  return (
    <div className="border-r-2 border-solid border-[#303030]">
      <div className="pl-10 pr-4 py-6">
        <div className="flex items-center lg:gap-10 gap-6">
          <div className="text-sm">
            <CheckBox onChecked={onSelected} isChecked={item.isSelected} />
          </div>
          <div className="flex text-sm text-start gap-4">
            <ImageAndGifNew
              src={
                item.images[item.currentImage] ??
                "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              }
              alt={""}
              className={
                "relative 2xl:min-w-[120px] 2xl:min-h-[76px] min-h-[68px] min-w-[108px]"
              }
              rounded=" rounded-xl "
            />
            <div className="">
              <Link className="block" href={`/video/details/${item?._id}`}>
                <div className="text-[14px] leading-[22px] font-semibold hover:text-primary mint-ellipsis underline">
                  {item.name ?? "Top 5 Gadgets of 2023"}
                </div>
              </Link>
              {/* <div
                className="mint-ellipsis-one mt-1 text-[14px] leading-[21px] text-white/80"
                dangerouslySetInnerHTML={{ __html: item?.description }}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VideoTitle;
