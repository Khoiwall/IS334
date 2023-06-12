import { useState } from "react";
import ConverICon from "../ConvertIcon";
import { IconAddFill, IconPlus } from "../Icon/Manage";
import ImageAndGifNew from "../ImageAndGifNew";
import UploadImage from "./UploadImages";
// import { converImgCollection } from "src/app/untils/convertImg";
// import { ImageAddFillIcon, ImageUserPlusIcon } from "src/components/Icon";
// import ImageAndGif from "src/components/ImageAndGif";
// import { useAppDispatch } from "src/hooks/reduxHooks";
// import { UploadAPI, UserAPI } from "src/services/api";
// import { getUser } from "src/stores/reducers/userInfoSlice";

interface Props {
  setAvatar?: any;
  avatar?: File | undefined;
  settings?: boolean;
  isProfile?: boolean;
  urlAvatar: string;
  setUrlAvatarTmp?: any;
}
function AvatarUser({
  avatar,
  setAvatar,
  settings,
  urlAvatar,
  isProfile,
  setUrlAvatarTmp,
}: Props) {
  const [isLoading, setIsloading] = useState<boolean>(false);
  //   const dispatch = useAppDispatch();

  const editAvatar = async (file: File) => {
    // let urlAvatar: string = "";
    // setIsloading(true);
    // setUrlAvatarTmp(URL.createObjectURL(file));
    // const responseUploadCover = await UploadAPI.uploadImg(file as File);
    // if (responseUploadCover && responseUploadCover.status === 200) {
    //   urlAvatar = converImgCollection(
    //     (responseUploadCover as any)?.data?.file,
    //     file?.type as string
    //   );
    //   const response = await UserAPI.updateCoverImageOrAvatar(urlAvatar, false);
    //   if (response && response?.data?.status === "Success") {
    //     dispatch(getUser(response?.data?.data));
    //     toast.success("Edit avatar success");
    //   }
    // } else {
    //   toast.error("Thêm file avatar err");
    // }
    setIsloading(false);
  };
  return (
    <div className="relative sm:-mt-[85px] -mt-[62px] sm:max-w-[400px] max-w-[200px]">
      <div className={`${settings ? "sm:pl-[115px]" : "sm:pl-[55px]"} pl-2.5`}>
        <div className="relative sm:w-[200px] sm:h-[200px] h-[124px] w-[124px]">
          <div
            className={`w-full h-full rounded-full absolute top-0 left-0 bg-[#1B161E]`}
          ></div>
          {isProfile ? (
            <div
              onClick={() => {
                var button = document.querySelector(
                  "#avatarUser"
                ) as HTMLButtonElement;
                button ? (isLoading ? null : button?.click()) : null;
              }}
              className={`z-[100] absolute bottom-2.5 right-2.5 sm:w-14 sm:h-14 w-8 h-8 rounded-full bg-[#1B161E] cursor-pointer`}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] rounded-full bg-[#FFFFFF] hover:bg-[#FFFFFF]/80">
                  <div className="w-full h-full flex items-center justify-center">
                    {isLoading ? (
                      "..."
                    ) : (
                      <ConverICon
                        Icon={IconPlus}
                        width="22"
                        height="22"
                        widthM="14"
                        heightM="14"
                        stroke="white"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          <div className="w-full h-full flex items-center justify-center">
            <div className="relative rounded-full sm:h-[180px] sm:w-[180px] h-[116px] w-[116px] overflow-hidden edit-avatar">
              <div className="w-full h-full absolute top-0 left-0 z-10">
                {avatar || urlAvatar ? (
                  <ImageAndGifNew
                    src={avatar ? URL.createObjectURL(avatar) : urlAvatar || ""}
                    alt="avatar"
                    className="w-full h-full"
                    rounded="rounded-full"
                  />
                ) : null}
              </div>
              {settings ? (
                <div
                  onClick={() => {
                    var button = document.querySelector(
                      "#avatarUser"
                    ) as HTMLButtonElement;
                    button ? button?.click() : null;
                  }}
                  className="z-30 absolute top-0 left-0 w-full h-full items-center justify-center cursor-pointer hidden avatar-user"
                >
                  <div className="relative flex items-center sm:w-[158px] sm:h-[158px] h-[95px] w-[95px]">
                    <div className="w-full h-full absolute top-0 left-0">
                      <div
                        className=" w-full h-full rounded-full flex items-center justify-center"
                        style={{
                          background: "rgba(0, 0, 0, 0.56)",
                        }}
                      >
                        <ConverICon
                          Icon={IconAddFill}
                          width="44"
                          height="44"
                          widthM="28"
                          heightM="28"
                          fill="white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              <UploadImage
                id={"avatarUser"}
                settings={settings}
                editImage={editAvatar}
                setImage={isProfile ? setUrlAvatarTmp : setAvatar}
                isProfile={isProfile}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AvatarUser;
