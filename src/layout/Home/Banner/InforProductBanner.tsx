import Link from "next/link";

interface Prop {
  banner: any;
}

function InforProductBanner({ banner }: Prop) {
  const product = banner?.product_id[0];
  return (
    <div className="flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2">
          <h4 className="max-w-[158px] truncate text-[18px] leading-[22px] font-semibold text-white">
            {product?.name || "Metastream #0000"}
          </h4>
        </div>
        <div className="mt-[19px]">
          <div className="flex items-center gap-2.5">
            <div className="">
              <span className="text-18 mr-1 font-bold">
                {product.discount !== 0
                  ? product.price - (product.discount * product?.price) / 100
                  : product?.price}{" "}
                vnd
              </span>
              {product.discount !== 0 && (
                <span className="text-[10px] leading-[14px] text-start text-[#706D72] font-semibold">
                  -{product.discount}%
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <Link href={`/product/${product?._id}`}>
          <div className="px-8 py-[14.5px] rounded-xl bg-primary hover:bg-primary/80 cursor-pointer inline-block">
            <p className="text-[16px] leading-[19px] font-semibold text-[#110B14]">
              Buy Now
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default InforProductBanner;
