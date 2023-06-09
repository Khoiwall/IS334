import ButtonComponent from "@/components/ButtonComponent";
import { IconHeart, IconPlus } from "@/components/Icon/Generate";
import { CartContext } from "@/context/CartContext";
import { BigNum } from "@/utils/bigNum";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import ConvertICon from "../ConvertIcon";

interface Props {
  product: any;
}
export default function Small({ product }: Props) {
  const { addProduct } = useContext(CartContext);
  return (
    <div className={`w-[110px] h-[190px] min-w-[110px] flex flex-col`}>
      <img
        className="rounded-[20px] max-w-[110px] max-h-[110px]"
        src={
          product.images
            ? product.images[0]
            : "https://pos.nvncdn.net/fb2e20-2071/ps/20230109_6ZjO99ReNm9VK4r4.jpg"
        }
        alt="lksjdf"
        width={110}
        height={110}
      />
      {/* <ImageAndGifNew
        src={product.images[0]}
        alt={"Shoe"}
        className="relative pt-[100%]"
        rounded="rounded-[20px]"
      /> */}

      <Link href={`/product/${product?._id}`} className="mint-ellipsis block">
        <span className="my-[5px] text-10 font-semibold mint-ellipsis-one hover:text-primary">
          {product.name || "asf"}
        </span>
      </Link>

      <div className="">
        <span className="text-10 mr-1 font-bold">
          {product.discount !== 0
            ? product.price - (product.discount * product?.price) / 100
            : product?.price}{" "}
        </span>
        {product.discount !== 0 && (
          <span className="text-[10px] leading-[14px] text-start text-[#706D72] font-semibold">
            -{product.discount}%
          </span>
        )}
      </div>
      <div className="flex justify-between items-center my-0.5">
        <div className="flex items-center gap-2">
          <ConvertICon
            Icon={IconHeart}
            width="12"
            height="12"
            fill="#A694BE"
            stroke="#A694BE"
          />
          <span className="text-12 font-semibold text-white">
            {BigNum(product?.heart || 0)}
          </span>
        </div>
        <div>
          <ButtonComponent
            Icon={IconPlus}
            icon={true}
            onClick={() => {
              toast.success("Thêm sản phẩm thành công");
              addProduct(product, 1);
            }}
            padding="p-[9px]"
            infoIcon={{ width: "14", height: "14", stroke: "white" }}
            className="bg-[#252027] hover:bg-primary rounded-lg hover:text-[#252027] hover-svg w-6 h-6"
          />
        </div>
      </div>
    </div>
  );
}
