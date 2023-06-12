import UploadAPI from "@/api/uploadAPI";
import { converImgCollection } from "./convertImg";
import { makeid } from "./randomString";

async function uploadImage(
  thumbnail: any,
  thumbnails: string[],
  toast: any,
  setIsLoading: any
) {
  let blob = await fetch(thumbnail).then((r) => r.blob());
  const response = await UploadAPI.uploadImg(new File([blob], makeid(20)));
  if (response && response.status === 200) {
    let thumbnailUrl = converImgCollection(
      (response as any)?.data?.file,
      new File([blob], makeid(20))?.type
    );
    thumbnails.push(thumbnailUrl);
  } else {
    toast.error("Thêm file collection image error");
    if (setIsLoading) setIsLoading(false);
    return;
  }
}
export { uploadImage };
