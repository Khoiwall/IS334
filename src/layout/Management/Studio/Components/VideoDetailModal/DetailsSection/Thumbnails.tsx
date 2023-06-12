import { useState } from "react";
//
import ButtonComponent from "@/components/ButtonComponent";
import ConverICon from "@/components/ConvertIcon";
import { IconUntitled } from "@/components/Icon/Different";

interface Props {
  video: any;
  setVideo: any;
}

export default function Thumbnails({ video, setVideo }: Props) {
  return (
    <div className="flex gap-[26px] overflow-y-auto shrink-0 w-full">
      <button
        onClick={() => {
          var input = document.createElement("input");
          input.type = "file";
          input.multiple = true;
          input.accept = "image/*";
          input.onchange = (e: any) => {
            let thumbnails: string[] = [];
            for (var i = 0; i < e.target.files.length; i++) {
              thumbnails.push(window.URL.createObjectURL(e.target.files[i]));
            }
            setVideo({
              ...video,
              images: [...(video?.images || []), ...thumbnails],
              currentImage:
                (video?.thumbnails || [])?.length === 0
                  ? 0
                  : video.currentImage,
            });
          };
          input.click();
        }}
        className="border-dashed border-[1.5px] rounded-xl border-white/20 min-w-[179px] h-[113px] bg-transparent pt-4 cursor-pointer"
      >
        <ConverICon Icon={IconUntitled} />
        <div className="opacity-60 mt-4">Upload Thumbnail</div>
      </button>
      {video.images?.map((thumbnail: string, i: number) => (
        <img
          key={thumbnail}
          src={thumbnail}
          width={179}
          height={113}
          onClick={() => {
            setVideo({ ...video, currentImage: i });
          }}
          className={`rounded-xl w-[179px] h-[113px] bg-transparent  min-w-[179px]
          cursor-pointer object-cover hover:border-[4px] hover:border-primary hover:border-solid ${
            video.currentImage === i
              ? "border-[4px] border-primary border-solid"
              : "border-white/20 border-dashed border-[1.5px] "
          }`}
        ></img>
      ))}
    </div>
  );
}
