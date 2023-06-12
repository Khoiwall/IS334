import { useState } from "react";
import { toast } from "react-hot-toast";

import ButtonComponent from "@/components/ButtonComponent";
import ConverICon from "@/components/ConvertIcon";
import { IconSearchSm, IconTrash } from "@/components/Icon/Generate";
// import VideoAPI from "src/services/api-v1.5/VideoAPI";

interface Props {
  videos: any[];
  setVideos: any;
}

function ActionStudio({ videos, setVideos }: Props) {
  const [hover, setHover] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const deleteVideo = async () => {
    setIsLoading(true);
    const videoDelete = videos?.filter((video) => {
      return video?.isSelected;
    });
    const wait = setInterval(() => {
      setIsLoading(false);
      setVideos((prev: any[]) => {
        return prev?.filter((_prev) => {
          return !_prev?.isSelected;
        });
      });
      toast.success("Delete video success");
      clearInterval(wait);
    }, 600);
    // await VideoAPI.ActiveVideo(videoDelete);
  };
  return (
    <div className="relative">
      <div className="py-6">
        <div className="flex flex-col">
          <div className="relative">
            <div className="flex gap-5">
              <div className="flex md:w-[644px] w-full h-[52px] bg-container rounded-xl py-[15px] px-[23px]">
                <ConverICon Icon={IconSearchSm} stroke="white" />
                <input
                  placeholder="Tìm kiếm videos..."
                  className="text-[16px] bg-container w-full ml-5"
                  //   onChange={(e) => setSearchText(e.target.value)}
                ></input>
              </div>
              {/* <ButtonComponent
                  Icon={IconFilter}
                  icon={true}
                  padding="p-[9px] opacity-70"
                  onClick={() => {}}
                  infoIcon={{ width: "24", height: "24", stroke: "white" }}
                  className="bg-[#252027] hover:bg-primary rounded-lg hover:text-[#252027] hover-svg w-[52px] h-[52px]"
                /> */}
            </div>
          </div>
          {videos?.filter((video) => {
            return video?.isSelected;
          })?.length !== 0 && (
            <div className="flex items-center mt-6">
              <div className="relative">
                <span className="text-16 text-white/70">
                  {videos?.filter((video) => {
                    return video?.isSelected;
                  })?.length || 0}
                  &nbsp; Đã chọn
                </span>
              </div>
              &nbsp;&nbsp;
              <div className="border-l w-[1px] h-[39px] border-solid border-[#303030]"></div>
              &nbsp;&nbsp;
              <div
                onMouseOut={() => {
                  setHover(false);
                }}
                onMouseOver={() => {
                  setHover(true);
                }}
              >
                <ButtonComponent
                  Icon={IconTrash}
                  icon={true}
                  isLoading={isLoading}
                  className="bg-container hover:bg-primary text-white/70 hover:text-[#110B14] rounded-lg"
                  padding="py-[16px] px-8"
                  infoIcon={{
                    width: "20",
                    height: "20",
                    stroke: hover ? "#110B14" : "#ffffffb3",
                  }}
                  onClick={isLoading ? () => {} : deleteVideo}
                  gapIconAndText="gap-3"
                  title="Delete"
                  classNameText="text-16 font-medium"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ActionStudio;
