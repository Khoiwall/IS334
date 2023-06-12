import { ReactNode } from "react";
import ButtonComponent from "../ButtonComponent";
import { IconX } from "../Icon/Generate";

interface Props {
  title: string;
  setIsOpen: any;
  minHeight?: string;
  minWidth?: string;
  maxHeight?: string;
  children: ReactNode;
  zIndex?: string;
  maxWidth?: string;
}

function ModalNew({
  title,
  setIsOpen,
  minHeight,
  minWidth,
  children,
  maxHeight,
  zIndex,
  maxWidth,
}: Props) {
  return (
    <div
      className={`${
        zIndex || "z-[1000]"
      } fixed top-0 left-0 w-full h-full bg-black/20 p-8`}
    >
      <div className="overflow-auto h-full">
        <div
          className={`flex justify-center items-center h-full ${
            minHeight || "min-h-[662px]"
          } text-white`}
        >
          <div
            className={`flex flex-col relative  bg-[#1B161E] rounded-2xl ${
              minWidth || "min-w-[690px]"
            } ${maxWidth || "max-w-[1008px]"} ${minHeight || "min-h-[662px]"} ${
              maxHeight || "max-h-[662px]"
            }`}
          >
            <div className="border-solid border-b border-[#303030]">
              <div className="px-9 py-[18px]">
                <div className="flex items-center justify-between">
                  <div className="relative">
                    <div className="flex">
                      <h4 className="text-20 font-['Poppins'] text-bold">
                        {title}
                      </h4>
                    </div>
                  </div>
                  <ButtonComponent
                    Icon={IconX}
                    icon={true}
                    padding="p-2"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    infoIcon={{ width: "20", height: "20", stroke: "white" }}
                    className="bg-[#252027] opacity-100 hover:bg-primary rounded-lg hover-svg w-10 h-10"
                  />
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ModalNew;
