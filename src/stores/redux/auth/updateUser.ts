import { AuthAPI } from "@/api";
import { User } from "@/interfaces/user";
import { toast } from "react-hot-toast";
import { SetUser } from ".";

export const updateUser = async (user: User) => {
  const updateUserAsync = async (
    dispatch: (arg0: { payload: any; type: string }) => void
  ) => {
    try {
      const response = await AuthAPI.updateuser(user);
      if (response && (response?.status === 200 || response?.status === 201)) {
        dispatch(SetUser(response?.data?.user));
        localStorage.setItem("is334", response?.data?.token);
        toast.success("Chỉnh sữa thông tin thành công");
      } else {
        toast.error(response?.response?.data?.message);
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    }
  };
  return updateUserAsync;
};
