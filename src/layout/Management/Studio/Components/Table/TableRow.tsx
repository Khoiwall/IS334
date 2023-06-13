import ImageAndGifNew from "@/components/ImageAndGifNew";
import CheckBox from "./CheckBox";

import dateformat from "dateformat";
import Link from "next/link";
import DisplayProductOnVideo from "./DisplayProductOnVideo";
interface Props {
  item: any;
  onSelected: any;
}
export default function TableRow({ item, onSelected }: Props) {
  const isPublic = item?.date
    ? (item?.date as number) * 1000 < new Date()?.getTime()
      ? true
      : false
    : true;
  return (
    <div className="grid grid-cols-12 items-center hover:bg-[#252026] py-6 pr-6 pl-10 w-full text-center xl:min-w-[0px] min-w-[1440px]">
      <div className="col-span-4">
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
              rounded="rounded-xl "
            />
            <div className="2xl:ml-5 ml-4 flex items-center">
              <div className="text-[14px] leading-[22px] font-semibold hover:text-primary mint-ellipsis underline">
                {item.name ?? "Top 5 Gadgets of 2023"}
              </div>
              {/* <div
                className="mint-ellipsis-one mt-1 text-[14px] leading-[21px] text-white/80"
                dangerouslySetInnerHTML={{ __html: item?.description }}
              /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 col-span-8 text-[13px] leading-[13px] font-medium">
        <DisplayProductOnVideo products={item?.product_id} />
        <div className="text-sm flex items-center justify-center">
          {dateformat(
            item?.createdAt ? new Date(item.createdAt) : new Date(),
            "dd/mm/yyyy"
          ) ?? "12/24/2023"}
        </div>

        <div className="text-sm flex items-center justify-center text-[#A694BE]">
          {item.numberComments ?? 0}
        </div>
      </div>
    </div>
  );
}
