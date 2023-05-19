import Video from "./Video";

function VideosHomePage({ videos }: any) {
  return (
    <div className="relative">
      <div className="flex gap-8 overflow-scroll">
        {videos?.map((video: any, index: number) => {
          return <Video key={index} video={video} />;
        })}
      </div>
    </div>
  );
}
export default VideosHomePage;
