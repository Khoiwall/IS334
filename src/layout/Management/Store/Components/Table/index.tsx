import { useEffect, useState } from "react";
// import { ProductRye } from "src/app/types";
import CheckBox from "./CheckBox";
import ButtonComponent from "@/components/ButtonComponent";
import TableRow1 from "./TableRow1";
import { IconPlus } from "@/components/Icon/Generate";
import TableRow2 from "./TableRow2";

interface Props {
  items: any[];
  setItems: any;
  onAddProduct: any;
  isLoading: boolean;
  searchText: string;
}
export default function Table({
  items,
  setItems,
  onAddProduct,
  isLoading,
  searchText,
}: Props) {
  const [isSelectAll, setIsSelectAll] = useState<boolean>(false);
  useEffect(() => {
    let j = 0;
    items.map((item: any, index: number) => {
      !item.isSelected ? setIsSelectAll(false) : j++;
    });
    if (j === items?.length) {
      setIsSelectAll(true);
    }
  }, [items]);
  const onCheckAll = () => {
    const isCheckedTmp = !isSelectAll;
    setIsSelectAll(!isSelectAll);
    let res: any[] = [];
    items.map((item) => {
      item.isSelected = isCheckedTmp;
      res.push(item);
    });
    setItems(res);
  };

  return (
    <div className="flex-1 relative">
      <div className="flex text-center">
        <div className="text-12 grow-[2] text-left min-w-[350px] ">
          <div className="flex items-center lg:gap-10 gap-9 border-y border-solid border-[#303030] py-[21px] px-10  h-[63px]">
            <CheckBox onChecked={onCheckAll} isChecked={isSelectAll} />
            <span>Sản phẩm</span>
          </div>
          {items
            .filter((item) => item.name?.includes(searchText))
            .map((item, i) => (
              <TableRow1
                key={i}
                item={item}
                onMouseOver={() => {
                  let res: any[] = [...items];
                  res[i].isHover = true;
                  setItems(res);
                }}
                onMouseOut={() => {
                  let res: any[] = [...items];
                  res[i].isHover = false;
                  setItems(res);
                }}
                onSelected={() => {
                  let res: any[] = [...items];
                  res[i].isSelected = !res[i].isSelected;
                  setItems(res);
                }}
              />
            ))}
        </div>
        <div className=" overflow-y-auto grow-[3] border-l border-solid border-[#303030] md:border-transparent pr-10">
          <div
            className="grid grid-cols-3 items-center justify-center py-[21px] min-w-[1024px] lg:min-w-[400px]
                          border-y border-[#303030] border-solid h-[63px]"
          >
            {/* <div className="text-12 ">Content</div> */}
            {/* <div className="text-12 ">Listed </div> */}
            <div className="text-12 ">Giá </div>
            <div className="text-12 ">Giảm giá</div>
            {/* <div className="text-12">Category</div> */}
            <div className="text-12 ">Hành động</div>
          </div>
          {items
            .filter((item) => item.name?.includes(searchText))
            .map((item, i) => (
              <TableRow2
                key={i}
                index={i}
                item={item}
                setItems={setItems}
                onMouseOver={() => {
                  let res: any[] = [...items];
                  res[i].isHover = true;
                  setItems(res);
                }}
                onMouseOut={() => {
                  let res: any[] = [...items];
                  res[i].isHover = false;
                  setItems(res);
                }}
                onSelected={() => {
                  let res: any[] = [...items];
                  res[i].isSelected = !res[i].isSelected;
                  setItems(res);
                }}
              />
            ))}
        </div>
      </div>
      {items.length == 0 && (
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            transform: "translate(-50%,-50%)",
          }}
        >
          <div className="flex flex-col justify-center items-center w-full min-h-[500px] relative z-10">
            <div className="font-bold font-header text-20 mb-6">
              Thêm sản phẩm vào kho
            </div>
            <ButtonComponent
              padding="py-[15px] px-5"
              onClick={onAddProduct}
              icon
              infoIcon={{ width: "16", height: "16" }}
              Icon={IconPlus}
              title="Thêm sản phẩm"
              classNameText="pl-[10px] font-semibold"
              className=" hover:bg-[#27B12E] bg-primary text-[#252026] rounded-[8px]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
