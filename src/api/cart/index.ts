import { addProductOnCart } from "./addProductOnCart";
import { createOrder } from "./createOrder";
import { getMyCart } from "./getMyCart";
import { getPM } from "./getPM";
import { removeProduct } from "./removeProduct";

const URL_CARTS = "/api/v1/carts";
class CartAPI {
  static async addProductOnCart(_id: string, quatity: number) {
    return await addProductOnCart(URL_CARTS, _id, quatity);
  }
  static async getMyCart() {
    return await getMyCart(URL_CARTS);
  }
  static async removeProduct(_id: string) {
    return await removeProduct(URL_CARTS, _id);
  }
  static async getPM(value: number) {
    return await getPM(URL_CARTS, value);
  }
  static async createOrder(option: any) {
    return await createOrder(URL_CARTS, option);
  }
}
export default CartAPI;
