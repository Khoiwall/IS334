import { useEffect, useState } from "react";
import toast from "react-hot-toast";
//
import { uploadImage } from "@/utils/uploadImage";
import ButtonComponent from "@/components/ButtonComponent";
import ModalNew from "@/components/ModalNew";
// import { useAppSelector } from "@/hooks/reduxHooks";
// import { BytePlusAPI } from "src/services/api";
import DetailsSection from "./DetailsSection";
import PreviewSection from "./PreviewSection";
import VerticalTabSection from "./VerticalTabSection";
import { useAppSelector } from "@/hook/reduxHook";
import { VideoAPI } from "@/api";
// import VideoAPI from "src/services/api-v1.5/VideoAPI";
interface Props {
  setIsOpen: any;
  selectedFile: File | undefined;
  setVideos: any;
  setIsShowVideoDetailModal: any;
}
export default function VideoDetailModal({
  setIsOpen,
  selectedFile,
  setVideos,
  setIsShowVideoDetailModal,
}: Props) {
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [video, setVideo] = useState<any>({
    products: [] as any,
    comment: true,
    url: window.URL.createObjectURL(selectedFile as File),
    name: (selectedFile as File).name.replace(/\.[^/.]+$/, ""),
    fileName: (selectedFile as File).name,
  } as any);
  const [publishVideo, setPublishVideo] = useState<number>(0);
  const { user } = useAppSelector((state: any) => state.authRedux);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  //UploadVideo to server

  const uploadVideo = async () => {
    const toastId = toast.loading("Uploading...");
    if (!video?.images || video?.images?.length === 0) {
      toast.error("Please add Thumbnails", { id: toastId });
      setIsLoading(false);
      return;
    }
    setIsLoading(true);

    //Upload thumbnails to UploadCare
    let images: string[] = [];
    for (let i = 0; i < video?.images?.length; i++) {
      await uploadImage(video?.images[i], images, toast, setIsLoading);
    }
    //valuedate
    let tmpVideo = { ...video, images };

    const data = new FormData();
    data.append("file", selectedFile!);
    data.append("upload_preset", "video-preview");
    data.append("tags", "video_preivew");
    data.append("cloud_name", "khoild11");
    await fetch("https://api.cloudinary.com/v1_1/khoild11/video/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        onUploadVideo({ ...tmpVideo, link: data.url }, toastId);
      })
      .catch((err) => console.log(err));
  };

  const onUploadVideo = async (video: any, toastId: any) => {
    const response = await VideoAPI.addVideo(video);
    if (response && response?.data?.status === "success") {
      setVideos((prev: any) => [...prev, response?.data?.data]);
      toast.success("Thêm video thành công", { id: toastId });
      setIsOpen(false);
    } else {
      toast.error("Thêm video thất bại", { id: toastId });
    }
    setIsLoading(false);
  };

  return (
    <ModalNew
      title={video?.title}
      setIsOpen={setIsShowVideoDetailModal}
      minHeight={"min-h-[811px]"}
      minWidth="min-w-[1384px]"
    >
      <div className="flex flex-col flex-1 overflow-auto relative border-solid border-r border-r-[#303030]">
        <div className="mr-[384px] flex-1 flex flex-col overflow-scroll">
          <div className="flex flex-col max-h-full">
            <DetailsSection
              setPublishVideo={setPublishVideo}
              publishVideo={publishVideo}
              video={video}
              setVideo={setVideo}
            />
          </div>
        </div>
        <PreviewSection video={video} />
      </div>

      <div className="bottom-0 z-10 w-full bg-[#1B161E] border-solid border-t border-[#303030]">
        <div className="flex justify-end px-10 py-[18px]">
          <ButtonComponent
            padding="py-[15px] px-6"
            onClick={() => {
              isLoading ? null : setIsShowVideoDetailModal(false);
            }}
            title="CANCEL"
            className="bg-transparent hover:opacity-60 rounded-lg"
            classNameText="text-14 font-normal"
          />
          <ButtonComponent
            padding="py-[15px] px-6"
            onClick={isLoading ? () => {} : uploadVideo}
            title="Thêm video"
            className="hover:bg-[#27B12E] bg-primary text-black rounded-lg"
            classNameText="text-14 font-semibold"
          />
        </div>
      </div>
    </ModalNew>
  );
}
