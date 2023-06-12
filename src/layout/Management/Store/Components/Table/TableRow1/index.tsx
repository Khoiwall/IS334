import CheckBox from "../CheckBox";
// import { ProductRye } from "src/app/types";
import ConverICon from "@/components/ConvertIcon";
import ImageAndGifNew from "@/components/ImageAndGifNew";

interface Props {
  item: any;
  onSelected: any;
  onMouseOver: any;
  onMouseOut: any;
}
export default function TableRow({
  item,
  onSelected,
  onMouseOver,
  onMouseOut,
}: Props) {
  return (
    <div
      className={`flex items-center py-[26px] pl-10 pr-5 h-[108px] 
      border-b border-solid border-[#303030] w-full ${
        item.isHover && "bg-[#1B161E]"
      }`}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onClick={onSelected}
    >
      <CheckBox onChecked={() => {}} isChecked={item.isSelected} />
      <ImageAndGifNew
        src={
          item.images[0] ??
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        }
        alt={item.bio}
        className={
          "h-[56px] min-w-[56px] max-w-[56px] w-[56px] rounded-xl ml-8 mr-4 flex-1 bg-white p-1 relative"
        }
        objectCover="object-contain"
        rounded="rounded-xl"
      />
      <span className="text-14 font-semibold mint-ellipsis-one hover:underline max-w-[250px]">
        {item.name}
      </span>
      {/* <a
        target="_blank"
        className="text-14 font-semibold mint-ellipsis-one hover:underline max-w-[250px]"
        // href={item.url}
      >
        {item.name}
      </a> */}
    </div>
  );
}
