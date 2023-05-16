import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

// const NAV = [
//   {
//     title: "Trang chủ",
//     url: "/",
//   },
//   {
//     title: "Sự kiện",
//     url: "/event",
//   },
//   {
//     title: "Loại",
//     url: "/category",
//   },
// ];

interface Props {
  pc: boolean;
}

function NavHeader({ pc }: Props) {
  const pathname = useRouter().asPath.split("/")[1];
  return (
    <div
      className={`${
        !pc ? "block lg:hidden px-[30px]" : "lg:block hidden pl-[30px] mr-10"
      }`}
    >
      {/* <div className={!pc ? FLEX["center_between"] : FLEX["center_"]}>
        {NAV?.map((nav) => {
          return (
            <Link
              href={nav?.url}
              key={nav.title}
              className={`sm:px-4 px-1.5 no-underline`}
            >
              <span
                style={{
                  borderLeft: "1px",
                  borderRight: "1px",
                  borderTop: "1px",
                }}
                className={`${
                  pathname === nav?.url?.split("/")[1]
                    ? `border-b border-solid ${BORDER_COLOR[theme]} ${TEXT_COLOR_THEME_ACTIVE_AND_HOVER[theme]?.active}`
                    : `${TEXT_COLOR_THEME_DEFAULT[theme]}`
                } ${
                  TEXT_COLOR_THEME_ACTIVE_AND_HOVER[theme]?.hover
                } lg:py-4 py-[18px] lg:text-lg text-sm font-semibold`}
              >
                {nav?.title}
              </span>
            </Link>
          );
        })}
      </div> */}
    </div>
  );
}
export default NavHeader;
