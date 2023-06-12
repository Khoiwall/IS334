import Link from "next/link";
import { useContext, useState } from "react";
import ButtonComponent from "@/components/ButtonComponent";
import { IconTrash } from "@/components/Icon/Generate";
import ImageAndGifNew from "@/components/ImageAndGifNew";
import { CartContext } from "@/context/CartContext";
import QuantityProduct from "./Quantity";
import { AnyArray } from "immer/dist/internal";

interface Props {
  product: any;
}

function ProductOnCart({ product }: Props) {
  console.log(product);
  const [quantity, setQuatity] = useState<number>(product?.quatity);
  const productTmp = product?.product_id as any;
  const { removeProduct } = useContext(CartContext);
  const removeProductOnCart = async () => {
    removeProduct(productTmp, product?.quatity);
  };
  return (
    <div className="flex gap-5">
      <ImageAndGifNew
        src={productTmp?.images[0]}
        alt={productTmp?.name}
        className="relative pt-[84px] pl-[84px] bg-white rounded-xl"
        rounded="rounded-xl"
        objectCover="object-contain"
      />
      <div className="flex flex-col justify-between flex-1">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex flex-col gap-1.5">
            <div className="">
              <h4 className="text-[16px] leading-[19px] font-semibold mint-ellipsis-one">
                {productTmp?.name}
              </h4>
            </div>
            {/* <Link href={`/detail/ms/${productTmp?.user_id}/${productTmp?._id}`}>
              <a>
                <div className="">
                  <h4 className="text-[16px] leading-[19px] font-semibold mint-ellipsis-one">
                    {productTmp?.name}
                  </h4>
                </div>
              </a>
            </Link> */}
          </div>
          <div className="flex flex-1 justify-end">
            <ButtonComponent
              Icon={IconTrash}
              infoIcon={{
                width: "16",
                height: "16",
                stroke: "white",
              }}
              onClick={removeProductOnCart}
              icon={true}
              className="bg-container w-8 h-8 rounded-lg"
              title=""
              padding="p-0 gap-0"
            />
          </div>
        </div>
        <div className="flex  items-center justify-between">
          <QuantityProduct
            product={product}
            quatity={quantity}
            setQuatity={setQuatity}
          />
          <div>
            <span className="text-16 mr-2 font-semibold">
              {product.discount !== 0
                ? product?.product_id.price -
                  (product?.product_id?.discount * product?.product_id?.price) /
                    100
                : product?.product_id?.price}{" "}
              đ
            </span>
            {product?.discount !== 0 && (
              <s className="text-12 align-top text-[#706D72] leading-4 font-bold">
                {product?.product_id?.price}đ
              </s>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductOnCart;
