import { ProductAPI } from "@/api";
import ConvertICon from "@/components/ConvertIcon";
import ConverICon from "@/components/ConvertIcon";
import { IconCheckCirCle } from "@/components/Icon/Different";
import { IconHeart } from "@/components/Icon/Generate";
import { SignContext } from "@/context/SignContext";
import { useAppDispatch, useAppSelector } from "@/hook/reduxHook";
import { setUser } from "@/stores/redux/auth/setUser";
import { useContext, useState } from "react";

interface Props {
  product: any;
}

function PriceAndStock({ product }: Props) {
  const [heart, setHeart] = useState<number>(product?.heart || 0);
  const { user } = useAppSelector((state) => state?.authRedux);
  const { openModalSign } = useContext(SignContext);
  const dispatch = useAppDispatch();
  const onClickHeart = async () => {
    if (user) {
      setHeart(
        user?.product_id?.indexOf(product?._id) === -1
          ? heart + 1
          : heart === 0
          ? 0
          : heart - 1
      );
      const productTmp: string[] =
        user?.product_id?.indexOf(product?._id) === -1
          ? [...user?.product_id, product?._id]
          : user?.product_id?.filter((_product) => {
              return _product !== product?._id;
            });

      dispatch(
        await setUser({
          ...user,
          product_id: productTmp,
        })
      );
      await ProductAPI.heart(
        product?._id,
        productTmp?.indexOf(product?._id) === -1 ? false : true
      );
    } else {
      openModalSign("Đăng nhập");
    }
  };
  return (
    <div className="flex flex-col">
      <div className="mb-4 flex items-center gap-3">
        <div onClick={onClickHeart} className="cursor-pointer">
          <ConvertICon
            Icon={IconHeart}
            width="18"
            height="18"
            stroke={
              !user
                ? "white"
                : user?.product_id?.indexOf(product?._id) === -1
                ? "white"
                : "#4AE052"
            }
            fill={
              !user
                ? "white"
                : user?.product_id?.indexOf(product?._id) === -1
                ? "white"
                : "#4AE052"
            }
          />
        </div>
        <span className="text-16 font-bold text-white">{heart}</span>
      </div>
      <div className="flex items-start gap-1.5">
        <h4 className="text-[36px] leading-[48px] font-semibold">
          {product.discount !== 0
            ? product.price - (product.discount * product?.price) / 100
            : product?.price}{" "}
          đ
        </h4>
        {product?.discount !== 0 && (
          <span className="text-16 align-top text-[#706D72] leading-4 font-bold line-through">
            {product.price} đ
          </span>
        )}
      </div>
    </div>
  );
}
export default PriceAndStock;
