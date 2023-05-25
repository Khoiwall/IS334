import SpinModalLoading from "@/components/SpinLoadingModal";
import { ZINDEX } from "@/contants/ZINDEX";
import { SignContext } from "@/context/SignContext";
import router, { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
// import { UserAPI } from "src/services/api/v1";
// import signInAction from "src/stores/reducers/action/signIn";
import Header from "./Header";
import ModalSignInSignUp from "./ModalSignInSignUp";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const dispatch = useDispatch();

  const { isOpen } = useContext(SignContext);

  const [checkAccount, setCheckAccount] = useState<boolean>(false);

  const pathName = useRouter().pathname;

  //   const checkAccountAPI = async () => {
  //     const response = await UserAPI.CheckUser();
  //     if (response && response?.data?.status === "Success") {
  //       dispatch(signInAction("login", response?.data?.user));
  //       localStorage.setItem("wevaToken", response?.data?.token);
  //       toast.success("Đăng nhập thành công");
  //       // router.push("/");
  //     } else {
  //       localStorage?.removeItem("wevaToken");
  //       toast.error(response?.response?.data?.message);
  //     }
  //     setCheckAccount(false);
  //   };

  //   useEffect(() => {
  //     if (typeof window === undefined) {
  //       return;
  //     }
  //     if (localStorage?.getItem("wevaToken")) {
  //       if (firstReload.current) {
  //         return;
  //       }
  //       firstReload.current = true;
  //       checkAccountAPI();
  //     } else {
  //       localStorage?.removeItem("wevaToken");
  //       setCheckAccount(false);
  //     }
  //   }, []);
  return (
    <>
      {isOpen && <ModalSignInSignUp />}
      <div
        className={`bg-[#110B14] w-full min-h-screen relative z-[1] ${
          isOpen ? "max-h-[100vh] overflow-hidden" : ""
        }`}
      >
        {isOpen && (
          <div
            data-react-modal-body-trap=""
            tabIndex={0}
            className="absolute opacity-0"
          ></div>
        )}
        <div className="h-full w-full">
          <div className="flex flex-col min-h-screen">
            {pathName === "/verify-email" ? null : <Header />}
            {checkAccount ? (
              <div
                className={`${ZINDEX["zModal"]} fixed top-0 left-0 min-w-screen max-h-screen`}
              >
                <SpinModalLoading />
              </div>
            ) : null}
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
