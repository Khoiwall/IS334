import ButtonComponent from "@/components/ButtonComponent";
import { IconPlus, IconShare01, IconShare06 } from "@/components/Icon/Generate";
import ImageAndGifNew from "@/components/ImageAndGifNew";
import RatingStar from "@/components/RatingStar";

interface Props {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
    discount: number;
    rating: number;
  };
}
export default function Medium({ product }: Props) {
  return (
    <div className={`w-[190px] min-w-[190px]`}>
      <img
        className="rounded-[12px]"
        src={
          product.image ??
          "https://pos.nvncdn.net/fb2e20-2071/ps/20230109_6ZjO99ReNm9VK4r4.jpg"
        }
        alt="lksjdf"
        width={190}
        height={190}
      />
      {/* <ImageAndGifNew
        src={product.image}
        alt={"Shoe"}
        className="relative pt-[100%]"
        rounded="rounded-[20px]"
      /> */}

      <div className="my-[8px] text-[18px] leading-[22px] h-[44px] font-semibold mint-ellipsis ">
        {product.title}
      </div>
      <div>
        <span className="text-lg leading-4 mr-2 font-semibold">
          {product.discount !== 0
            ? product.price - (product.discount * product?.price) / 100
            : product?.price}{" "}
          vnd
        </span>
        {product?.discount !== 0 && (
          <s className=" text-xs align-top text-[#706D72] leading-4 font-bold">
            {product.price} vnd
          </s>
        )}
      </div>
      <div className="mt-[8px] flex justify-between items-center">
        <RatingStar
          widthStar="14"
          heightStar="14"
          fill="#FBD273"
          rating={product.rating}
          fillDefault="#252027"
        />
        <ButtonComponent
          Icon={IconPlus}
          icon={true}
          padding="p-[9px]"
          infoIcon={{ width: "18", height: "18", stroke: "white" }}
          className="bg-[#252027] hover:bg-primary rounded-lg hover:text-[#252027] hover-svg w-8 h-8"
        />
      </div>
    </div>
  );
}
