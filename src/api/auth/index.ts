import { User } from "@/interfaces/user";
import { getUser } from "./getUser";
import { signIn } from "./signIn";
import { signUp } from "./signUp";
import { updateUser } from "./updateUser";

const URL_AUTH = "/api/v1/users";
class AuthAPI {
  static async signIn(email: string, password: string) {
    const response = await signIn(URL_AUTH, email, password);
    return response;
  }
  static async signUp(userNmae: string, email: string, password: string) {
    const response = await signUp(URL_AUTH, userNmae, email, password);
    return response;
  }
  static async getUser() {
    const response = await getUser(URL_AUTH);
    return response;
  }
  static async updateuser(user: User) {
    const response = await updateUser(URL_AUTH, user);
    return response;
  }
}
export default AuthAPI;
