import { useContext, useState } from "react";
import toast from "react-hot-toast";
import ButtonComponent from "@/components/ButtonComponent";
import { CartContext } from "@/context/CartContext";
import QuantityProduct from "./QuantityProduct";
import { useAppSelector } from "@/hook/reduxHook";
import { SignContext } from "@/context/SignContext";
interface Props {
  product: any;
}

function ProductAction({ product }: Props) {
  const [quatity, setQuatity] = useState<number>(1);
  const { user } = useAppSelector((state) => state?.authRedux);

  const { openModalSign } = useContext(SignContext);
  const { addProduct, cart } = useContext(CartContext);

  const addToCart = async () => {
    if (product) {
      toast.success("Thêm sản phẩm thành công");
      addProduct(product, quatity);
    }
  };

  return (
    <>
      {user ? (
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-[14px]">
            <QuantityProduct quatity={quatity} setQuatity={setQuatity} />
            <div className="flex-1">
              <ButtonComponent
                className="bg-container hover:bg-[#231d26] w-full py-4 rounded-xl"
                title={"Add to cart"}
                classNameText="text-[16px] leading-[19px] font-bold"
                onClick={addToCart}
                type="button"
              />
            </div>
          </div>
        </div>
      ) : (
        <ButtonComponent
          className="bg-primary py-4 rounded-xl w-full"
          onClick={() => {
            openModalSign("đăng nhập");
          }}
          title="Đăng nhập"
          classNameText="text-[16px] leading-[19px] font-bold text-[#110B14]"
        />
      )}
    </>
  );
}
export default ProductAction;
