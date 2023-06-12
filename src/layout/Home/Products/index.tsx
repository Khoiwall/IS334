import SellingProduct from "@/components/SellingProduct";

function ProductsHomepage({ products }: any) {
  console.log(products);
  return (
    <div className="relative">
      <div className="flex gap-8 overflow-scroll">
        {products?.map((product: any, index: number) => {
          return (
            <SellingProduct sizeType="medium" key={index} product={product} />
          );
        })}
      </div>
    </div>
  );
}
export default ProductsHomepage;
