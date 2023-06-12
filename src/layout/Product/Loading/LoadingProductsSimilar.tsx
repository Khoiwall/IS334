import { Skeleton } from "@mui/material";

const SKELETON = [1, 2, 3, 4, 5];

function LoadingProductsSimilar() {
  return (
    <div className="skeleton-video">
      <Skeleton width="120px" height="32px" />
      <ul className="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-2 gap-2 md:gap-5">
        {SKELETON?.map((index) => {
          return (
            <li className="flex flex-col w-full " key={index}>
              <div className="rounded-2xl w-full h-full">
                <div className="overflow-hidden h-[253px] w-[100%] rounded-2xl">
                  <Skeleton width="100%" height="100%" sx={{ borderRadius: "16px" }} />
                </div>
              </div>
              <div className="py-3 flex flex-col">
                <div className="mint-ellipsis">
                  <b className="text-base lowercase text-white hover:text-[#4AE052]">
                    <Skeleton width="100%" height="48px" />
                  </b>
                </div>
                <span className="block text-base lowercase text-white mt-1.5">
                  <Skeleton width="100%" height="24px" />
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default LoadingProductsSimilar;
