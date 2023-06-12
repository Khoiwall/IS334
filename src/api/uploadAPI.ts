import requestAPI from "./requestAPI";
import axios from "axios";

const URL_UPLOAD = "/api/v1/upload";
const URL_UPLOAD_CARE = "https://upload.uploadcare.com/base/";
class UploadAPI {
  static async getSignUrl(
    fileName: string,
    path: string,
    fileExtension: string
  ) {
    try {
      const response = await requestAPI({
        url: `${URL_UPLOAD}`,
        method: "POST",
        data: {
          fileName,
          path,
          fileExtension,
        },
      });
      return response;
    } catch (error) {}
  }
  static async uploadFile(game: any) {
    try {
      const response = await requestAPI({
        url: `${URL_UPLOAD}`,
        method: "POST",
        data: { game },
      });
      return response;
    } catch (error) {}
  }
  static async uploadImg(file: File) {
    try {
      const response = await axios({
        method: "post",
        url: URL_UPLOAD_CARE,
        data: {
          UPLOADCARE_PUB_KEY: "dcb7c1db654220efbad2",
          UPLOADCARE_STORE: "1",
          file: file,
        },
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response;
    } catch (err: any) {
      return err;
    }
  }
}

export default UploadAPI;
