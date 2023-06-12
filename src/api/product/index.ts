import { User } from "@/interfaces/user";
import { createProduct } from "./createProduct";
import { getProducts } from "./getProducts";
import { updateDiscount } from "./updateListPrice";

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
}
export default ProductAPI;
