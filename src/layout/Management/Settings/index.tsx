import Button from "@/components/Button";
import Input from "@/components/Input";
import NoLogin from "@/components/NoLogin";
import { FLEX } from "@/contants/FLEX";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { UPDATEUSER } from "@/contants/SETTINGS";

import { UploadAPI } from "@/api/index";
// import signInAction from "src/stores/reducers/action/signIn";
import { checkStatus } from "@/utils/checkStatus";
import { converImgCollection } from "@/utils/coverImage";
import BackGroundAndAvatarProfileUser from "./BackGroundAndAvatar";
import { useAppDispatch, useAppSelector } from "@/hook/reduxHook";
import { updateUser } from "@/stores/redux/auth/updateUser";

function Settings() {
  const [fileCoverImage, setCoverImage] = useState<File>();
  const [avatar, setAvatar] = useState<File>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { user } = useAppSelector((state) => state?.authRedux);
  const dispatch = useAppDispatch();
  const saveProfile = async (e: any) => {
    e.preventDefault();
    let urlAvatar = null;
    let urlCoverImage = null;
    setIsLoading(true);
    if (avatar) {
      const response = await UploadAPI.uploadImg(avatar as File);
      checkStatus(response)
        ? (urlAvatar = converImgCollection(
            (response as any)?.data?.file,
            avatar?.type as string
          ))
        : toast.error("Upload file collection avatar err");
    }
    if (fileCoverImage) {
      const response = await UploadAPI.uploadImg(fileCoverImage as File);
      checkStatus(response)
        ? (urlCoverImage = converImgCollection(
            (response as any)?.data?.file,
            fileCoverImage?.type as string
          ))
        : toast.error("Upload file collection coverImage err");
    }
    const option = {
      name: e?.target?.name?.value || user?.name,
      bio: e?.target?.bio?.value || "",
      avatar: urlAvatar || user?.avatar || "",
      coverImage: urlCoverImage || user?.coverImage || "",
    };
    await dispatch(await updateUser(option as any));
    setIsLoading(false);
  };
  return (
    <div
      className={`bg-[#1B161E] text-white overflow-auto sm:px-8 px-4 pb-8 lg:pt-[84px] pt-[122px] max-w-[1440px] w-full mx-auto`}
    >
      {user ? (
        <>
          {" "}
          <div className="sm:pt-8 pt-4">
            <BackGroundAndAvatarProfileUser
              setCoverImage={setCoverImage}
              fileCoverImage={fileCoverImage}
              setAvatar={setAvatar}
              avatar={avatar}
              settings={true}
              urlCoverImage={user?.coverImage}
              urlAvatar={user?.avatar}
            />
          </div>
          <form
            onSubmit={isLoading ? () => {} : saveProfile}
            className="sm:mt-[30px]"
          >
            <div className="grid md:grid-cols-2 sm:gap-6 gap4 sm:mb-6 mb-4">
              {UPDATEUSER?.map((update, index) => {
                return index === 2 ? null : (
                  <Input
                    backGroundInput="bg-[#110B14]"
                    disable={update?.disable}
                    key={update?.title}
                    textSize={"sm:text-base text-sm"}
                    sign={update}
                    defaultValue={
                      user
                        ? user[update?.name as "bio" | "email" | "name"] || ""
                        : ""
                    }
                    className={`border-0 text-base outline-0 drop-shadow-none w-full bg-[#110B14]`}
                  />
                );
              })}
            </div>
            <Input
              backGroundInput="bg-[#110B14]"
              disable={UPDATEUSER[2]?.disable}
              key={UPDATEUSER[2]?.title}
              textSize={"sm:text-base text-sm"}
              sign={UPDATEUSER[2]}
              defaultValue={
                user
                  ? user[UPDATEUSER[2]?.name as "bio" | "email" | "name"] || ""
                  : ""
              }
              className={`border-0 text-base outline-0 drop-shadow-none w-full bg-[#110B14]`}
            />
            <div className={`${FLEX["center_end"]} sm:mt-6 mt-4`}>
              <Button
                isLoading={isLoading}
                type="submit"
                title="Chỉnh sửa"
                className={`bg-[#9147ff] px-3 h-[40px] hover:bg-[#772ce8] rounded-md text-white`}
              />
            </div>
          </form>
        </>
      ) : (
        <NoLogin
          text={
            "Bạn chưa đăng nhập vui lòng đăng nhập trước khi chỉnh sửa thông tin"
          }
        />
      )}
    </div>
  );
}
export default Settings;
