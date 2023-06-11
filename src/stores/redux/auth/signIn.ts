import { AuthAPI } from "@/api";
import { toast } from "react-hot-toast";
import { SetUser } from ".";

export const signIn = async (email: string, password: string) => {
  const signInAsync = async (
    dispatch: (arg0: { payload: any; type: string }) => void
  ) => {
    try {
      const response = await AuthAPI.signIn(email, password);
      if (response && response?.status === 200) {
        dispatch(SetUser(response?.data?.user));
        localStorage.setItem("is334", response?.data?.token);
        toast.success("Đăng nhập thành công");
      } else {
        toast.error(response?.response?.data?.message);
      }
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    }
  };
  return signInAsync;
};
