import { useContext } from "react";
import ButtonComponent from "@/components/ButtonComponent";
import CheckBox from "./CheckBox";
import TableRowSkeletonMobile from "./TableRowSkeletonMobile";
import VideoInfor from "./VideoInfor";
import VideoTitle from "./VideoTitle";

interface Props {
  isSelectAll: any;
  items: any[];
  isLoading: boolean;
  setIsSelectAll: any;
  setItems: any;
  onUploadVideo: any;
}

function TableMobile({
  isSelectAll,
  setIsSelectAll,
  items,
  setItems,
  isLoading,
  onUploadVideo,
}: Props) {
  return (
    <div className="xl:hidden flex flex-col flex-1">
      <div className="flex text-center">
        <div className="flex flex-col border-b border-[#303030] border-solid sm:min-w-[420px] min-w-[300px] sm:max-w[420px] max-w-[300px]">
          <div className="text-sm text-left">
            <div className="border-r-2 border-solid border-b border-t border-[#303030]">
              <div className="flex items-center py-6 pr-6 pl-10 lg:gap-10 gap-6">
                <CheckBox
                  onChecked={() => {
                    const isCheckedTmp = !isSelectAll;
                    setIsSelectAll(!isSelectAll);
                    let res: any[] = [];
                    items.map((item) => {
                      item.isSelected = isCheckedTmp;
                      res.push(item);
                    });
                    setItems(res);
                  }}
                  isChecked={isSelectAll}
                />
                <span>Video</span>
              </div>
            </div>
          </div>
          <div>
            {isLoading ? (
              items?.map((item, index) => {
                return (
                  <VideoTitle
                    key={item?._id}
                    item={item}
                    onSelected={() => {
                      let res: any[] = [...items];
                      res[index].isSelected = !res[index].isSelected;
                      setItems(res);
                    }}
                  />
                );
              })
            ) : (
              <TableRowSkeletonMobile left={true} />
            )}
          </div>
        </div>
        <div className="overflow-auto flex-1">
          <div className="overflow-auto" style={{ maxWidth: `516px` }}>
            <div className="flex flex-col border-b border-[#303030] border-solid min-w-[1024px]">
              <div className="pl-4 py-6 border-b border-t border-[#303030] border-solid">
                <div className="grid grid-cols-3 ">
                  <div className="text-sm">Sản phẩm</div>
                  <div className="text-sm">Ngày tạo</div>
                  <div className="text-sm">Comments</div>
                </div>
              </div>
              <div>
                {isLoading ? (
                  items?.map((item, index) => {
                    return <VideoInfor key={item?._id} item={item} />;
                  })
                ) : (
                  <TableRowSkeletonMobile left={false} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isLoading && items?.length === 0 && (
        <div className="relative flex flex-1">
          <div className="flex-1 flex flex-col justify-center items-center w-full relative z-10">
            <div className="font-bold font-['Poppins'] text-16 mb-6">
              Start Uploading to see content
            </div>
            <ButtonComponent
              padding="py-[15px] px-6"
              onClick={onUploadVideo}
              gapIconAndText="gap-2.5"
              title="GO LIVE"
              className="hover:bg-[#27B12E] bg-primary text-[#252026] rounded-lg"
              classNameText="text-14"
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default TableMobile;
