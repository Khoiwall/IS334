import Button from "@/components/Button";
import ConvertICon from "@/components/ConvertIcon";
import Search from "@/components/Search";
import { FLEX } from "@/contants/FLEX";
import { IconSearch } from "@/icons/Differents";
import { IconUser } from "@/icons/Users";
import { useContext, useEffect, useState } from "react";
// import IconSearch from "src/components/Icon/Search";
// import Search from "src/components/Search";
// import Button from "src/components/Button";
// import ConvertICon from "src/components/ConvertICon";
// import IconUser from "src/components/Icon/User";
// import ModalHeader from "./Modal";
// import ImageAndGif from "src/components/ImageAndGif";

function RightNav() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <div className="flex-1">
      <div className={`${FLEX["center_end"]} text-white sm:gap-4`}>
        <Search
          placeholder="search"
          isIcon={true}
          Icon={IconSearch}
          className={`border-0 rounded-xl outline-0 drop-shadow-none md:w-[200px] bg-[#110B14] text-white`}
          infoIcon={{
            width: "19",
            widthM: "19",
            height: "19",
            heightM: "19",
            fill: "#fff",
          }}
        />
        <div className={`${FLEX["center_"]} gap-2 sm:flex hidden`}>
          <Button
            title="Đăng nhập"
            className={`bg-[#53535f61]  hover:bg-[#53535f61]/80 rounded text-white`}
          />
          <Button
            title="Đăng ký"
            className={`bg-primary hover:bg-primary/80 rounded text-t-primary`}
          />
        </div>
        <div className="relative">
          <div
            className={`${FLEX["center"]} cursor-pointer w-[30px] h-[30px] ${
              "hover:bg-[#53535f7a] rounded" // userRedux ? "" : "hover:bg-[#53535f7a] rounded"
            }`}
            onClick={() => {
              setOpenModal(!openModal);
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
    </div>
  );
}
export default RightNav;
