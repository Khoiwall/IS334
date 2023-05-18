import SEO from "@/components/SEO";
import SpinnerLoading from "@/components/SpinnerLoadding";
import Home from "@/layout/Home";
import dynamic from "next/dynamic";
import { ReactElement, useEffect, useState } from "react";
// import SEO from "src/common/components/SEO";

function HomePage() {
  const [isWindow, setIsWindow] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsWindow(true);
    }
  }, []);
  return (
    <>
      <SEO
        title="Trang chủ"
        description={"Bán nến thơm"}
        image={
          "https://ucarecdn.com/36152da1-0d6e-4016-8e88-509ca124451e/image.png"
        }
        url={process.env.NEXT_PUBLIC_METASTREAM}
      />
      {isWindow ? <Home /> : <SpinnerLoading />}
    </>
  );
}

export default HomePage;
