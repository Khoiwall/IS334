import ProductAPI from "@/api/product";
import SEO from "@/components/SEO";
import SpinnerLoading from "@/components/SpinnerLoadding";
import Products from "@/layout/Products";
import { useEffect, useState } from "react";
// import SEO from "@/components/SEO";

function ProductsPage() {
  const [isWindow, setIsWindow] = useState<boolean>(false);
  const [products, setProducts] = useState();
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsWindow(true);
    }
    const asyncFunc = async () => {
      setProducts(await ProductAPI.getProducts());
    };
    asyncFunc();
  }, []);
  return (
    <>
      <SEO
        title="Sản phẩm"
        description={"Bán nến thơm"}
        image={
          "https://i0.wp.com/thescentnote.com/wp-content/uploads/2023/02/nen-thom-trang-tri-2.jpg?fit=1024%2C742&ssl=1"
        }
        url={process.env.NEXT_PUBLIC_METASTREAM}
      />
      {isWindow ? <Products products={products} /> : <SpinnerLoading />}
    </>
  );
}

export default ProductsPage;
