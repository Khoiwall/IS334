import Image from "next/image";

interface Props {
  rounded?: string;
  src: string;
  alt: string;
  className: string;
  isVideo?: boolean;
  objectCover?: string;
}

function ImageAndGifNew({
  rounded,
  src,
  alt,
  className,
  objectCover,
  isVideo,
}: Props) {
  return (
    <div className={`${className} ${rounded} overflow-hidden`}>
      <div className={`absolute top-0 left-0 w-full h-full`}>
        {src?.split("/")[4] === "gif2video" || isVideo ? (
          <video
            className={` ${
              objectCover ? objectCover : "object-cover"
            } w-full h-full`}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
          >
            {/* <source src={src} type="video/webm" /> */}
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <img
            loading="lazy"
            src={src}
            alt={alt}
            className={`${
              objectCover ? objectCover : "object-cover"
            } w-full h-full`}
          />
        )}
      </div>
    </div>
  );
}
export default ImageAndGifNew;
