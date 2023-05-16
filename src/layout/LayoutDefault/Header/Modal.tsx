// import Link from "next/link";
// import { useContext } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import ConvertICon from "src/components/ConvertICon";
// import {
//   IconLogOut,
//   IconShop,
//   IconStream,
//   IconManageContent,
//   IconManageAsset,
//   IconProfileSetting,
//   IconLogin,
// } from "src/components/Icon/ManageUser";
// import IconMoon from "src/components/Icon/Moon";
// import { FLEX } from "src/constants/flex";
// import { SHADOW } from "src/constants/shadow";
// import { ToggleClose, ToggleOpen } from "src/components/Icon/Toggle";
// import {
//   BORDER_OPACITY,
//   HEADER_COLOR,
//   TEXT_COLOR_THEME_ACTIVE_AND_HOVER,
//   TEXT_COLOR_THEME_DEFAULT,
// } from "src/constants/theme";
// import { ThemeContextValue } from "src/contexts/ThemeContext";
// import { RootState } from "src/stores/reducers";
// import signInAction from "src/stores/reducers/action/signIn";
// import streamAction from "src/stores/reducers/action/stream";
// import { AnyAction, Dispatch } from "redux";

// const USER = [
//   {
//     title: "Cửa hàng",
//     Icon: IconShop,
//     url: "/",
//   },
//   {
//     title: "Phát trực tiếp",
//     Icon: IconStream,
//     url: "/management/stream-manager",
//   },
//   {
//     title: "Quản lý Videos",
//     Icon: IconManageContent,
//     url: "/management/manage-content",
//   },
//   {
//     title: "Quản lý Kho",
//     Icon: IconManageAsset,
//     url: "/management/product",
//   },
//   {
//     title: "Chỉnh sửa thông tin",
//     Icon: IconProfileSetting,
//     url: "/management/settings",
//   },
// ];
// interface Props {
//   setOpenModal: any;
// }

// function ModalHeader({ setOpenModal }: Props) {
//   const { theme, changeTheme } = useContext(ThemeContextValue);
//   const userRedux = useSelector((state: RootState) => state?.userRedux);
//   const dispatch = useDispatch();
//   return (
//     <div className="absolute flex flex-col top-9 right-0 min-w-[194px]">
//       <div
//         className={`${HEADER_COLOR[theme]} border border-solid ${
//           theme === "light" ? "border-black/20" : "border-white/20"
//         } rounded-xl`}
//         style={{
//           boxShadow: SHADOW[theme === "light" ? "header" : "headerDark"],
//         }}
//       >
//         <div className="p-4">
//           <ul className="m-0 p-0 list-none">
//             {userRedux &&
//               USER?.map((item, index) => {
//                 return (
//                   <li className={index === 0 ? "" : "mt-4"} key={index}>
//                     <Link
//                       href={
//                         index === 0
//                           ? `${item?.url}${userRedux?.userName}`
//                           : item?.url
//                       }
//                       onClick={() => {
//                         setOpenModal(false);
//                       }}
//                       className="block no-underline"
//                     >
//                       <div
//                         className={`flex gap-1.5 items-center ${
//                           theme === "light"
//                             ? index === 1 || index === 2 || index === 3
//                               ? "icon-hover"
//                               : "icon-hover-stroke"
//                             : index === 1 || index === 2 || index === 3
//                             ? "icon-hover-dark"
//                             : "icon-hover-dark-stroke"
//                         } ${TEXT_COLOR_THEME_DEFAULT[theme]} ${
//                           TEXT_COLOR_THEME_ACTIVE_AND_HOVER[theme]?.hover
//                         }  whitespace-nowrap`}
//                         onClick={() => {
//                           setOpenModal(false);
//                         }}
//                       >
//                         <ConvertICon
//                           Icon={item?.Icon}
//                           width="20"
//                           height="20"
//                           fill={theme === "light" ? "black" : "white"}
//                           stroke={theme === "light" ? "black" : "white"}
//                         />
//                         <span className="2xl:text-base text-sm font-medium">
//                           {item?.title}
//                         </span>
//                       </div>
//                     </Link>
//                   </li>
//                 );
//               })}
//             {userRedux && (
//               <li
//                 className={`border-t border-solid ${BORDER_OPACITY[theme]} my-4`}
//                 style={{
//                   borderLeft: "1px",
//                   borderRight: "1px",
//                   borderBottom: "1px",
//                 }}
//               ></li>
//             )}
//             <li className={userRedux ? "" : "mt-4"}>
//               <div
//                 className={`${FLEX["center_between"]} cursor-pointer`}
//                 onClick={() => {
//                   changeTheme(theme === "light" ? "dark" : "light");
//                 }}
//               >
//                 <div
//                   className={`flex gap-1.5 items-center ${
//                     theme === "light" ? "icon-hover" : "icon-hover-dark"
//                   } ${TEXT_COLOR_THEME_DEFAULT[theme]} ${
//                     TEXT_COLOR_THEME_ACTIVE_AND_HOVER[theme]?.hover
//                   } whitespace-nowrap`}
//                 >
//                   <ConvertICon
//                     Icon={IconMoon}
//                     width="20"
//                     height="20"
//                     fill={theme === "light" ? "black" : "white"}
//                   />
//                   <span className="2xl:text-base text-sm font-medium">
//                     Chủ đề tối
//                   </span>
//                 </div>
//                 <ConvertICon
//                   Icon={theme === "light" ? ToggleClose : ToggleOpen}
//                   width="24"
//                   height="24"
//                   stroke={theme === "light" ? "black" : "#772ce8"}
//                 />
//               </div>
//             </li>
//             <LoginAndLogOut setOpenModal={setOpenModal} dispatch={dispatch} />
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// function LoginAndLogOut({
//   setOpenModal,
//   dispatch,
// }: {
//   setOpenModal: any;
//   dispatch: Dispatch<AnyAction>;
// }) {
//   const userRedux = useSelector((state: RootState) => state?.userRedux);
//   const { theme, changeTheme } = useContext(ThemeContextValue);
//   const logOut = () => {
//     setOpenModal(false);
//     localStorage.removeItem("wevaToken");
//     dispatch(streamAction("remove", null));
//     dispatch(signInAction("logout", null));
//   };
//   return (
//     <>
//       {userRedux ? (
//         <li className={"mt-4"}>
//           <div
//             className={`flex gap-1.5 items-center cursor-pointer ${
//               theme === "light" ? "icon-hover-stroke" : "icon-hover-dark-stroke"
//             } ${TEXT_COLOR_THEME_DEFAULT[theme]} ${
//               TEXT_COLOR_THEME_ACTIVE_AND_HOVER[theme]?.hover
//             }  whitespace-nowrap`}
//             onClick={logOut}
//           >
//             <ConvertICon
//               Icon={IconLogOut}
//               width="20"
//               height="20"
//               stroke={theme === "light" ? "black" : "white"}
//             />
//             <span className="2xl:text-base text-sm font-medium">Đăng xuất</span>
//           </div>
//         </li>
//       ) : (
//         <li className={"mt-4"}>
//           <Link href="/sign-in" className="no-underline block">
//             <div
//               className={`flex gap-1.5 items-center cursor-pointer ${
//                 theme === "light"
//                   ? "icon-hover-stroke"
//                   : "icon-hover-dark-stroke"
//               } ${TEXT_COLOR_THEME_DEFAULT[theme]} ${
//                 TEXT_COLOR_THEME_ACTIVE_AND_HOVER[theme]?.hover
//               }  whitespace-nowrap`}
//             >
//               <ConvertICon
//                 Icon={IconLogin}
//                 width="20"
//                 height="20"
//                 stroke={theme === "light" ? "black" : "white"}
//               />
//               <span className="2xl:text-base text-sm font-medium">
//                 Đăng nhập
//               </span>
//             </div>
//           </Link>
//         </li>
//       )}
//     </>
//   );
// }
// export default ModalHeader;
function ModalHeader() {
  return <div>123</div>;
}
export default ModalHeader;
