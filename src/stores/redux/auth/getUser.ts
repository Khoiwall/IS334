import { AuthAPI } from "@/api";
import { toast } from "react-hot-toast";
import { SetUser } from ".";

export const getUser = async () => {
  const getUserAsync = async (
    dispatch: (arg0: { payload: any; type: string }) => void
  ) => {
    try {
      const response = await AuthAPI.getUser();
      if (response && (response?.status === 200 || response?.status === 201)) {
        dispatch(SetUser(response?.data?.user));
        localStorage.setItem("is334", response?.data?.token);
      } else {
        localStorage.removeItem("is334");
        toast.error(response?.response?.data?.message);
      }
    } catch (err: any) {
      localStorage.removeItem("is334");
      toast.error(err?.response?.data?.message);
    }
  };
  return getUserAsync;
};
