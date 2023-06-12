import SEO from "@/components/SEO";
import SpinnerLoading from "@/components/SpinnerLoadding";
import Home from "@/layout/Home";
import dynamic from "next/dynamic";
import { ReactElement, useEffect, useState } from "react";
// import SEO from "@/components/SEO";

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
          "https://i0.wp.com/thescentnote.com/wp-content/uploads/2023/02/nen-thom-trang-tri-2.jpg?fit=1024%2C742&ssl=1"
        }
        url={process.env.NEXT_PUBLIC_METASTREAM}
      />
      {isWindow ? <Home /> : <SpinnerLoading />}
    </>
  );
}

export default HomePage;
