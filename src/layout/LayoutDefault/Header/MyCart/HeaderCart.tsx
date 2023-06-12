import ButtonComponent from "@/components/ButtonComponent";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import { IconChervonLeft } from "@/components/Icon/Arrow";
import ConverICon from "@/components/ConvertIcon";
import { IConShopping } from "@/components/Icon/Different";

interface Props {
  setOpenCart: any;
}

function HeaderCart({ setOpenCart }: Props) {
  const { cart } = useContext(CartContext);
  return (
    <div className="bg-[#1B161E]">
      <div className="py-7 px-5 border-b border-solid border-[#3B363D]">
        <div className="flex items-center gap-3">
          <ButtonComponent
            title=""
            onClick={() => {
              setOpenCart(false);
            }}
            icon={true}
            Icon={IconChervonLeft}
            infoIcon={{
              width: "24",
              height: "24",
              stroke: "white",
            }}
            className="bg-transparent cursor-pointer"
            padding="p-0"
            gapIconAndText="gap-0"
          />
          <div className="relative sm:block hidden">
            <ConverICon
              Icon={IConShopping}
              width="28"
              height="28"
              stroke="white"
            />
            <div
              className="bg-primary flex justify-center items-center absolute font-semibold text-black"
              style={{
                borderRadius: "50%",
                width: 14,
                height: 14,
                right: "-5px",
                top: "-2px",
                fontSize: "10px",
              }}
            >
              {cart?.length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeaderCart;
