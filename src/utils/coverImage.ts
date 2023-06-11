function converImg(uuid: string) {
  return `https://ucarecdn.com/${uuid}/-/preview/-/format/webp/-/quality/smart/-/progressive/yes/`;
}
function converImgCollection(uuid: string, type: string) {
  if (type === "image/gif") {
    return `https://ucarecdn.com/${uuid}/gif2video/-/format/webm/-/quality/best/`;
  }
  return `https://ucarecdn.com/${uuid}/-/preview/-/format/webp/-/quality/smart/-/progressive/yes/`;
}

function converImgUploadCare(info: any) {
  if (info?.mimeType === "image/gif") {
    return `https://ucarecdn.com/${info?.uuid}/gif2video/-/format/webm/-/quality/best/`;
  }
  return `https://ucarecdn.com/${info?.uuid}/-/preview/-/format/webp/-/quality/smart/-/progressive/yes/`;
}

function coverImgScreenShot(info: any, index: number) {
  return `https://ucarecdn.com/${info?.uuid}/nth/${index}/-/preview/-/format/webp/-/quality/smart/-/progressive/yes/`;
}
export {
  converImg,
  converImgCollection,
  converImgUploadCare,
  coverImgScreenShot,
};
