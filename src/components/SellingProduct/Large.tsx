import ButtonComponent from "@/components/ButtonComponent";
import { IconPlus, IconShare01, IconShare06 } from "@/components/Icon/Generate";
import ImageAndGifNew from "@/components/ImageAndGifNew";
import RatingStar from "@/components/RatingStar";

interface Props {
  product: any;
  setWidth?: boolean;
}
export default function Large({ product, setWidth }: Props) {
  return (
    <div className={`${setWidth ? "w-full" : "w-[245px] min-w-[245px]"}`}>
      <img
        className="rounded-[20px] max-w-[245px] max-h-[230px]"
        src={
          product.images
            ? product.images[0]
            : "https://pos.nvncdn.net/fb2e20-2071/ps/20230109_6ZjO99ReNm9VK4r4.jpg"
        }
        alt="lksjdf"
        width={245}
        height={230}
      />
      {/* <ImageAndGifNew
        src={product.images[0]}
        alt={"Shoe"}
        className="relative pt-[100%]"
        rounded="rounded-[20px]"
      /> */}

      <div className="my-[10px] text-xl h-14 font-semibold mint-ellipsis ">
        {product.name}
      </div>
      <div>
        <span className="text-lg leading-4 mr-2 font-bold">
          {product.discount === 0
            ? product?.price
            : product.price - (product.price * product.discount) / 100}{" "}
          vnd
        </span>
        {product.discount !== 0 && (
          <s className=" text-xs align-top text-[#706D72] leading-4 font-bold">
            {product.price} vnd
          </s>
        )}
      </div>
      <div className="mt-[10px] flex justify-between items-center">
        <RatingStar
          widthStar="14"
          heightStar="14"
          fill="#FBD273"
          rating={product.rating}
          fillDefault="#252027"
        />
        <div>
          <ButtonComponent
            Icon={IconPlus}
            icon={true}
            padding="p-[9px]"
            infoIcon={{ width: "22", height: "22", stroke: "white" }}
            className="bg-[#252027] hover:bg-primary rounded-lg hover:text-[#252027] hover-svg w-9 h-9"
          />
        </div>
      </div>
    </div>
  );
}
