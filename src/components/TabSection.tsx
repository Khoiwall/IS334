interface Props {
  setCurrentTab: any;
  currentTab: number;
  tabs: string[];
  gap?: string;
  paddingX?: string;
  paddingB?: string;
}

function TabSection({
  setCurrentTab,
  currentTab,
  tabs,
  gap,
  paddingX,
  paddingB,
}: Props) {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex-1 pt-7 border-b border-solid border-[#303030]">
        <div className={`${paddingX || "px-0"}`}>
          <div className={`flex items-center ${gap ?? " gap-[30px]"}`}>
            {tabs?.map((tab, i) => (
              <div
                key={tab}
                className="flex items-center h-full cursor-pointer"
                onClick={() => {
                  currentTab === i ? null : setCurrentTab(i);
                }}
              >
                <div
                  className={`${
                    currentTab === i ? "border-primary" : "border-[#303030]/0"
                  } h-full ${
                    paddingB || "pb-3"
                  } border-b-2 border-solid hover:border-primary hover:text-primary`}
                >
                  <span
                    className={`text-14 ${
                      currentTab === i
                        ? "text-primary font-semibold"
                        : "text-white/80"
                    }`}
                  >
                    {tab}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TabSection;
