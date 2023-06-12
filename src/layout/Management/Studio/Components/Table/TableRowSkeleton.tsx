import { Skeleton } from "@mui/material";
import CheckBox from "./CheckBox";

export default function TableRowSkeleton() {
  return (
    <div className="grid grid-cols-12 items-center h-[124px] py-6 pr-6 pl-10 w-full skeleton-video">
      <div className="flex items-center gap-10 col-span-4">
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
            <Skeleton variant="rounded" height={16} width={178} />
            <Skeleton variant="rounded" height={10} width={119} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 col-span-8">
        <div className="flex justify-center">
          <Skeleton variant="rounded" height={10} width={80} />
        </div>
      </div>
    </div>
  );
}
