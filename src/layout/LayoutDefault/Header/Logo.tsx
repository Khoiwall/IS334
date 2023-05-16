import ConvertICon from "@/components/ConvertIcon";
import { Logo } from "@/icons/Differents";
import Link from "next/link";
import { useContext } from "react";

function LogoHeader() {
  return (
    <Link href="/" className=" h-full flex items-center">
      <ConvertICon
        Icon={Logo}
        // width="180"
        height="40"
        // widthM="180"
        heightM="40"
        fill="#9147ff"
      />
    </Link>
  );
}
export default LogoHeader;
