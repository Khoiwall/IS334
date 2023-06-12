import { useEffect, useRef, useState } from "react";
import ImageAndGifNew from "@/components/ImageAndGifNew";
import SpinLoading from "@/components/SpinLoading";
// import VideoAPI from "src/services/api-v1.5/VideoAPI";
// import { createComment } from "src/stores/reducers/VideoViewRedux/createComment";
// import { getComments } from "src/stores/reducers/VideoViewRedux/getComments";
import Comment from "./Comment";
import CommentSkeleton from "./CommentSkeleton";
import { useAppSelector } from "@/hook/reduxHook";
import { ProductAPI } from "@/api";

export default function Comments({ product }: any) {
  const [isCommentLoading, setIsCommentLoadding] = useState<boolean>(true);

  const divRef = useRef<HTMLDivElement>(null);
  const [isFetchingMoreComments, setIsFetchingMoreComments] =
    useState<boolean>(false);
  const [isFetchMore, setIsFetchMore] = useState<boolean>(true);
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<any>([]);
  const [isSendingComment, setIsSendingComment] = useState<boolean>(false);

  const { user } = useAppSelector((state) => state?.authRedux);
  // const { comments, videoDetail } = useAppSelector((state) => state?.videoView);
  // const dispatch = useAppDispatch();
  const getComments = async () => {
    const response = await ProductAPI.getComments(product?._id);
    if (response && response?.data?.status === "Success") {
      if (response?.data?.data?.length < 10) {
        setIsFetchMore(false);
      }
      setComments(response?.data?.data);
    }
    setIsCommentLoadding(false);
  };
  useEffect(() => {
    const handleScroll = async () => {
      const { scrollTop, clientHeight, scrollHeight } = divRef.current!;
      if (scrollTop + clientHeight === scrollHeight) {
        if (isFetchMore) {
          setIsFetchingMoreComments(true);
          const response = await ProductAPI.getComments(
            product?._id,
            product?.length
          );
          if (response && response?.data?.status === "Success") {
            if (response?.data?.data?.length < 10) {
              setIsFetchMore(false);
            }
            setComments((prev: []) => [...prev, ...response?.data?.data]);
          }
          setIsFetchingMoreComments(false);
        }
      }
    };
    const divElement = divRef.current!;
    divElement.addEventListener("scroll", handleScroll);
    return () => {
      divElement.removeEventListener("scroll", handleScroll);
    };
  }, [comments, isFetchMore]);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (!comment) return;
    setIsSendingComment(true);
    const response = await ProductAPI.comment(product?._id, comment);
    if (response && response?.data?.status === "Success") {
      setComments((prev: []) => [response?.data?.data, ...prev]);
    }
    setComment("");
    setIsSendingComment(false);
  };
  useEffect(() => {
    getComments();
  }, []);
  return (
    <div className="px-10 py-4 overflow-y-auto h-[250px]" ref={divRef}>
      {user && (
        <div className="flex mb-5">
          <ImageAndGifNew
            src={
              user?.avatar ??
              "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/186314173/original/c7a05e1fb4b75e83256acbb4ce90025e3be0513a/draw-cute-chibi-icon-avatar-and-profile-pic-3926.png"
            }
            alt={user?.name}
            className="min-w-[36px] min-h-[36px] relative"
            rounded="rounded-full"
          />
          {isSendingComment ? (
            <div className="flex-1 flex justify-center">
              <SpinLoading fill="fill-primary" width={"w-6"} height={"h-6"} />
            </div>
          ) : (
            // onSubmit={handleSubmit}
            <form onSubmit={handleSubmit} className="flex-1">
              <input
                className="w-full rounded-[10px] text-14 py-[8.5px] inline border border-[#252027] border-solid bg-transparent ml-3 px-5"
                placeholder="Add a public comment..."
                onChange={(e) => setComment(e.target.value)}
                value={comment}
              />
            </form>
          )}
        </div>
      )}
      {isCommentLoading
        ? [1, 2, 3].map((_) => <CommentSkeleton key={_} />)
        : comments.map((comment: any, i: number) => (
            <Comment comment={comment} key={comment?._id} />
          ))}
      {isFetchingMoreComments &&
        [1, 2, 3].map((_) => <CommentSkeleton key={_} />)}
    </div>
  );
}
