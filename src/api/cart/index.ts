import { addProductOnCart } from "./addProductOnCart";
import { getMyCart } from "./getMyCart";
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
}
export default CartAPI;
