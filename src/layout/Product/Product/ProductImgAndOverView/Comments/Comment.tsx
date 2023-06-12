import ButtonComponent from "@/components/ButtonComponent";
import { IconDislike, IconLike } from "@/components/Icon/Different";
import timeSince from "@/utils/convetTimeAgo";
import { useEffect, useState } from "react";
// import VideoAPI from "src/services/api-v1.5/VideoAPI";
import Link from "next/link";
import ImageAndGifNew from "@/components/ImageAndGifNew";

interface Props {
  comment: any;
}

export default function Comment({ comment }: Props) {
  return (
    <div className="flex pb-3">
      <div>
        <ImageAndGifNew
          src={
            comment?.user_id?.avatar ??
            "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/186314173/original/c7a05e1fb4b75e83256acbb4ce90025e3be0513a/draw-cute-chibi-icon-avatar-and-profile-pic-3926.png"
          }
          alt={comment?.user_id?.name}
          className="min-w-[36px] min-h-[36px]  relative"
          rounded="rounded-full"
        />
        <div></div>
      </div>
      <div className="px-3">
        <div className="text-14 font-bold">
          {comment?.user_id?.name ?? "James Gouse "}{" "}
          <span className="text-12 text-[#AAAAAA] ml-2">
            {timeSince(new Date(comment.createdAt).getTime()) ?? "8 hours ago"}
          </span>
        </div>
        <div className="pt-1">
          {comment?.content ??
            "The Samsung Galaxy A14 is the best selling Android phone in the World...here's why. The first 100 people to use code mrwhosetheboss at the link below will get 60% off of Incogni:"}
        </div>
      </div>
    </div>
  );
}
