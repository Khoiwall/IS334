import Search from "@/components/Search";
import { ZINDEX } from "@/contants/ZINDEX";
import { IconSearch } from "@/icons/Differents";
import LogoHeader from "./Logo";
import RightNav from "./RightNav";

function Header() {
  return (
    <header
      className={`h-[54px] fixed top-0 w-full ${ZINDEX["zBalloon"]} bg-[#1B161E] shrink-0`}
    >
      <div className="h-[54px] fixed top-0 w-full">
        <div className="flex items-center justify-between px-[30px] h-full">
          <LogoHeader />
          <Search
            placeholder="search"
            isIcon={true}
            Icon={IconSearch}
            className={`border-0 rounded-xl outline-0 drop-shadow-none md:w-[400px] bg-[#110B14] text-white`}
            infoIcon={{
              width: "19",
              widthM: "19",
              height: "19",
              heightM: "19",
              fill: "#fff",
            }}
          />
          <RightNav />
        </div>
      </div>
    </header>
  );
}
export default Header;
