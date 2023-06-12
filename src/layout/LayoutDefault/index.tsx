import SpinModalLoading from "@/components/SpinLoadingModal";
import { ZINDEX } from "@/contants/ZINDEX";
import { SignContext } from "@/context/SignContext";
import { useAppDispatch, useAppSelector } from "@/hook/reduxHook";
import { getUser } from "@/stores/redux/auth/getUser";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import Footer from "./Footer";
// import { UserAPI } from "src/services/api/v1";
// import signInAction from "src/stores/reducers/action/signIn";
import Header from "./Header";
import ModalSignInSignUp from "./ModalSignInSignUp";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  const [checkAccount, setCheckAccount] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state?.authRedux);
  const { isOpen, closeModalSign } = useContext(SignContext);

  const pathName = useRouter().pathname;
  const firstReload = useRef(false);

  useEffect(() => {
    if (user) {
      closeModalSign();
    }
  }, [user]);

  const checkAccountAPI = async () => {
    setCheckAccount(true);
    await dispatch(await getUser());
    setCheckAccount(false);
  };

  useEffect(() => {
    if (localStorage?.getItem("is334")) {
      if (firstReload.current) {
        return;
      }
      firstReload.current = true;
      checkAccountAPI();
    } else {
      localStorage?.removeItem("is334");
      setCheckAccount(false);
    }
  }, []);
  return (
    <>
      {isOpen && !user && <ModalSignInSignUp />}
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
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
