import { useEffect, useState, useRef } from "react";
import ButtonComponent from "@/components/ButtonComponent";
import TabSection from "@/components/TabSection";
import UploadVideoModal from "./Components/UploadVideoModal";
import CheckLogin from "@/components/NoLogin";
import { useRouter } from "next/router";
import { useAppSelector } from "@/hook/reduxHook";
import Table from "./Components/Table";
import ActionStudio from "./Components/Action";
import { VideoAPI } from "@/api";
// import VideoAPI from "src/services/api-v1.5/VideoAPI";

export default function Studio() {
  const { tab } = useRouter()?.query;
  const tabs = ["VIDEOS"];
  const [currentTab, setCurrentTab] = useState<number>(0);
  const [videos, setVideos] = useState<any[]>([]);
  const [isShowUploadModal, setIsShowUploadModel] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { user } = useAppSelector((state: any) => state.authRedux);

  const oneRequest = useRef(false);

  async function asyncFunc() {
    const response = await VideoAPI.getVideos();
    if (response && response?.data?.status === "success") {
      setVideos(response.data?.data ?? []);
    }
    setIsLoading(true);
  }

  const onUploadVideo = (isLive?: boolean) => {
    setIsShowUploadModel(true);
  };

  useEffect(() => {
    if (user) {
      if (oneRequest?.current === false) {
        oneRequest.current = true;
        asyncFunc();
      }
    }
  }, [user]);

  useEffect(() => {
    if (tab === "live") {
      setCurrentTab(2);
    }
  }, [tab]);

  if (!user) return <CheckLogin text={"Vui lòng đăng nhập"} />;
  return (
    <div className="">
      <div className="font-['Inter'] text-white py-12 flex flex-col min-h-screen">
        {isShowUploadModal && (
          <UploadVideoModal
            setVideos={setVideos}
            isOpen={isShowUploadModal}
            setIsOpen={setIsShowUploadModel}
          />
        )}

        <div className="flex items-center overflow-auto px-10 pt-6">
          <h1 className="font-['Poppins'] text-20 font-bold flex-1">
            Nội dung kênh
          </h1>
          <div className="flex gap-4">
            <ButtonComponent
              padding="py-[15px] px-6"
              onClick={() => {
                setIsShowUploadModel(true);
              }}
              title="Thêm video"
              className="hover:bg-[#27B12E] bg-primary text-black rounded-lg"
              classNameText="text-14"
            />
          </div>
        </div>
        <div className="px-10">
          <TabSection
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            tabs={tabs}
            gap="gap-10"
            paddingB="pb-4"
          />
        </div>
        <div className="flex justify-start px-10">
          <ActionStudio videos={videos} setVideos={setVideos} />
        </div>
        <Table
          items={videos}
          setItems={setVideos}
          onUploadVideo={onUploadVideo}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
