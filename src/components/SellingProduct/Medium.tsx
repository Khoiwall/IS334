import ButtonComponent from "@/components/ButtonComponent";
import {
  IconHeart,
  IconPlus,
  IconShare01,
  IconShare06,
} from "@/components/Icon/Generate";
import ImageAndGifNew from "@/components/ImageAndGifNew";
import RatingStar from "@/components/RatingStar";
import { CartContext } from "@/context/CartContext";
import { BigNum } from "@/utils/bigNum";
import Link from "next/link";
import { useContext } from "react";
import toast from "react-hot-toast";
import ConvertICon from "../ConvertIcon";

interface Props {
  product: any;
}
export default function Medium({ product }: Props) {
  const { addProduct } = useContext(CartContext);
  return (
    <div className={`w-[190px] min-w-[190px] flex flex-col`}>
      <img
        className="rounded-[12px] max-w-[190px] max-h-[190px]"
        src={
          product.images
            ? product.images[0]
            : "https://pos.nvncdn.net/fb2e20-2071/ps/20230109_6ZjO99ReNm9VK4r4.jpg"
        }
        alt="lksjdf"
        width={190}
        height={190}
      />
      {/* <ImageAndGifNew
        src={product.images[0]}
        alt={"Shoe"}
        className="relative pt-[100%]"
        rounded="rounded-[20px]"
      /> */}

      <Link href={`/product/${product?._id}`} className="mint-ellipsis block">
        <div className="my-[8px] h-8 text-16 font-semibold mint-ellipsis hover:text-primary">
          {product.name}
        </div>
      </Link>
      <div>
        <span className="text-16 mr-2 font-semibold">
          {product.discount !== 0
            ? product.price - (product.discount * product?.price) / 100
            : product?.price}{" "}
          vnd
        </span>
        {product?.discount !== 0 && (
          <s className="text-12 align-top text-[#706D72] leading-4 font-bold">
            {product.price} vnd
          </s>
        )}
      </div>
      <div className="mt-[8px] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ConvertICon
            Icon={IconHeart}
            width="18"
            height="18"
            fill="#A694BE"
            stroke="#A694BE"
          />
          <span className="text-12 font-semibold text-white">
            {BigNum(product?.heart)}
          </span>
        </div>
        <ButtonComponent
          Icon={IconPlus}
          onClick={() => {
            toast.success("Thêm sản phẩm thành công");
            addProduct(product, 1);
          }}
          icon={true}
          padding="p-1.5"
          infoIcon={{ width: "18", height: "18", stroke: "white" }}
          className="bg-[#252027] hover:bg-primary rounded-lg hover:text-[#252027] hover-svg w-7 h-7"
        />
      </div>
    </div>
  );
}
