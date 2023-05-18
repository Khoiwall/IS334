import Link from "next/link";

interface Prop {
  banner: any;
}

function InforProductBanner({ banner }: Prop) {
  const product = banner?.products[0];
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
            <p className="text-[20px] leading-[24px] text-white font-semibold">
              {(product?.price || 0).toFixed(2)} vnd
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <Link href={`/watch/${banner?._id}`}>
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
