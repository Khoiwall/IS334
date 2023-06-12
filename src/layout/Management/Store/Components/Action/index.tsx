import { useState } from "react";
import { toast } from "react-hot-toast";
// import { ProductRye } from "@//types";
import ButtonComponent from "@/components/ButtonComponent";
import ConverICon from "@/components/ConvertIcon";
import { IconSearchSm, IconTrash } from "@/components/Icon/Generate";
// import { ProductAPI } from "src/services/api-v1.5";

interface Props {
  items: any[];
  setItems: any;
  setSearchText: any;
}

function Action({ items, setItems, setSearchText }: Props) {
  const [hover, setHover] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const deleteProduct = async () => {
  //   setIsLoading(true);
  //   const deletedIds = items
  //     .filter((item: any) => item.isSelected)
  //     .map((item: any) => item._id);
  //   const response = await ProductAPI.RemoveProduct(deletedIds);
  //   if (response.data && response.data.status == "Success") {
  //     const deletedItems = [...items.filter((item: any) => !item.isSelected)];
  //     setItems(deletedItems);
  //   } else toast.error("Error occurs!");
  //   setIsLoading(false);
  // };
  return (
    <div className="flex flex-col px-10 py-6">
      <div className="relative">
        <div className="flex gap-5">
          <div className="flex md:w-[644px] w-full h-[52px] bg-container rounded-xl py-[15px] px-[23px]">
            <ConverICon Icon={IconSearchSm} stroke="white" />
            <input
              placeholder="Search Products..."
              className="text-[16px] bg-container w-full ml-5 outline-none"
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          {/* <ButtonComponent
                  Icon={IconFilter}
                  icon={true}
                  padding="p-[9px] opacity-70"
                  onClick={() => {}}
                  infoIcon={{ width: "24", height: "24", stroke: "white" }}
                  className="bg-[#252027] hover:bg-primary rounded-lg hover:text-[#252027] hover-svg w-[52px] h-[52px]"
                /> */}
        </div>
      </div>
      {items?.filter((video) => {
        return video?.isSelected;
      })?.length !== 0 && (
        <div className="flex items-center mt-6">
          <div className="relative">
            <span className="text-16 text-white/70">
              {items?.filter((video) => {
                return video?.isSelected;
              })?.length || 0}
              &nbsp;Selected
            </span>
          </div>
          &nbsp;&nbsp;
          <div className="border-l w-[1px] h-[39px] border-solid border-[#303030]"></div>
          &nbsp;&nbsp;
          <div
            onMouseOut={() => {
              setHover(false);
            }}
            onMouseOver={() => {
              setHover(true);
            }}
          >
            <ButtonComponent
              Icon={IconTrash}
              icon={true}
              isLoading={isLoading}
              className="bg-container hover:bg-primary text-white/70 hover:text-[#110B14] rounded-lg"
              padding="py-[16px] px-8"
              infoIcon={{
                width: "20",
                height: "20",
                stroke: hover ? "#110B14" : "#ffffffb3",
              }}
              // onClick={isLoading ? () => {} : deleteProduct}
              gapIconAndText="gap-3"
              title="Delete"
              classNameText="text-16 font-medium"
            />
          </div>
        </div>
      )}
    </div>
  );
}
export default Action;
