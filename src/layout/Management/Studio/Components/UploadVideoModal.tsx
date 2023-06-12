import { Modal } from "@mui/material";
import ButtonComponent from "@/components/ButtonComponent";
import { IconX } from "@/components/Icon/Generate";
import ConvertICon from "@/components/ConvertIcon";
import { IconArrowNarrowUp } from "@/components/Icon/Arrow";
import { useEffect, useState } from "react";
import VideoDetailModal from "./VideoDetailModal";
//

interface Props {
  isOpen: boolean;
  setIsOpen: any;
  setVideos: any;
}
export default function UploadVideoModal({
  isOpen,
  setIsOpen,
  setVideos,
}: Props) {
  const [isShowVideoDetailModal, setIsShowVideoDetailModal] =
    useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | undefined>();
  const onSelectFile = () => {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "video/mp4,video/x-m4v,video/*";
    input.onchange = (e: any) => {
      var file = e.target.files[0];
      setSelectedFile(file);
      setIsShowVideoDetailModal(true);
    };

    input.click();
  };
  return (
    <Modal open={isOpen}>
      <div className="overflow-auto h-[100vh]">
        <div className="flex justify-center items-center h-[100vh] min-h-[713px] w-[100vw] text-white">
          {isShowVideoDetailModal && (
            <VideoDetailModal
              setVideos={setVideos}
              setIsOpen={setIsOpen}
              selectedFile={selectedFile}
              setIsShowVideoDetailModal={setIsShowVideoDetailModal}
            />
          )}
          <div className="flex flex-col justify-between items-center bg-[#1B161E] rounded-2xl min-w-[900px] min-h-[713px]">
            <div className="self-stretch flex justify-between items-center mt-[30px] mx-[40px]">
              <h1 className="font-['Poppins'] text-20 font-bold ">
                Thêm video
              </h1>
              <ButtonComponent
                Icon={IconX}
                icon={true}
                padding="p-2"
                onClick={() => {
                  setIsOpen(false);
                }}
                infoIcon={{ width: "18", height: "18", stroke: "white" }}
                className="bg-[#252027] opacity-100 hover:bg-[#27B12E] rounded-lg hover-svg "
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex justify-center items-center rounded-full bg-[#322E35] m-auto w-[154px] h-[154px] mt-[50px] mb-12">
                <ConvertICon
                  Icon={IconArrowNarrowUp}
                  width="80"
                  height="80"
                  stroke="white"
                />
              </div>
              <div className="text-20 font-['Poppins'] font-semibold">
                Kéo và thả tệp video để tải lên
              </div>
              <div className="text-base text-[#A09DA1] mb-12 mt-4">
                Video của bạn sẽ ở chế độ riêng tư cho đến khi bạn xuất bản
                chúng.{" "}
              </div>
              <ButtonComponent
                padding="py-[15px] px-6"
                onClick={onSelectFile}
                title="Thêm file"
                className=" hover:bg-[#27B12E] bg-primary text-black rounded-lg"
                classNameText="text-14 font-semibold"
              />
            </div>
            <div className="text-xs font-semibold text-[#A09DA1] mt-[50px] mb-10">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
