import { ZINDEX } from "@/contants/ZINDEX";
import LogoHeader from "./Logo";
import NavHeader from "./Nav";
import RightNav from "./RightNav";

function Header() {
  return (
    <header
      className={`lg:h-[54px] h-[92px] fixed top-0 w-full ${ZINDEX["zBalloon"]} bg-[#1B161E] shrink-0`}
    >
      <div className="h-[54px] fixed top-0 w-full">
        <div className="flex items-center px-[30px] h-full">
          <LogoHeader />
          <NavHeader pc={true} />
          <RightNav />
        </div>
        <NavHeader pc={false} />
      </div>
    </header>
  );
}
export default Header;
