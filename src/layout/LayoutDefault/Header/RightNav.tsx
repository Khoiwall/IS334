import Button from "@/components/Button";
import ConvertICon from "@/components/ConvertIcon";
import Search from "@/components/Search";
import { FLEX } from "@/contants/FLEX";
import { SignContext } from "@/context/SignContext";
import { IconSearch } from "@/icons/Differents";
import { IconUser } from "@/icons/Users";
import { useContext, useEffect, useState } from "react";

function RightNav() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { openModalSign } = useContext(SignContext);

  return (
    <div className={`${FLEX["center_end"]} text-white sm:gap-4`}>
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
      <div className="relative">
        <div
          className={`${FLEX["center"]} cursor-pointer w-[30px] h-[30px] ${
            "hover:bg-[#53535f7a] rounded" // userRedux ? "" : "hover:bg-[#53535f7a] rounded"
          }`}
          onClick={() => {
            openModalSign("Đăng nhập");
            // setOpenModal(!openModal);
          }}
        >
          <ConvertICon Icon={IconUser} width="20" height="20" fill="white" />
          {/* {userRedux ? (
              <ImageAndGif
                src={userRedux?.avatar}
                alt={userRedux?.userName}
                className1={"relative pt-[30px] pl-[30px]"}
                rounded="rounded-full"
              />
            ) : (
              <ConvertICon
                Icon={IconUser}
                width="20"
                height="20"
                fill="white"
              />
            )} */}
        </div>
        {/* {openModal ? <ModalHeader setOpenModal={setOpenModal} /> : null} */}
      </div>
    </div>
  );
}
export default RightNav;
