import { Skeleton } from "@mui/material";

const SKELETON = [1, 2, 3];

function LoadingProduct() {
  return (
    <div className="flex flex-col md:flex-row mt-5 mb-10 skeleton-video">
      <div className="flex flex-row shrink-0">
        <div className="hidden md:flex flex-col mr-[10px] gap-2 cursor-pointer max-h-[330px] overflow-auto">
          {SKELETON?.map((index) => {
            return (
              <div className=" w-[100px] rounded-2xl element-shadow" key={index}>
                <Skeleton width="100%" height="100px" sx={{ borderRadius: "16px" }} />
              </div>
            );
          })}
        </div>
        <div className="grow">
          <div className="overflow-hidden  w-[100%] md:w-[330px] rounded-2xl element-shadow">
            <Skeleton width="100%" height="330px" sx={{ borderRadius: "16px" }} />
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-0 md:ml-10 md:mr-10 flex-1">
        <Skeleton width="100%" height="32px" />
        <p className="mb-3 text-xs capitalize text-[#8F8BA3] text-white/80 mt-2">
          <Skeleton width="100%" height="112px" />
        </p>
        <ul className="my-2">
          <li>
            <Skeleton width="100px" height="35.5px" />
            <ul className="flex flex-row flex-wrap gap-2 mt-2">
              {SKELETON?.map((index) => {
                return (
                  <li key={index} className={`min-w-[100px] flex-1`}>
                    <div className="w-full flex justify-center items-center">
                      {" "}
                      <Skeleton width="100%" height="37px" />
                    </div>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
        <Skeleton width="100%" height="48px" />
      </div>
    </div>
  );
}
export default LoadingProduct;
