import { CartAPI } from "@/api";
import ButtonComponent from "@/components/ButtonComponent";
import { CartContext } from "@/context/CartContext";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({ setOpenCheckout, infor }: any) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { cart } = useContext(CartContext);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setIsLoading(true);
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      redirect: "if_required",
    });
    console.log(result);
    if (result.error) {
      toast.error((result.error as any)?.message);
    } else {
      const option = {
        products: cart,
        status: result?.paymentIntent?.status,
        pmId: result?.paymentIntent?.id,
        phoneNumber: infor?.phoneNumber,
        address: infor?.address,
      };
      const response = await CartAPI.createOrder(option);
      if (response && response?.data?.status === "success") {
        setOpenCheckout(false);
        toast.success("Thanh toán thành công");
      }
    }
    setIsLoading(false);
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={isLoading ? () => {} : handleSubmit}
    >
      <PaymentElement />
      {stripe && elements && (
        <div className="flex justify-end">
          <ButtonComponent
            type="submit"
            isLoading={isLoading}
            padding="py-[15px] px-6"
            title="Thanh toán"
            classNameText="text-14 font-semibold"
            className="cursor-cursor w-[168px] bg-primary text-black rounded-lg "
          />
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
