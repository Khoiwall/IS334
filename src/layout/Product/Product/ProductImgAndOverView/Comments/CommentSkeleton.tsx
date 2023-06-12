import { Skeleton } from "@mui/material";
export default function CommentSkeleton() {
  return (
    <div className="flex skeleton-video pb-3">
      <Skeleton width={40} height={40} sx={{ borderRadius: "9999px" }} />
      <div className="px-4">
        <div className="text-14 font-bold">
          <Skeleton width={93} height={10} />
        </div>
        <div className="pt-1">
          <Skeleton width={300} height={50} />
        </div>
      </div>
    </div>
  );
}
