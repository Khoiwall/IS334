import { FLEX } from "@/contants/FLEX";
import Button from "./Button";

interface Props {
  text: string;
}

function NoLogin({ text }: Props) {
  return (
    <div className={`w-full min-h-screen ${FLEX["center"]}`}>
      <div className="flex flex-col text-center">
        <h2 className={`text-white sm:mb-[30px] mb-5`}>{text}</h2>
        {/* <Button
          isLink={true}
          url="/sign-in"
          title="Đăng Nhập"
          className={`bg-[#9147ff] hover:bg-[#772ce8] text-white px-6 h-[40px] rounded-xl`}
        /> */}
      </div>
    </div>
  );
}
export default NoLogin;
