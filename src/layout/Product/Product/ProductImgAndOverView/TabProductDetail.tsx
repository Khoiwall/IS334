interface Props {
  tab: number;
  setTab: any;
}

function TabProductDetail({ tab, setTab }: Props) {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex-1 pt-5 border-b border-solid border-[#303030]">
        <div className="px-[34px]">
          <div className="flex items-center gap-[30px]">
            <div
              className="flex items-center h-full cursor-pointer"
              onClick={() => {
                tab === 0 ? null : setTab(0);
              }}
            >
              <div
                className={`${
                  tab === 0 ? "border-[#A694BE]" : "border-[#303030]/0"
                } h-full pb-3 border-b-2 border-solid hover:border-[#A694BE] hover:text-[#A694BE]`}
              >
                <span
                  className={`text-[16px] leading-[24px] font-semibold ${
                    tab === 0 ? "text-[#A694BE]" : ""
                  }`}
                >
                  Product Details
                </span>
              </div>
            </div>
            <div
              className="flex items-center h-full cursor-pointer"
              onClick={() => {
                tab === 2 ? null : setTab(2);
              }}
            >
              <div
                className={`${
                  tab === 2 ? "border-[#A694BE]" : "border-[#303030]/0"
                } h-full pb-3 border-b-2 border-solid hover:border-[#A694BE] hover:text-[#A694BE]`}
              >
                <span
                  className={`text-[16px] leading-[24px] font-semibold ${
                    tab === 2 ? "text-[#A694BE]" : ""
                  }`}
                >
                  Reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TabProductDetail;
