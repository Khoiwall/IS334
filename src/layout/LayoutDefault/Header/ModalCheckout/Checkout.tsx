import { CartAPI } from "@/api";
import ButtonComponent from "@/components/ButtonComponent";
import LayOutInput from "@/components/Input";
import { CartContext } from "@/context/CartContext";
import { checkPhone } from "@/utils/checkPhone";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51HyvWfLZZSnHicQj8h4WWhdnTJ7WkpUyfSdSZ7GuLaFlRPix1YL02Ft8fO9fonLGKnOiYd8RlMLboVPYIFuVxj8p00Ibb4nHS6"
);

function totalPrice(cart: any[]) {
  let sum = 0;
  cart?.map((product) => {
    sum +=
      (product?.product_id?.discount !== 0
        ? product?.product_id?.price -
          (product?.product_id?.discount * product?.product_id?.price) / 100
        : product?.product_id?.price) * product?.quatity;
  });
  return sum;
}
function PaymentMethod({ setOpenCheckout }: any) {
  const { cart } = useContext(CartContext);
  const [clientSecret, setClientSecret] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [infor, setInfor] = useState<any>({});
  const getPM = async (e: any) => {
    e?.preventDefault();
    if (!checkPhone(e?.target?.numberPhone?.value)) {
      toast.error("Số điện thoại không đúng định dạng");
      return;
    }
    setInfor({
      address: e?.target?.address?.value,
      numberPhone: e?.target?.numberPhone?.value,
    });
    setIsLoading(true);
    const response = await CartAPI.getPM(totalPrice(cart) + 15000 + 10000);
    if (response && response?.data?.status === "Success") {
      setClientSecret({
        clientSecret: response?.data?.clientSecret,
        appearance: {
          theme: "night" as "night",
        },
      });
    }
  };
  return (
    <>
      {!clientSecret ? (
        <form
          onSubmit={isLoading ? () => {} : getPM}
          className="flex flex-col gap-3 w-[350px]"
        >
          <LayOutInput
            sign={{
              title: "Địa chỉ",
              isRequire: true,
              type: "text",
              placeholder: "Địa chỉ",
              name: "address",
            }}
            className={"bg-[#110B14] outline-none w-full"}
            backGroundInput="bg-[#110B14]"
            padding="p-3"
            textSize="text-sm"
          />
          <LayOutInput
            sign={{
              title: "Số điện thoại",
              isRequire: true,
              type: "text",
              placeholder: "Số điện thoại",
              name: "numberPhone",
            }}
            className={"bg-[#110B14] outline-none w-full"}
            backGroundInput="bg-[#110B14]"
            padding="p-3"
            textSize="text-sm"
          />
          <div className="flex justify-end">
            <ButtonComponent
              type="submit"
              padding="py-[15px] px-6"
              title="Tiếp theo"
              isLoading={isLoading}
              classNameText="text-14 font-semibold"
              className="cursor-pointer w-[168px] bg-primary text-black rounded-lg"
            />
          </div>
        </form>
      ) : (
        <Elements stripe={stripePromise} options={clientSecret}>
          <CheckoutForm infor={infor} setOpenCheckout={setOpenCheckout} />
        </Elements>
      )}
    </>
  );
}
export default PaymentMethod;
