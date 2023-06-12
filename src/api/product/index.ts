import { User } from "@/interfaces/user";
import { comment } from "./comment";
import { createProduct } from "./createProduct";
import { deleteProducts } from "./deleteProducs";
import { deleteProduct } from "./deleteProduct";
import { getComments } from "./getComments";
import { getProduct } from "./getProduct";
import { getProducts } from "./getProducts";
import { heart } from "./heart";
import { updateDiscount } from "./updateListPrice";
import { updateProduct } from "./updateProduct";

const URL_PRODUCTS = "/api/v1/products";
class ProductAPI {
  static async createProduct(option: {
    name: string;
    bio: string;
    images: string[];
    price: number;
    discount: number;
  }) {
    return await createProduct(URL_PRODUCTS, option);
  }
  static async getProducts() {
    return await getProducts(URL_PRODUCTS);
  }
  static async updateDiscount(_id: string, discount: number) {
    return await updateDiscount(URL_PRODUCTS, _id, discount);
  }
  static async deleteProduct(_id: string) {
    return await deleteProduct(URL_PRODUCTS, _id);
  }
  static async updateProduct(
    _id: string,
    option: {
      name: string;
      bio: string;
      images: string[];
      price: number;
      discount: number;
    }
  ) {
    return await updateProduct(URL_PRODUCTS, _id, option);
  }
  static async deleteProducs(_id: string[]) {
    return await deleteProducts(URL_PRODUCTS, _id);
  }
  static async getProduct(_id: string) {
    return await getProduct(URL_PRODUCTS, _id);
  }

  static async comment(_id: string, content: string) {
    return await comment(URL_PRODUCTS, _id, content);
  }
  static async getComments(_id: string, length: number = 0) {
    return await getComments(URL_PRODUCTS, _id, length);
  }
  static async heart(_id: string, isLike: boolean) {
    return await heart(URL_PRODUCTS, _id, isLike);
  }
}
export default ProductAPI;
