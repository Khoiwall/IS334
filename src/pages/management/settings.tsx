import SEO from "@/components/SEO";
import SpinnerLoading from "@/components/SpinnerLoadding";
import Settings from "@/layout/Management/Settings";
import { useEffect, useState } from "react";
// import SEO from "@/components/SEO";

function SettingsPage() {
  const [isWindow, setIsWindow] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsWindow(true);
    }
  }, []);
  return (
    <>
      <SEO
        title="Chỉnh sữa thông tin"
        description={`Tại Nefer Store, chúng tôi tự hào mang đến cho bạn những sản phẩm nến thơm, túi thơm tạo nên không gian sống chilling và thơm thoáng trong ngôi nhà của bạn. Với sự kết hợp tuyệt vời giữa thiết kế đẹp mắt và hương thơm dễ chịu, nến của chúng tôi sẽ mang đến cho bạn một trải nghiệm thư giãn độc đáo. Từ hương thơm dịu nhẹ của Lavender đến sự tươi mát của Gardenia, chúng tôi đảm bảo rằng bạn sẽ tìm thấy hương thơm hoàn hảo để tạo ra một không gian thư giãn và êm dịu. 
        Hãy trải nghiệm mua sắm tại Nefer Store ngay hôm nay và khám phá bộ sưu tập nến thơm, túi thơm và đặc biệt là nến xá xị. Chúng tôi tin rằng bạn sẽ tìm thấy những sản phẩm phù hợp với sở thích và tạo nên không gian thư giãn và thơm thoáng trong căn nhà của mình.`}
        image={
          "https://i0.wp.com/thescentnote.com/wp-content/uploads/2023/02/nen-thom-trang-tri-2.jpg?fit=1024%2C742&ssl=1"
        }
        url={process.env.NEXT_PUBLIC_METASTREAM}
      />
      {isWindow ? <Settings /> : <SpinnerLoading />}
    </>
  );
}

export default SettingsPage;
