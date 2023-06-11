import { User } from "@/interfaces/user";
import requestAPI from "../requestAPI";

async function updateUser(URL: string, user: User) {
  try {
    const response = await requestAPI({
      url: `${URL}`,
      method: "PUT",
      data: {
        ...user,
      },
    });
    return response;
  } catch (err: any) {
    return err;
  }
}
export { updateUser };
