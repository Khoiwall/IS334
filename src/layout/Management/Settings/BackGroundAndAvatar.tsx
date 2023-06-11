import AvatarUser from "@/components/BackGroundAndAvatarUser/AvatarUser";
import BackGroundUser from "@/components/BackGroundAndAvatarUser/BackGroundUser";

interface Props {
  setCoverImage?: any;
  fileCoverImage?: File | undefined;
  setAvatar?: any;
  avatar?: File | undefined;
  settings?: boolean;
  urlCoverImage: string | undefined;
  urlAvatar: string;
}

function BackGroundAndAvatarProfileUser({
  setCoverImage,
  fileCoverImage,
  settings,
  setAvatar,
  avatar,
  urlCoverImage,
  urlAvatar,
}: Props) {
  return (
    <>
      <div className="w-full sm:max-h-[315px] sm:h-[315px] max-h-[160px] h-[160px] relative">
        <BackGroundUser
          setCoverImage={setCoverImage}
          fileCoverImage={fileCoverImage}
          settings={settings}
          urlCoverImage={urlCoverImage}
        />
      </div>
      <AvatarUser
        setAvatar={setAvatar}
        avatar={avatar}
        settings={settings}
        urlAvatar={urlAvatar}
      />
    </>
  );
}

export default BackGroundAndAvatarProfileUser;
