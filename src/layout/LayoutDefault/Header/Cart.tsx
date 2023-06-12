import { Skeleton } from "@mui/material";
import { useContext, useState } from "react";
import ButtonComponent from "@/components/ButtonComponent";
import { IConShopping } from "@/components/Icon/Different";
import { CartContext } from "@/context/CartContext";
import MyCart from "./MyCart";

function Cart() {
  const { isLoadingCart, cart } = useContext(CartContext);
  const [openCart, setOpenCart] = useState<boolean>(false);
  return (
    <>
      {isLoadingCart ? (
        <>
          {openCart && <MyCart setOpenCart={setOpenCart} />}
          <div className="relative sm:block hidden">
            <ButtonComponent
              title=""
              icon={true}
              Icon={IConShopping}
              onClick={() => {
                setOpenCart(true);
              }}
              infoIcon={{
                width: "24",
                height: "24",
                stroke: "white",
              }}
              className="rounded-full cursor-pointer w-[40px] h-[40px] bg-transparent"
              padding="p-0"
              gapIconAndText="gap-0"
            />
            <div
              className="bg-primary flex justify-center items-center absolute font-semibold text-black"
              style={{
                borderRadius: "50%",
                width: 14,
                height: 14,
                right: "5px",
                top: "5px",
                fontSize: "10px",
              }}
            >
              {cart?.length}
            </div>
          </div>
        </>
      ) : (
        <div className="mr-4 skeleton-video relative">
          <Skeleton
            width="30px"
            height="30px"
            sx={{ borderRadius: "9999px" }}
          />
        </div>
      )}
    </>
  );
}
export default Cart;
