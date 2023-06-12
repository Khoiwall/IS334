import { useContext } from "react";
import ButtonComponent from "@/components/ButtonComponent";
import { IconMinus, IconPlus } from "@/components/Icon/Generate";
import { CartContext } from "@/context/CartContext";

interface Props {
  quatity: number;
  setQuatity: any;
  product: any;
}

function QuantityProduct({ quatity, setQuatity, product }: Props) {
  const productTmp = product?.product_id;
  const { addProduct } = useContext(CartContext);
  const increaseOrDecrease = (isIncrease: boolean) => {
    setQuatity(isIncrease ? quatity + 1 : quatity <= 1 ? 1 : quatity - 1);
    if (!isIncrease && quatity <= 1) {
      return;
    }
    addProduct(productTmp, isIncrease ? 1 : -1);
  };
  return (
    <div className="">
      <div className="bg-[#1B161E] rounded-xl border border-white/10 border-solid">
        <div className="p-2">
          <div className="flex items-center justify-between">
            <ButtonComponent
              title={""}
              icon={true}
              Icon={IconMinus}
              infoIcon={{
                width: "16",
                height: "16",
                stroke: "white",
              }}
              padding="p-0 gap-0"
              className="h-[16px] bg-transparent"
              onClick={() => {
                increaseOrDecrease(false);
              }}
            />
            <span className="text-[12px] leading-[16px] font-semibold mx-3">
              {quatity}
            </span>
            <ButtonComponent
              title={""}
              icon={true}
              Icon={IconPlus}
              infoIcon={{
                width: "16",
                height: "16",
                stroke: "white",
              }}
              className="h-[16px] bg-transparent"
              padding="p-0 gap-0"
              onClick={() => {
                increaseOrDecrease(true);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default QuantityProduct;
