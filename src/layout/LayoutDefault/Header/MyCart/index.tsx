import router from "next/router";
import { useContext } from "react";
import ButtonComponent from "@/components/ButtonComponent";
import { CartContext } from "@/context/CartContext";
import { FooterCart } from "./FooterCart";
import HeaderCart from "./HeaderCart";
import Products from "./Products";
import TotalPrice from "./TotalPrice";
import { useAppDispatch } from "@/hook/reduxHook";

interface Props {
  setOpenCart: any;
  setOpenCheckout: any;
}

function MyCart({ setOpenCart, setOpenCheckout }: Props) {
  const { cart } = useContext(CartContext);
  const dispatch = useAppDispatch();
  const onClickCheckout = async () => {
    // dispatch(setCartCheckout(cart));
    setOpenCheckout(true);
    setOpenCart(false);
  };
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full z-[5000] bg-[#110B14]/70"
        onClick={() => {
          setOpenCart(false);
        }}
      ></div>
      <div className="fixed top-0 right-0 w-[440px] h-full z-[5001] sm:block hidden text-white">
        <div className="bg-[#252027] w-full h-full flex flex-col">
          <HeaderCart setOpenCart={setOpenCart} />
          <div
            className="overflow-scroll flex flex-col justify-between gap-5 flex-1"
            style={{
              maxHeight: "calc(100vh - 91px)",
            }}
          >
            <div>
              <Products />
              <TotalPrice />
              <div className="px-6">
                <ButtonComponent
                  title="Thanh toán"
                  className="w-full bg-primary rounded-lg"
                  padding="py-[15px]"
                  classNameText="text-14 font-bold text-[#110B14]"
                  onClick={onClickCheckout}
                />
              </div>
            </div>
            <FooterCart />
          </div>
        </div>
      </div>
    </>
  );
}
export default MyCart;
