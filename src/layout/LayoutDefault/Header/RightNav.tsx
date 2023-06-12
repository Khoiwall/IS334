import Button from "@/components/Button";
import ConvertICon from "@/components/ConvertIcon";
import ImageAndGifNew from "@/components/ImageAndGifNew";
import { FLEX } from "@/contants/FLEX";
import { SignContext } from "@/context/SignContext";
import { useAppSelector } from "@/hook/reduxHook";
import { IconUser } from "@/icons/Users";
import { useContext, useState } from "react";
import Cart from "./Cart";
import ModalHeader from "./Modal";

function RightNav() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { openModalSign } = useContext(SignContext);

  const { user } = useAppSelector((state) => state?.authRedux);

  return (
    <div className={`${FLEX["center_end"]} text-white sm:gap-4`}>
      {!user ? (
        <div className={`${FLEX["center_"]} gap-2 sm:flex hidden`}>
          <Button
            title="Đăng nhập"
            onClick={() => {
              openModalSign("Đăng nhập");
            }}
            className={`bg-[#53535f61]  hover:bg-[#53535f61]/80 rounded text-white`}
          />
          <Button
            title="Đăng ký"
            onClick={() => {
              openModalSign("Đăng ký");
            }}
            className={`bg-primary hover:bg-primary/80 rounded text-t-primary`}
          />
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <Cart />
          <div
            className={`${
              FLEX["center"]
            } cursor-pointer w-[30px] h-[30px] relative ${
              user ? "" : "hover:bg-[#53535f7a] rounded"
            }`}
            onClick={() => {
              setOpenModal(!openModal);
            }}
          >
            {user ? (
              <ImageAndGifNew
                src={user?.avatar}
                alt={user?.name}
                className={"relative pt-[30px] pl-[30px]"}
                rounded="rounded-full"
              />
            ) : (
              <ConvertICon
                Icon={IconUser}
                width="20"
                height="20"
                fill="white"
              />
            )}
            {openModal ? <ModalHeader setOpenModal={setOpenModal} /> : null}
          </div>
        </div>
      )}
    </div>
  );
}
export default RightNav;
