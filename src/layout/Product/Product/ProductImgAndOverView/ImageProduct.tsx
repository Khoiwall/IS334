import ImageAndGifNew from "@/components/ImageAndGifNew";

interface Props {
  mainImage: string;
  setMainImage: any;
  product: any;
}
function ImageProduct({ mainImage, setMainImage, product }: Props) {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 h-full">
        <div className="max-h-full overflow-auto">
          <div className="flex flex-col gap-2.5">
            {product?.images?.map((image: string) => {
              return (
                <div
                  key={image}
                  className="block cursor-pointer"
                  onClick={() => {
                    setMainImage(image);
                  }}
                >
                  <ImageAndGifNew
                    src={image}
                    alt={product?.title}
                    className="relative pt-[80px] pl-[80px] bg-white rounded-xl"
                    rounded="rounded-xl"
                    objectCover="object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="pl-[90px]">
        <ImageAndGifNew
          src={mainImage as string}
          alt={product?.title || ""}
          className="relative pt-[100%] bg-white rounded-[20px]"
          rounded="rounded-[20px]"
          objectCover="object-contain"
        />
      </div>
    </div>
  );
}
export default ImageProduct;
