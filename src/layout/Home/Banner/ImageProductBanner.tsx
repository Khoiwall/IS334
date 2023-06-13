import ImageAndGifNew from "@/components/ImageAndGifNew";

interface Prop {
  banner: any;
}

function ImageProductBanner({ banner }: Prop) {
  const product = banner?.product_id[0];
  return (
    <div className="relative ">
      {banner ? (
        <ImageAndGifNew
          src={product?.images[0]}
          alt={product?.name || ""}
          className="relative pt-[160px] pl-[160px]"
          rounded="rounded-xl"
        />
      ) : null}
    </div>
  );
}
export default ImageProductBanner;
