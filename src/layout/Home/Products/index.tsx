import SellingProduct from "@/components/SellingProduct";

function ProductsHomepage({ products }: any) {
  return (
    <div className="relative">
      <div className="flex gap-8 overflow-scroll">
        {products?.map((product: any, index: number) => {
          return <SellingProduct key={index} product={product} />;
        })}
      </div>
    </div>
  );
}
export default ProductsHomepage;
