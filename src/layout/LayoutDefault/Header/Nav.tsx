import { FLEX } from "@/contants/FLEX";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

const NAV = [
  {
    title: "Trang chủ",
    url: "/",
  },
  {
    title: "Sản phẩm",
    url: "/products",
  },
];

function NavHeader() {
  const pathname = useRouter().asPath.split("/")[1];
  return (
    <div className={`block text-white`}>
      <div className={FLEX["center_between"]}>
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
                className={`py-4 text-lg font-semibold`}
              >
                {nav?.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default NavHeader;
