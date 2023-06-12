import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

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

function TotalPrice() {
  const { cart } = useContext(CartContext);
  return (
    <div className="mb-5">
      <div className="relative">
        <div className="flex flex-col px-6">
          <div className="flex justify-between items-center mb-3">
            <div className="relative">
              <span className="text-16">Tổng tiền</span>
            </div>
            <div className="relative">
              <span className="text-16">{totalPrice(cart)} đ</span>
            </div>
          </div>
          <span className="text-12 font-medium text-[#A09DA1]">
            Taxes and tiền ship sẽ tính ở bước tiếp theo
          </span>
        </div>
      </div>
    </div>
  );
}
export default TotalPrice;
