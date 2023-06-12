import ButtonComponent from "@/components/ButtonComponent";
import { IconMinus, IconPlus } from "@/components/Icon/Generate";

interface Props {
  quatity: number;
  setQuatity: any;
}

function QuantityProduct({ quatity, setQuatity }: Props) {
  const increaseOrDecrease = (isIncrease: boolean) => {
    setQuatity(isIncrease ? quatity + 1 : quatity <= 1 ? 1 : quatity - 1);
  };
  return (
    <div className="flex-1">
      <div className="bg-container rounded-xl border border-white/10 border-solid">
        <div className="p-[14px]">
          <div className="flex items-center justify-between">
            <ButtonComponent
              title={""}
              icon={true}
              Icon={IconMinus}
              padding="p-0 gap-0"
              infoIcon={{
                width: "24",
                height: "24",
                stroke: "white",
              }}
              className="h-6 bg-transparent"
              onClick={() => {
                increaseOrDecrease(false);
              }}
            />
            <span className="text-[16px] leading-[19px] font-semibold">
              {quatity}
            </span>
            <ButtonComponent
              title={""}
              icon={true}
              Icon={IconPlus}
              padding="p-0 gap-0"
              infoIcon={{
                width: "24",
                height: "24",
                stroke: "white",
              }}
              className="h-6 bg-transparent"
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
