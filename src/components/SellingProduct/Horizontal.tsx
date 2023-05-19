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
export default function Horizontal({ product }: Props) {
  return (
    <div
      className={`flex w-[210px] h-[76px] min-w-[210px] p-[6px] bg-[#110b14] bg-opacity-60 rounded-[10px]`}
    >
      <img
        className="rounded-[10px]"
        src={
          product.image ??
          "https://pos.nvncdn.net/fb2e20-2071/ps/20230109_6ZjO99ReNm9VK4r4.jpg"
        }
        alt="lksjdf"
        width={64}
        height={64}
      />
      {/* <ImageAndGifNew
        src={product.image}
        alt={"Shoe"}
        className="relative pt-[100%]"
        rounded="rounded-[20px]"
      /> */}
      <div className="flex-1 ml-[6px] relative">
        <div className="my-[2px] text-xs text h-[30px] font-semibold mint-ellipsis ">
          {product.title}
        </div>
        <div className="h-4">
          <span className="text-[12px] leading-[14px] mr-2 font-bold">
            {product.price}
          </span>
          <s className="text-[10px] leading-[14px] text-start text-[#706D72] font-semibold">
            {product.price - product.discount}
          </s>
        </div>
        <div className="mt-1">
          <RatingStar
            widthStar="10"
            heightStar="10"
            fill="#FBD273"
            rating={product.rating}
            fillDefault="#252027"
            classRatingText="text-[10px] leading-[10px]"
          />
        </div>

        <ButtonComponent
          Icon={IconPlus}
          icon={true}
          padding="p-[9px]"
          infoIcon={{ width: "14", height: "14", stroke: "white" }}
          className="bg-[#252027] hover:bg-primary rounded-lg hover:text-[#252027] hover-svg w-6 h-6 absolute right-[2px] bottom-[2px]"
        />
      </div>
    </div>
  );
}
