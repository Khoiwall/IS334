import SEO from "@/components/SEO";
import SpinnerLoading from "@/components/SpinnerLoadding";
import { useEffect, useState } from "react";
// import SEO from "@/components/SEO";
import Product from "@/layout/Product";
import { ProductAPI } from "@/api";

function ProductPage({ product }: any) {
  const [isWindow, setIsWindow] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsWindow(true);
    }
  }, []);
  return (
    <>
      <SEO
        title={product?.name}
        description={product?.bio}
        image={
          product?.images[0] ||
          "https://i0.wp.com/thescentnote.com/wp-content/uploads/2023/02/nen-thom-trang-tri-2.jpg?fit=1024%2C742&ssl=1"
        }
        url={process.env.NEXT_PUBLIC_METASTREAM}
      />
      {isWindow ? <Product /> : <SpinnerLoading />}
    </>
  );
}

export default ProductPage;

export async function getStaticPaths() {
  const response = await ProductAPI.getProducts();
  const paths = response?.data.data.map((product: any, index: number) => {
    return {
      params: { id: product._id },
    };
  });
  return { paths, fallback: true };
}

export async function getStaticProps({ params }: any) {
  let response;
  response = await ProductAPI.getProduct(params?.id);
  let product;
  if (response?.data?.data) {
    product = response?.data.data;
  } else {
    product = {
      userName: "Metastream",
      descriptions: "Metastream",
      avatar:
        "https://res.cloudinary.com/khoild11/image/upload/v1661420412/image-song/Partnership_mhx4og.png",
    };
  }
  return { props: { product } };
}
