import ButtonComponent from "@/components/ButtonComponent";
import ConvertICon from "@/components/ConvertIcon";
import { IconX } from "@/components/Icon/Generate";
import LayOutInput from "@/components/Input";
import { SignContext } from "@/context/SignContext";
import { useAppDispatch } from "@/hook/reduxHook";
import { signIn } from "@/stores/redux/auth/signIn";
import { signUp } from "@/stores/redux/auth/signUp";
import { useContext, useState } from "react";

function Modal() {
  const { closeModalSign, title, openModalSign } = useContext(SignContext);
  const [error, setError] = useState<boolean[]>([false, false, false, false]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const sign = async (e: any) => {
    e?.preventDefault();
    if (title === "Đăng ký") {
      setIsLoading(true);
      await dispatch(
        await signUp(
          e?.target?.userName?.value,
          e?.target?.email?.value,
          e?.target?.password?.value
        )
      );
      setIsLoading(false);
    } else {
      setIsLoading(true);
      await dispatch(
        await signIn(e?.target?.email?.value, e?.target?.password?.value)
      );
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-[#1B161E] md:min-w-[500px] flex flex-col justify-between rounded-xl relative">
      <div
        onClick={closeModalSign}
        className="absolute top-4 right-4 cursor-pointer"
      >
        <ConvertICon Icon={IconX} width="20" height="20" stroke="white" />
      </div>
      <div className="p-[30px]">
        <div className="flex flex-col">
          <div className="flex items-center justify-center gap-2.5">
            <span></span>
            <div className="relative">
              <div className="flex">
                <h4 className="text-[24px] leading-[24px] font-semibold">
                  {title}
                </h4>
              </div>
            </div>
          </div>
          <form onSubmit={sign}>
            <div className="mt-5">
              {title === "Đăng ký" && (
                <LayOutInput
                  sign={{
                    title: "Tên đăng nhập",
                    isRequire: true,
                    type: "text",
                    placeholder: "Tên đăng nhập",
                    name: "userName",
                  }}
                  className={"bg-[#110B14] outline-none w-full"}
                  backGroundInput="bg-[#110B14]"
                  padding="p-3"
                  textSize="text-sm"
                />
              )}
              <LayOutInput
                sign={{
                  title: "Email",
                  isRequire: true,
                  type: "text",
                  placeholder: "Email",
                  name: "email",
                }}
                className={"bg-[#110B14] outline-none w-full"}
                backGroundInput="bg-[#110B14]"
                padding="p-3"
                textSize="text-sm"
              />
              <LayOutInput
                sign={{
                  title: "Mật khẩu",
                  isRequire: true,
                  type: "password",
                  placeholder: "Mật khẩu",
                  name: "password",
                }}
                className={"bg-[#110B14] outline-none w-full"}
                backGroundInput="bg-[#110B14]"
                padding="px-3 py-2"
                textSize="text-sm"
                login={title === "Đăng ký" ? false : true}
                err={title === "Đăng ký" ? error : undefined}
                setErr={title === "Đăng ký" ? setError : undefined}
              />
              <div className="mt-4">
                <ButtonComponent
                  type="submit"
                  title={title}
                  isLoading={isLoading}
                  className="bg-primary hover:bg-primary/80 w-full flex items-center justify-center rounded-md"
                  padding="py-1.5"
                  classNameText="text-[#110B14] text-sm font-semibold"
                />
              </div>
              <div className="mt-6 mb-2">
                <div
                  onClick={() => {
                    openModalSign(
                      title === "Đăng ký" ? "Đăng nhập" : "Đăng ký"
                    );
                  }}
                  className="w-full flex justify-center py-1.5 text-sm font-semibold cursor-pointer hover:bg-white/20 rounded-md"
                >
                  {title === "Đăng ký"
                    ? "Bạn có tài khoản? Đăng nhập"
                    : "Bạn chưa có tài khoản? Đăng ký"}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Modal;
