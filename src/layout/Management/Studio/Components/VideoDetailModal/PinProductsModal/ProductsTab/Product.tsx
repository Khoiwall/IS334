import { useState } from "react";
import ConverICon from "@/components/ConvertIcon";
import { IconCheck } from "@/components/Icon/Generate";
import ImageAndGifNew from "@/components/ImageAndGifNew";

interface Props {
  product: any;
}
export default function Product({ product }: Props) {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  return (
    <div
      className={`cursor-pointer relative hover:border hover:border-solid hover:border-primary rounded-xl ${
        product.isSelected
          ? "border-primary border border-solid"
          : "border border-solid border-white/0"
      }`}
      onMouseOver={() => {
        setIsHovering(true);
      }}
      onMouseOut={() => {
        setIsHovering(false);
      }}
    >
      <div className={`text-start bg-[#110B14] p-3 rounded-xl `}>
        <ImageAndGifNew
          src={
            product.images[0] ??
            "https://pos.nvncdn.net/fb2e20-2071/ps/20230109_6ZjO99ReNm9VK4r4.jpg"
          }
          objectCover="object-contain"
          alt={"Shoe"}
          className="relative pt-[100%] bg-white"
          rounded="rounded-xl"
        />

        <div className="mt-2.5 mb-1.5 opacity-70 text-[14px] text font-medium">
          <span className="mint-ellipsis h-[42px]">{product.name}</span>
        </div>
        <div className="text-14 mr-2 font-bold">{product.price} vnd</div>
      </div>
      <div
        className={`${
          product.isSelected && "bg-primary"
        } absolute flex items-center justify-center top-[-4px] right-[-4px] w-8 h-8 border-2 border-solid border-primary rounded-full bg-[#110B14] `}
      >
        {product.isSelected ? (
          <ConverICon Icon={IconCheck} width="14" height="14" />
        ) : (
          isHovering && (
            <ConverICon
              Icon={IconCheck}
              width="14"
              height="14"
              stroke="#A694BE"
            />
          )
        )}
      </div>
    </div>
  );
}
