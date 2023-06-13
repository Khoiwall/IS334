import ConvertICon from "@/components/ConvertIcon";
import { IconAlertCirCle, IconLock } from "@/components/Icon/Different";

interface Item {
  Icon?: any;
  classNameText: string;
  icon?: boolean;
  text: string;
  stroke?: string;
  fill?: string;
}

function Item({ Icon, classNameText, icon, text, stroke, fill }: Item) {
  return (
    <div className="flex items-start gap-2">
      {icon && Icon ? (
        <ConvertICon
          Icon={Icon}
          width="16"
          height="16"
          stroke={stroke}
          fill={fill}
        />
      ) : (
        <div className="w-[16px]"></div>
      )}
      <div className="relative w-full h-full">
        <div className="flex items-center">
          <span className={classNameText}>{text}</span>
        </div>
      </div>
    </div>
  );
}

function FooterCart() {
  const textSize = "text-[12px] leading-[16px] font-medium";
  return (
    <div className="mb-5">
      <div className="px-6">
        <div className="flex flex-col">
          <div className="mb-3">
            <div className="flex flex-col gap-5">
              <Item
                icon={true}
                Icon={IconLock}
                stroke="#A694BE"
                text="Bạn sẽ không bị tính phí cho đến khi bạn xem lại đơn đặt hàng này trên trang tiếp theo"
                classNameText={textSize}
              />
              <Item
                icon={true}
                Icon={IconLock}
                stroke="#A694BE"
                text="Neferstore Bảo vệ mua hàng"
                classNameText={textSize}
              />
            </div>
          </div>
          <Item
            text="Tự tin mua sắm trên Neferstore khi biết rằng nếu xảy ra sự cố, chúng tôi luôn hỗ trợ bạn."
            classNameText={`${textSize} text-[#A09DA1]`}
          />
        </div>
      </div>
    </div>
  );
}
export { FooterCart, Item };
