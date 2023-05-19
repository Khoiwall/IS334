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
export default function Small({ product }: Props) {
  return (
    <div className={`w-[110px] h-[190px] min-w-[110px] @container`}>
      <img
        className="rounded-[20px]"
        src={
          product.image ??
          "https://pos.nvncdn.net/fb2e20-2071/ps/20230109_6ZjO99ReNm9VK4r4.jpg"
        }
        alt="lksjdf"
        width={110}
        height={110}
      />
      {/* <ImageAndGifNew
        src={product.image}
        alt={"Shoe"}
        className="relative pt-[100%]"
        rounded="rounded-[20px]"
      /> */}

      <div className="my-[2px] text-xs text h-[30px] font-semibold mint-ellipsis ">
        {product.title}
      </div>
      <div className="h-4">
        <span className="text-[12px] leading-[14px] mr-2 font-bold">
          {product.discount !== 0
            ? product.price - (product.discount * product?.price) / 100
            : product?.price}{" "}
        </span>
        {product.discount !== 0 && (
          <s className="text-[10px] leading-[14px] text-start text-[#706D72] font-semibold">
            {product.price}
          </s>
        )}
      </div>
      <div className="flex justify-between items-center mt-0.5">
        <RatingStar
          widthStar="10"
          heightStar="10"
          fill="#FBD273"
          rating={product.rating}
          fillDefault="#252027"
          classRatingText="text-[10px] leading-[10px]"
        />
        <div>
          <ButtonComponent
            Icon={IconPlus}
            icon={true}
            padding="p-[9px]"
            infoIcon={{ width: "14", height: "14", stroke: "white" }}
            className="bg-[#252027] hover:bg-primary rounded-lg hover:text-[#252027] hover-svg w-6 h-6"
          />
        </div>
      </div>
    </div>
  );
}
