import Link from "next/link";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import ConvertICon from "@/components/ConvertIcon";
import {
  IconLogOut,
  IconShop,
  IconStream,
  IconManageContent,
  IconManageAsset,
  IconProfileSetting,
  IconLogin,
} from "@/components/Icon/ManageUser";
import { AnyAction, Dispatch } from "redux";
import { useAppSelector } from "@/hook/reduxHook";
import { logout } from "@/stores/redux/auth/logout";

const USER = [
  {
    title: "Cửa hàng",
    Icon: IconShop,
    url: "/",
  },
  {
    title: "Quản lý Videos",
    Icon: IconManageContent,
    url: "/management/manage-content",
  },
  {
    title: "Quản lý Kho",
    Icon: IconManageAsset,
    url: "/management/product",
  },
  {
    title: "Chỉnh sửa thông tin",
    Icon: IconProfileSetting,
    url: "/management/settings",
  },
];
interface Props {
  setOpenModal: any;
}

function ModalHeader({ setOpenModal }: Props) {
  const { user } = useAppSelector((state) => state?.authRedux);
  const dispatch = useDispatch();
  return (
    <div className="absolute flex flex-col top-9 right-0 min-w-[194px]">
      <div
        className={`bg-[#1B161E] border border-solid border-white/20 rounded-xl`}
        style={{
          boxShadow: "0 1px 2px rgba(0,0,0,.9),0 0px 2px rgba(0,0,0,.9)",
        }}
      >
        <div className="p-4">
          <ul className="m-0 p-0 list-none">
            {user &&
              USER?.map((item, index) => {
                return (
                  <li className={index === 0 ? "" : "mt-4"} key={index}>
                    <Link
                      href={
                        index === 0 ? `${item?.url}${user?.name}` : item?.url
                      }
                      onClick={() => {
                        setOpenModal(false);
                      }}
                      className="block no-underline"
                    >
                      <div
                        className={`flex gap-1.5 items-center ${
                          index === 1 || index === 2 || index === 4
                            ? "icon-hover-dark"
                            : "icon-hover-dark-stroke"
                        } text-white hover:text-[#772ce8]  whitespace-nowrap`}
                        onClick={() => {
                          setOpenModal(false);
                        }}
                      >
                        <ConvertICon
                          Icon={item?.Icon}
                          width="20"
                          height="20"
                          fill="white"
                          stroke="white"
                        />
                        <span className="2xl:text-base text-sm font-medium">
                          {item?.title}
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            {user && (
              <li
                className={`border-t border-solid border-white/10 my-4`}
                style={{
                  borderLeft: "1px",
                  borderRight: "1px",
                  borderBottom: "1px",
                }}
              ></li>
            )}

            <LoginAndLogOut setOpenModal={setOpenModal} dispatch={dispatch} />
          </ul>
        </div>
      </div>
    </div>
  );
}

function LoginAndLogOut({
  setOpenModal,
  dispatch,
}: {
  setOpenModal: any;
  dispatch: any;
}) {
  const logOut = () => {
    setOpenModal(false);
    dispatch(logout());
  };
  return (
    <li className={"mt-4"}>
      <div
        className={`flex gap-1.5 items-center cursor-pointer icon-hover-dark-stroke
      text-white hover:text-[#772ce8]  whitespace-nowrap`}
        onClick={logOut}
      >
        <ConvertICon Icon={IconLogOut} width="20" height="20" stroke="white" />
        <span className="2xl:text-base text-sm font-medium">Đăng xuất</span>
      </div>
    </li>
  );
}
export default ModalHeader;
