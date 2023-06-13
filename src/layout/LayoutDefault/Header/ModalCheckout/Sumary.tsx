import { CartContext } from "@/context/CartContext";
import { makeid } from "@/utils/randomString";
import { useContext } from "react";
import ProductOnCart from "../MyCart/Products/ProductOnCart";

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
function Sumary() {
  const { cart } = useContext(CartContext);
  return (
    <div className="p-4 flex flex-col overflow-auto">
      <div className="pb-3  border-b border-[#303030]">
        <div className="flex items-center justify-between">
          <h2 className="text-16 font-sembold text-white">Tổng tiền</h2>
          <span className="text-14 font-medium">{totalPrice(cart)} vnd</span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <h2 className="text-16 font-sembold text-white">Tiền ship</h2>
          <span className="text-14 font-medium">{15000} vnd</span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <h2 className="text-16 font-sembold text-white">Thuế</h2>
          <span className="text-14 font-medium">{10000} vnd</span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <h2 className="text-16 font-sembold text-white">Tất cả</h2>
          <span className="text-14 font-medium">
            {totalPrice(cart) + 15000 + 10000} vnd
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 py-3">
        {cart?.map((product: any) => (
          <ProductOnCart product={product} key={makeid(10)} checkout={true} />
        ))}
      </div>
    </div>
  );
}
export default Sumary;
