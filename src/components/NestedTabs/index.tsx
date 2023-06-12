import { current } from "@reduxjs/toolkit";
import ConverICon from "../ConvertIcon";
import { IconChevronRight } from "../Icon/Arrow";

interface Props {
  marginBot: string;
  tabs: string[];
  currentTab?: string;
}

function NestedTabs({ marginBot, tabs, currentTab }: Props) {
  return (
    <div className={`${marginBot} text-white`}>
      <div className="relative overflow-hiden">
        <div className="w-full">
          <div className="flex items-center overflow-hidden gap-1">
            {tabs?.map((tab, index) => {
              return index === 0 ? (
                <div key={tab} className="flex">
                  <div className="relative">
                    <div className="overflow-hidden truncate max-w-[100px]">
                      <span
                        className={`${
                          currentTab === tab && currentTab ? "text-[#37F040]" : ""
                        } text-[13px] leading-[20px] font-medium`}
                      >
                        {tab}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div key={tab} className="flex items-center overflow-hidden gap-1">
                  <ConverICon
                    Icon={IconChevronRight}
                    width="20"
                    height="20"
                    stroke="#ffffff66"
                  />
                  <div className="flex">
                    <div className="relative">
                      <div className="overflow-hidden truncate max-w-[100px]">
                        <span
                          className={`${
                            currentTab === tab && currentTab ? "text-[#37F040]" : ""
                          } text-[14px] leading-[20px] font-medium`}
                        >
                          {tab}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default NestedTabs;
