import toast from "react-hot-toast";

interface Props {
  settings?: boolean;
  setImage?: any;
  isProfile?: boolean;
  editImage?: (url: File) => void;
  id: string;
}

function UploadImage({ settings, setImage, isProfile, editImage, id }: Props) {
  return (
    <input
      className="hidden"
      type="file"
      id={id}
      name={id}
      accept="image/png, image/jpeg, image/webp"
      onChange={(e) => {
        if (settings) {
          if (e.target.files && e.target.files[0]) {
            const size = e.target.files[0].size / 1024 / 1024;
            size > 10
              ? toast.error("Must be JPEG, PNG, or GIF and cannot exceed 10MB.")
              : setImage
              ? setImage(e.target.files[0])
              : null;
          }
        }
        if (isProfile) {
          if (e.target.files && e.target.files[0]) {
            const size = e.target.files[0].size / 1024 / 1024;
            size > 10
              ? toast.error("Must be JPEG, PNG, or GIF and cannot exceed 10MB.")
              : editImage
              ? editImage(e.target.files[0])
              : null;
          }
        }
      }}
    />
  );
}
export default UploadImage;
