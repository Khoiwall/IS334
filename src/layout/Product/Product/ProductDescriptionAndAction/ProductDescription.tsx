import Link from "next/link";
import { BigNum } from "@/utils/bigNum";
import ConverICon from "@/components/ConvertIcon";
import { IconShare01 } from "@/components/Icon/Generate";
import ImageAndGifNew from "@/components/ImageAndGifNew";
// import Star from "@/components/Star";

interface Props {
  product: any;
}

function filterStar(specifications: { name: string; value: string }[]) {
  const filterStar = specifications.filter((specification) => {
    return specification?.name === "Customer Reviews";
  });
  return parseFloat(filterStar[0]?.value?.split(" ")[0]);
}

function ProductDescription({ product }: Props) {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <div className="flex items-center gap-1.5 mb-5">
          <div className="flex items-center gap-1.5">
            <span className="text-[14px] leading-[20px] font-medium">
              Sold by neferstore
            </span>
          </div>
        </div>
        <div className="relative mb-4">
          <div className="overflow-hidden">
            <h2 className="text-[32px] leading-[30px] font-semibold">
              {product?.name}
            </h2>
          </div>
        </div>
        {/* <div className="flex items-center justify-between">
          {product?.marketplace === "AMAZON" &&
          filterStar(product?.specifications || []) ? (
            <div className="flex items-center gap-[5px]">
              <Star
                rating={filterStar(product?.specifications || [])}
                widthStar="24"
                heightStar="24"
              />
              <div className="relaitve">
                <div className="overflow-hidden">
                  <span className="text-[14px] leading-[20px] font-semibold text-[#37F040]">
                    {BigNum(product?.ratingsTotal || 0)} reviews
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <button type="button" className="bg-transparent cursor-pointer">
            <ConverICon
              Icon={IconShare01}
              width="24"
              height="24"
              stroke="white"
            />
          </button>
        </div> */}
      </div>
    </div>
  );
}
export default ProductDescription;
