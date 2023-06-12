import ImageAndGifNew from "@/components/ImageAndGifNew";

function DisplayProductOnVideo({ products }: { products: any[] }) {
  return (
    <>
      <div className="2xl:flex items-center justify-center hidden gap-2">
        {products.slice(0, 3).map((product) => (
          <ImageAndGifNew
            src={product.images[0]}
            key={product.images[0]}
            alt={product.images[0]}
            className="bg-white rounded-lg w-9 h-9 relative"
            rounded="rounded-lg"
            objectCover="object-contain"
          />
        ))}
        {products.length > 3 && (
          <div className="text-xs bg-[#303030] rounded-lg w-9 h-9 justify-center flex items-center">
            {products.length - 3}+
          </div>
        )}
      </div>
      <div className="2xl:hidden flex items-center flex-1 justify-center">
        <div className="2xl:hidden flex  items-center gap-2">
          {products.slice(0, 2).map((product) => (
            <ImageAndGifNew
              src={product.images[0]}
              key={product.images[0]}
              alt={product.images[0]}
              className="bg-white rounded-lg w-8 h-8 relative"
              rounded="rounded-lg"
              objectCover="object-contain"
            />
          ))}
          {products.length > 2 && (
            <div className="text-xs bg-[#303030] rounded-lg w-8 h-8 justify-center flex items-center">
              {products.length - 2}+
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default DisplayProductOnVideo;
