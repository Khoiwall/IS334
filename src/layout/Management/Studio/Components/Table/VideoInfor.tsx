import dateformat from "dateformat";

import DisplayProductOnVideo from "./DisplayProductOnVideo";

interface Props {
  item: any;
}

function VideoInfor({ item }: Props) {
  const isPublic = item?.date
    ? (item?.date as number) * 1000 < new Date()?.getTime()
      ? true
      : false
    : true;
  return (
    <div className="pl-4 py-6 ">
      <div className="grid grid-cols-6 col-span-8">
        <DisplayProductOnVideo products={item?.product_id} />
        <div className="text-sm flex items-center justify-center">
          {dateformat(
            item?.createdAt ? new Date(item.createdAt) : new Date(),
            "dd/mm/yyyy"
          ) ?? "12/24/2023"}
        </div>
        <div className="text-sm flex items-center justify-center">
          {item.numberComments ?? 0}
        </div>
      </div>
    </div>
  );
}
export default VideoInfor;
