import ImageAndGifNew from "@/components/ImageAndGifNew";

interface Prop {
  banner: any;
}

function HeaderProductBanner({ banner }: Prop) {
  return (
    <div className="flex items-center gap-5">
      <ImageAndGifNew
        src={banner?.user_id?.avatar || ""}
        alt={banner?.user_id?.userName || ""}
        className="relative pt-16 pl-16 rounded-full"
        rounded=" rounded-full"
      />
      <div>
        <div className="mt-1.5">
          <p className="max-w-[255px] truncate block text-[12px] leading-[15px] text-white/70">
            {banner?.description}
          </p>
        </div>
      </div>
    </div>
  );
}
export default HeaderProductBanner;
