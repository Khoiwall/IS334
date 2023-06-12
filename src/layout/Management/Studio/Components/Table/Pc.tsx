import ButtonComponent from "@/components/ButtonComponent";
import CheckBox from "./CheckBox";
import TableRow from "./TableRow";
import TableRowSkeleton from "./TableRowSkeleton";

interface Props {
  isSelectAll: any;
  items: any[];
  isLoading: boolean;
  setIsSelectAll: any;
  setItems: any;
  onUploadVideo: any;
}

function TablePc({
  isSelectAll,
  setIsSelectAll,
  items,
  setItems,
  isLoading,
  onUploadVideo,
}: Props) {
  return (
    <div className="xl:flex hidden flex-1 flex-col">
      <div className="grid grid-cols-12 border border-solid border-y-[#303030] border-x-transparent py-6 pr-6 pl-10 h-[68px]  text-center xl:min-w-[0px] min-w-[1440px]">
        <div className="text-sm col-span-4 text-left">
          <div className="flex items-center lg:gap-10 gap-6">
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
        <div className="grid grid-cols-3 col-span-8">
          <div className="text-sm">Sản phẩm</div>
          <div className="text-sm">Ngày tạo</div>
          <div className="text-sm">Comments</div>
        </div>
      </div>
      <div className="relative">
        {isLoading ? (
          items.length == 0 ? (
            <div className="relative">
              <div className="flex flex-col justify-center items-center w-full min-h-[500px] relative z-10">
                <div className="font-bold font-['Poppins'] text-20 mb-6">
                  Bắt đầu tải lên để xem nội dung
                </div>
                <ButtonComponent
                  padding="py-4 px-8"
                  onClick={onUploadVideo}
                  title="Thêm video"
                  className="h-[51px] w-[168px] hover:bg-[#27B12E] bg-primary text-[#252026] rounded-[12px]"
                />
              </div>
              <div className="absolute top-0 left-0 w-full min-h-[500px] z-[1]">
                <TableRowSkeleton />
              </div>
            </div>
          ) : (
            items.map((item, i) => (
              <TableRow
                key={i}
                item={item}
                onSelected={() => {
                  let res: any[] = [...items];
                  res[i].isSelected = !res[i].isSelected;
                  setItems(res);
                }}
              />
            ))
          )
        ) : (
          <TableRowSkeleton />
        )}
      </div>
    </div>
  );
}

export default TablePc;
