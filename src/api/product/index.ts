import { User } from "@/interfaces/user";
import { createProduct } from "./createProduct";
import { deleteProduct } from "./deleteProduct";
import { getProducts } from "./getProducts";
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
}
export default ProductAPI;
