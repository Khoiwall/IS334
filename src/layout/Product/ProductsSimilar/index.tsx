import ImageAndGifNew from "@/components/ImageAndGifNew";
import ImageAndGif from "@/components/ImageAndGifNew";
import Products from "./Products";

interface Props {
  products: any;
}

function ProductsSimilar({ products }: Props) {
  return (
    <div>
      <h3 className="mt-7 mb-4 text-2xl font-medium text-white">
        Other Products
      </h3>
      {products?.length > 0 ? (
        <Products products={products} />
      ) : (
        <div className="min-h-[330px] flex-col flex items-center justify-center mt-6">
          <ImageAndGifNew
            className="relative pt-[260px] pl-[460px]"
            alt={""}
            src={
              "https://ucarecdn.com/10aa5127-d83e-4cea-a92d-92bae97491d5/-/quality/smart/-/format/webp/"
            }
            rounded="rounded-xl"
          />
          <h2 className="mt-2 text-2xl font-bold text-white">
            Not Found Products
          </h2>
        </div>
      )}
    </div>
  );
}
export default ProductsSimilar;
