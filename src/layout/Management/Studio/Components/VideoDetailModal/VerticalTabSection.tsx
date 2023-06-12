interface Props {
  setCurrentTab: any;
  currentTab: number;
  tabs: string[];
  gap?: string;
}

export default function VerticalTabSection({
  setCurrentTab,
  currentTab,
  tabs,
  gap,
}: Props) {
  return (
    <div
      className={`flex flex-col py-[23px] px-[31px] items-center ${gap ?? " gap-[10px]"}`}
    >
      {tabs.map((tab, i) => (
        <div
          key={tab}
          className="flex items-center h-full cursor-pointer"
          onClick={() => {
            currentTab === i ? null : setCurrentTab(i);
          }}
        >
          <a
            href={`#${tab}`}
            className={`${
              currentTab === i ? "border-primary bg-[#110B14]" : "border-[#303030]/0"
            } hover:text-primary w-[242px] h-[56px] rounded-xl flex items-center gap-[20px] pl-4`}
          >
            <div
              className={`${
                currentTab != i ? "bg-opacity-[0.2] bg-white " : "bg-primary"
              } w-6 h-6 rounded-full leading-[24px] text-black text-center text-sm font-semibold`}
            >
              {i + 1}
            </div>
            <div
              className={`text-[16px] leading-[24px] ${
                currentTab === i ? "text-primary font-semibold" : "opacity-70"
              }`}
            >
              {tab}
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
