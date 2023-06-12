import { toast } from "react-hot-toast";
// import { converImgCollection } from "src/app/untils/convertImg";
// import { PenIcon } from "src/components/Icon";
import { useContext, useState } from "react";
import UploadImage from "./UploadImages";
import ConverICon from "../ConvertIcon";
import { IconPen } from "../Icon/Manage";
// import { UploadAPI, UserAPI } from "src/services/api";

interface Props {
  setCoverImage?: any;
  fileCoverImage?: File | undefined;
  settings?: boolean;
  isProfile?: boolean;
  urlCoverImage: string | undefined;
  setUrlCoverImageTmp?: any;
}
function BackGroundUser({
  setCoverImage,
  fileCoverImage,
  settings,
  urlCoverImage,
  isProfile,
  setUrlCoverImageTmp,
}: Props) {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const eidtCover = async (file: File) => {
    // let urlCoverImage: string = "";
    // setIsloading(true);
    // setUrlCoverImageTmp(URL.createObjectURL(file));
    // const responseUploadCover = await UploadAPI.uploadImg(file as File);
    // if (responseUploadCover && responseUploadCover.status === 200) {
    //   urlCoverImage = converImgCollection(
    //     (responseUploadCover as any)?.data?.file,
    //     file?.type as string
    //   );
    //   const response = await UserAPI.updateCoverImageOrAvatar(
    //     urlCoverImage,
    //     true
    //   );
    //   if (response && response?.data?.status === "Success") {
    //     toast.success("Edit image cover success");
    //   }
    // } else {
    //   toast.error("Thêm file cover image err");
    // }

    setIsloading(false);
  };
  return (
    <div
      className={`bg-[#110B14] w-full h-full sm:rounded-[40px] rounded-[20px] overflow-hidden`}
    >
      <div className="w-full h-full">
        <div className="relative w-full h-full">
          {fileCoverImage || urlCoverImage ? (
            <div className="relative w-full h-full">
              <div className="absoulute top-0 left-0 w-full h-full">
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat	"
                  style={{
                    backgroundImage: `url(${
                      fileCoverImage
                        ? URL.createObjectURL(fileCoverImage)
                        : urlCoverImage
                    })`,
                  }}
                />
              </div>
            </div>
          ) : settings && !urlCoverImage ? (
            <div className="sm:p-[30px] p-[13px] flex items-center justify-center h-full">
              <div
                className={`flex flex-col gap-2.5 text-white/80 text-center`}
              >
                <h3 className="font-semibold sm:text-[26px] sm:leading-[31px] text-[14px] leading-[17px]">
                  Cover image
                </h3>
                <span className="sm:text-[14px] text-[10px] sm:leading-[24px] leading-[12px] sm:w-auto w-[205px]">
                  1500×500px. Must be JPEG, PNG, or GIF and cannot exceed 10MB.
                </span>
              </div>
            </div>
          ) : null}
          {settings ? (
            <div className="absolute sm:right-[30px] right-[13px] sm:bottom-[30px] bottom-[13px] z-30">
              <div className="flex w-full items-center justify-end">
                <button
                  type="button"
                  className={`rounded-xl cursor-pointer bg-white/10 hover:bg-white/30`}
                  onClick={() => {
                    var button = document.querySelector(
                      "#coverImage"
                    ) as HTMLButtonElement;
                    button ? button.click() : null;
                  }}
                >
                  <div className="sm:px-[30px] sm:py-4 p-2.5">
                    <span className="font-bold  text-[14px] leading-[17px] sm:block hidden">
                      Upload Cover
                    </span>
                    <div className="sm:hidden block">
                      <ConverICon
                        Icon={IconPen}
                        width="18"
                        height="18"
                        stroke="white"
                      />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          ) : isProfile ? (
            <div className="absolute sm:right-[30px] right-[13px] sm:bottom-[30px] bottom-[13px] z-30">
              <div className="flex w-full items-center justify-end">
                <button
                  type="button"
                  className={`rounded-xl cursor-pointer bg-white/10 hover:bg-white/30`}
                  onClick={() => {
                    var button = document.querySelector(
                      "#coverImage"
                    ) as HTMLButtonElement;
                    button ? (isLoading ? null : button?.click()) : null;
                  }}
                >
                  <div className="sm:px-[30px] sm:py-4 p-2.5">
                    {isLoading ? (
                      "..."
                    ) : (
                      <>
                        <span className="font-bold text-[#110B14] text-[14px] leading-[17px] sm:block hidden">
                          Edit Cover
                        </span>
                        <div className="sm:hidden block">
                          <ConverICon
                            Icon={IconPen}
                            width="18"
                            height="18"
                            stroke="white"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </button>
              </div>
            </div>
          ) : null}
          <UploadImage
            id={"coverImage"}
            settings={settings}
            editImage={eidtCover}
            setImage={setCoverImage}
            isProfile={isProfile}
          />
        </div>
      </div>
    </div>
  );
}
export default BackGroundUser;
