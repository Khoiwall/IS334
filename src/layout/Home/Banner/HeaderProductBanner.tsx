import ImageAndGifNew from "@/components/ImageAndGifNew";

interface Prop {
  banner: any;
}

function HeaderProductBanner({ banner }: Prop) {
  return (
    <div className="flex items-center gap-5">
      <ImageAndGifNew
        src={
          "https://ucarecdn.com/b6f3c929-f963-4ad0-b024-e831a4990021/-/preview/200x200/-/quality/smart/-/format/auto/"
        }
        alt={"logo"}
        className="relative pt-16 pl-16 rounded-full"
        rounded=" rounded-full"
      />
      <div>
        <div className="mt-1.5">
          <p
            dangerouslySetInnerHTML={{ __html: banner?.bio }}
            className="max-w-[255px] truncate block text-[12px] leading-[15px] text-white/70 mint-ellipsis"
          ></p>
        </div>
      </div>
    </div>
  );
}
export default HeaderProductBanner;
