import { Switch } from "@mui/material";
import ListPriceEditor from "./ListPriceEditor";
import { useState } from "react";
// import { ProductAPI } from "src/services/api-v1.5";
import toast from "react-hot-toast";
import { ProductAPI } from "@/api";

interface Props {
  item: any;
  setItems: any;
  index: number;
  onMouseOver: any;
  onMouseOut: any;
  onSelected: any;
}
export default function TableRow({
  item,
  setItems,
  onMouseOver,
  onMouseOut,
  onSelected,
  index,
}: Props) {
  const onUpdateListPrice = async (discount: number) => {
    const response = await ProductAPI.updateDiscount(item._id, discount);
    if (!response || (response?.status != 200 && response?.status != 201))
      toast.error("Error happen!");
    else {
      setItems((prev: any) => {
        let tmp = [...prev];
        tmp[index].listPrice = response.data.data;
        return tmp;
      });
      toast.success("Update Discount Success");
    }
  };

  return (
    <div
      className={`grid grid-cols-5 items-center justify-center py-[21px] min-w-[1024px] lg:min-w-[400px] h-[108px] 
      border-b border-solid border-[#303030] ${item.isHover && "bg-[#1B161E]"}`}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <div>-</div>
      {/* <div>
        <Switch checked={item.isListed} onClick={onUpdateIsListed} />
      </div> */}
      <div>{item.price}</div>
      <div className="flex justify-center">
        <ListPriceEditor
          value={Math.floor(((item.discount || 0) * 100) / 100)}
          onChange={onUpdateListPrice}
        />
      </div>
      <div>category</div>
      <div>
        <button
          // onClick={() => {
          //   setIsShowProductFeaturedModal(true);
          // }}
          className="hover-svg rounded-lg bg-black px-6 py-[15px]
         text-14 font-semibold outline outline-1 outline-red-500 hover:bg-red-600 text-red-500 hover:text-white"
        >
          DELETE
        </button>
        {/* {isShowProductFeaturedModal && (
          <ProductFeaturedModal
            product_id={item._id}
            setIsOpen={setIsShowProductFeaturedModal}
          />
        )} */}
      </div>
    </div>
  );
}
