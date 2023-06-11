import { AuthAPI } from "@/api";
import { toast } from "react-hot-toast";
import { SetUser } from ".";

export const signUp = async (
  userName: string,
  email: string,
  password: string
) => {
  const signUpAsync = async (
    dispatch: (arg0: { payload: any; type: string }) => void
  ) => {
    try {
      const response = await AuthAPI.signUp(userName, email, password);
      if (response && (response?.status === 200 || response?.status === 201)) {
        dispatch(SetUser(response?.data?.user));
        localStorage.setItem("is334", response?.data?.token);
        toast.success("Đăng ký thành công");
      } else {
        toast.error(response?.response?.data?.message);
      }
    } catch (err: any) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    }
  };
  return signUpAsync;
};
