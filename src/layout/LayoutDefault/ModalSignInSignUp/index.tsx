import { ZINDEX } from "@/contants/ZINDEX";
import { SignContext } from "@/context/SignContext";
import Modal from "./Modal";

function ModalSignInSignUp() {
  return (
    <div
      aria-modal="true"
      role="dialog"
      className={`${ZINDEX["zModal"]} fixed w-full h-full top-0 left-0 text-white`}
    >
      <div className="bg-black/80 w-full h-full flex flex-col overflow-auto">
        <div className="max-h-full overflow-auto flex-1 flex flex-col items-center justify-center p-2.5 ">
          <Modal />
        </div>
      </div>
    </div>
  );
}
export default ModalSignInSignUp;
