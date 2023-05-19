import Link from "next/link";
import ConverICon from "../ConvertIcon";
import SpinLoading from "../SpinLoading";

interface MyComponentProps {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
}

interface Props {
  isLink?: boolean;
  url?: string;
  onClick?: () => void;
  className?: string;
  title?: string;
  icon?: boolean;
  Icon?: React.FC<MyComponentProps>;
  infoIcon?: {
    width?: string;
    height?: string;
    fill?: string;
    stroke?: string;
    widthM?: string;
    heightM?: string;
  };
  padding?: string;
  type?: string;
  isLoading?: boolean;
  classNameText?: string;
  gapIconAndText?: string;
  onMouseOut?: () => void;
  onMouseOver?: () => void;
}

function ButtonComponent({
  type,
  isLink,
  url,
  onClick,
  className,
  title,
  icon,
  Icon,
  infoIcon,
  padding,
  isLoading,
  classNameText,
  gapIconAndText,
  onMouseOut,
  onMouseOver,
}: Props) {
  return (
    <>
      {isLink ? (
        <Link href={url || ""}>
          <a
            className={`w-full no-underline`}
            onMouseOut={() => {
              onMouseOut ? onMouseOut() : null;
            }}
            onMouseOver={() => {
              onMouseOver ? onMouseOver() : null;
            }}
          >
            <div
              className={`${
                className || "h-[30px]"
              } flex items-center justify-center overflow-hidden whitespace-nowrap  text-sm font-bold`}
            >
              <div
                className={`flex items-center justify-center ${
                  padding ? padding : "px-2.5"
                } h-full gap-1.5`}
              >
                {icon && Icon ? (
                  <ConverICon
                    Icon={Icon}
                    width={infoIcon?.width}
                    height={infoIcon?.height}
                    fill={infoIcon?.fill}
                    heightM={infoIcon?.heightM}
                    widthM={infoIcon?.widthM}
                    stroke={infoIcon?.stroke}
                  />
                ) : null}
                <span className={`inline-flex items-center grow-0 ${classNameText}`}>
                  {title}
                </span>
              </div>
            </div>
          </a>
        </Link>
      ) : (
        <button
          onClick={() => {
            onClick ? onClick() : null;
          }}
          onMouseOut={() => {
            onMouseOut ? onMouseOut() : null;
          }}
          onMouseOver={() => {
            onMouseOver ? onMouseOver() : null;
          }}
          type={(type as "button" | "submit") || "button"}
          className={`${
            className || "h-[30px]"
          } flex items-center justify-center overflow-hidden whitespace-nowrap  text-sm font-semibold cursor-pointer`}
        >
          <div
            className={`flex items-center justify-center ${
              padding ? padding : "px-2.5"
            }  h-full ${gapIconAndText || ""}`}
          >
            {isLoading ? (
              <div className="flex items-center">
                <SpinLoading fill={"fill-black"} width={"w-6"} height={"h-6"} />
              </div>
            ) : (
              <>
                {icon && Icon ? (
                  <ConverICon
                    Icon={Icon}
                    width={infoIcon?.width}
                    height={infoIcon?.height}
                    fill={infoIcon?.fill}
                    heightM={infoIcon?.heightM}
                    widthM={infoIcon?.widthM}
                    stroke={infoIcon?.stroke}
                  />
                ) : null}
                <span className={`inline-flex items-center grow-0 ${classNameText}`}>
                  {title}
                </span>
              </>
            )}
          </div>
        </button>
      )}
    </>
  );
}
export default ButtonComponent;
