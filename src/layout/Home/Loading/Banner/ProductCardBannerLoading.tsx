import { Skeleton } from "@mui/material";

function ProductCardBannerLoading() {
  return (
    <div className="h-full absolute top-0 -left-8 nft flex items-center z-[50]">
      <div className="relative lg:hidden block nft-stream">
        <div className="flex items-center h-full">
          <div className="p-6 bg-[#1B161E] rounded-[24px]">
            <div className="flex items-center gap-5">
              <div className="relative pt-16 pl-16">
                <div className="absolute top-0 left-0 w-full h-full">
                  <Skeleton
                    width="100%"
                    height="100%"
                    sx={{ borderRadius: "50%" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-[16px] leading-[19px] text-white font-semibold">
                    <Skeleton width="83px" height="19px" />
                  </h4>
                  <span className="flex items-center rounded-full">
                    <Skeleton
                      width="19px"
                      height="19px"
                      sx={{ borderRadius: "9999px" }}
                    />
                  </span>
                </div>
                <div className="mt-1.5">
                  <span className="max-w-[255px] truncate block text-[12px] leading-[15px] text-white/70">
                    <Skeleton width="255px" height="15px" />
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-[16px] leading-[24px] font-semobild font-['Inter'] text-white">
                <Skeleton width="123px" height="24px" />
              </h3>
              <div className="mt-4">
                <div className="flex gap-6">
                  <div className="relative pt-[160px] pl-[160px]">
                    <div className="absolute top-0 left-0 w-full h-full">
                      <Skeleton
                        width="100%"
                        height="100%"
                        sx={{ borderRadius: "12px" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="max-w-[1580px] truncate text-[18px] leading-[22px] font-semibold text-white">
                        <Skeleton width="124px" height="22px" />
                      </h4>
                      <Skeleton
                        width="19px"
                        height="19px"
                        sx={{ borderRadius: "50%" }}
                      />
                    </div>
                    <div className="mt-2">
                      <span className="text-[14px] leading-[17px] text-white/70">
                        <Skeleton width="96px" height="17px" />
                      </span>
                    </div>
                    <div className="mt-[19px]">
                      <Skeleton width="66px" height="24px" />
                    </div>
                    <div className="mt-3">
                      <Skeleton
                        width="133px"
                        height="51px"
                        sx={{ borderRadius: "12px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCardBannerLoading;
