import { User } from "@/interfaces/user";
import { addVideo } from "./addVideo";
import { getVideos } from "./getVideos";
import { getVideosHaveProduct } from "./getVideosHaveProduct";

const URL_PRODUCTS = "/api/v1/videos";
class ProductAPI {
  static async addVideo(option: any) {
    return await addVideo(URL_PRODUCTS, option);
  }
  static async getVideos() {
    return await getVideos(URL_PRODUCTS);
  }
  static async getVideosHaveProduct() {
    return await getVideosHaveProduct(URL_PRODUCTS);
  }
}
export default ProductAPI;
