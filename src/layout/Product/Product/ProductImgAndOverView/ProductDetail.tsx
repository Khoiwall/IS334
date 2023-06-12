import ImageAndGifNew from "@/components/ImageAndGifNew";

interface Props {
  product: any;
}

function ProductDetail({ product }: Props) {
  console.log(product);

  return (
    <div className="relative">
      <div className="flex flex-col gap-[30px]">
        <div className="flex">
          <div className="relative">
            {product?.bio ? (
              <p
                className="text-[16px] leading-[24px] font-medium"
                dangerouslySetInnerHTML={{
                  __html: product?.bio || "",
                }}
              ></p>
            ) : (
              <p
                className="text-[16px] leading-[24px] font-medium whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: product?.bio || "" }}
              ></p>
            )}
          </div>
        </div>
        <div className="mb-[30px]">
          <ImageAndGifNew
            src={product?.images[0] || ""}
            alt={product?.name || ""}
            className="relative pt-[100%] bg-white rounded-[20px]"
            rounded="rounded-[20px]"
            objectCover="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
