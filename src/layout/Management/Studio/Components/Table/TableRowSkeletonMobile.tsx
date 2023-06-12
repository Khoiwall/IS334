import { Skeleton } from "@mui/material";
import { useContext } from "react";
import CheckBox from "./CheckBox";

interface Props {
  left: boolean;
}

function TableRowSkeletonMobile({ left }: Props) {
  return (
    <>
      {left ? (
        <div className="flex text-center skeleton-video">
          <div className="flex flex-col border-r-2 border-[#303030] border-solid sm:min-w-[420px] min-w-[300px] sm:max-w[420px] max-w-[300px]">
            <div className="py-6 pr-4 pl-10">
              <div className="flex items-center gap-10">
                <div className="text-sm ">
                  <CheckBox onChecked={() => {}} />
                </div>
                <div className="text-sm 2xl:flex hidden flex-1 items-center">
                  <Skeleton variant="rounded" width={120} height={76} />
                  <div className="pl-5 flex flex-col gap-4">
                    <Skeleton variant="rounded" height={18} width={145} />
                    <Skeleton variant="rounded" height={12} width={162} />
                  </div>
                </div>
                <div className="text-sm 2xl:hidden flex flex-1 items-center">
                  <Skeleton variant="rounded" width={108} height={68} />
                  <div className="pl-5 flex flex-col gap-4">
                    <Skeleton variant="rounded" height={16} width={140} />
                    <Skeleton variant="rounded" height={10} width={119} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="pl-4 py-6 skeleton-video skeleton-video">
          <div className="grid grid-cols-3 col-span-8 h-[68px] items-center">
            <div className="flex justify-center">
              <Skeleton variant="rounded" height={10} width={80} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default TableRowSkeletonMobile;
