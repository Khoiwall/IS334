import { FLEX } from "@/contants/FLEX";
import ConvertICon from "./ConvertIcon";

interface Props {
  isIcon: boolean;
  Icon?: any;
  onChange?: (text: string) => void;
  className?: string;
  infoIcon: {
    width?: string;
    widthM?: string;
    height?: string;
    heightM?: string;
    fill?: string;
    stroke?: string;
  };
  placeholder: string;
}
function Search({
  isIcon,
  Icon,
  onChange,
  className,
  infoIcon,
  placeholder,
}: Props) {
  const { width, height, fill, stroke, heightM, widthM } = infoIcon;
  return (
    <div
      className={`${
        isIcon ? `${FLEX["center_"]} pr-4` : "px-4"
      } bg-[#110B14] py-2 rounded-xl lg:flex hidden`}
    >
      {isIcon ? (
        <div className="px-4">
          <ConvertICon
            Icon={Icon}
            width={width}
            widthM={widthM}
            height={height}
            heightM={heightM}
            fill={fill}
            stroke={stroke}
          />
        </div>
      ) : null}
      <input
        placeholder={placeholder}
        className={className}
        id="search"
        name="search"
        onChange={(e) => {
          onChange ? onChange(e?.target?.value) : null;
        }}
      />
    </div>
  );
}
export default Search;
