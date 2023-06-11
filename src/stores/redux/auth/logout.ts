import { AuthAPI } from "@/api";
import { toast } from "react-hot-toast";
import { SetUser } from ".";

export const logout = async () => {
  const logoutAsync = async (
    dispatch: (arg0: { payload: any; type: string }) => void
  ) => {
    try {
      dispatch(SetUser(null));
      localStorage.removeItem("is334");
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    }
  };
  return logoutAsync;
};
