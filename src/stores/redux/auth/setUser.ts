import { AuthAPI } from "@/api";
import { User } from "@/interfaces/user";
import { toast } from "react-hot-toast";
import { SetUser } from ".";

export const setUser = async (user: User) => {
  const setUserAsync = async (
    dispatch: (arg0: { payload: any; type: string }) => void
  ) => {
    try {
      dispatch(SetUser(user));
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    }
  };
  return setUserAsync;
};
