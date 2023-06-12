import { useState } from "react";

import ImageAndGifNew from "@/components/ImageAndGifNew";
import { Player } from "video-react";

interface Props {
  video: any;
}
export default function PreviewSection({ video }: Props) {
  return (
    <div className="w-[384px] absolute right-0 top-0 px-10 py-8">
      <h3 className="font-['Poppins'] font-bold text-20 mb-[24px]">Preview</h3>

      <div className="rounded-2xl overflow-hidden">
        <Player
          playsInline
          height={256}
          poster="/assets/poster.png"
          src={
            video.url ?? "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          }
        />
      </div>
      {/* <div className="my-8">
        <div className="text-[16px] font-bold mb-3">Video Link</div>
        <div className="text-[16px] font-semibold cursor-pointer opacity-70">
          {video.link ?? "https://metastream.be//12345"}
        </div>
      </div> */}
      <div className="mb-10 mt-8">
        <div className="text-16 font-bold mb-3">Video File</div>
        <div className="text-16 font-semibold cursor-pointer  opacity-70">
          {video.fileName ?? "Top_5_Gadgets_2023.mp4"}
        </div>
      </div>
      <h3 className="font-['Poppins'] font-bold text-20 mb-[24px]">Products</h3>
      <div className="flex gap-6">
        {video.products.slice(0, 3).map((product: any) => (
          <ImageAndGifNew
            key={product?._id}
            src={product.images[0]}
            alt={product?.images[0]}
            className="relative pt-[62px] pl-[62px] bg-white rounded-xl"
            rounded="rounded-xl"
            objectCover="object-contain"
          />
        ))}
        {video.products.length > 3 && (
          <div className="text-xs bg-[#303030] rounded-xl min-w-[62px] min-h-[62px] justify-center flex items-center">
            {video.products.length - 3}+
          </div>
        )}
      </div>
    </div>
  );
}
