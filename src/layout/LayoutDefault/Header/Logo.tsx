import ConvertICon from "@/components/ConvertIcon";
import ImageAndGifNew from "@/components/ImageAndGifNew";
import Link from "next/link";
import { useContext } from "react";

function LogoHeader() {
  return (
    <Link href="/" className=" h-full flex items-center">
      <ImageAndGifNew
        className="pt-[40px] pl-[40px] relative"
        alt="logo"
        src={
          "https://ucarecdn.com/b6f3c929-f963-4ad0-b024-e831a4990021/-/preview/200x200/-/quality/smart/-/format/auto/"
        }
      />
    </Link>
  );
}
export default LogoHeader;
