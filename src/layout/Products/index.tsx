import SellingProduct from "@/components/SellingProduct";
import { PRODUCTS } from "@/contants/DATABANNER";

function Products() {
  return (
    <div className="mt-[54px]">
      <div className="max-w-[1920px] 3xl:mx-auto lg:mx-[94px] sm:mx-12 mx-6 py-10">
        <div className="grid 2xl:grid-cols-8 xl:grid-cols-6 sm:grid-cols-4 grid-cols-2 text-white gap-5">
          {PRODUCTS?.map((product: any, index: number) => {
            return (
              <SellingProduct setWidth={true} key={index} product={product} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Products;
