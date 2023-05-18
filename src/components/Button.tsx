import { FLEX } from "@/contants/FLEX";
import Link from "next/link";
import ConvertICon from "./ConvertIcon";
import SpinLoadingButton from "./SpinLoadingButton";

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
  title: string;
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
}

function Button({
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
}: Props) {
  return (
    <>
      {isLink ? (
        <Link href={url || ""} className={`${FLEX["center"]}  no-underline`}>
          <div
            className={`${className} ${FLEX["center"]} overflow-hidden whitespace-nowrap h-[30px] text-sm font-bold`}
          >
            <div
              className={`${FLEX["center"]} ${
                padding ? padding : "px-2.5"
              } h-full gap-1.5`}
            >
              {icon && Icon ? (
                <ConvertICon
                  Icon={Icon}
                  width={infoIcon?.width}
                  height={infoIcon?.height}
                  fill={infoIcon?.fill}
                  heightM={infoIcon?.heightM}
                  widthM={infoIcon?.widthM}
                  stroke={infoIcon?.stroke}
                />
              ) : null}
              <span className={`${FLEX["inline_center_"]} grow-0`}>
                {title}
              </span>
            </div>
          </div>
        </Link>
      ) : (
        <button
          onClick={() => {
            onClick ? onClick() : null;
          }}
          type={(type as "button" | "submit") || "button"}
          className={`${className} ${FLEX["center"]} overflow-hidden whitespace-nowrap h-[30px] text-sm font-semibold cursor-pointer`}
        >
          <div
            className={`${FLEX["center"]} ${
              padding ? padding : "px-2.5"
            }  h-full gap-1.5`}
          >
            {isLoading ? (
              <div className={FLEX["center_"]}>
                <SpinLoadingButton
                  fill={"fill-black"}
                  width={"w-6"}
                  height={"h-6"}
                />
              </div>
            ) : (
              <>
                {icon && Icon ? (
                  <ConvertICon
                    Icon={Icon}
                    width={infoIcon?.width}
                    height={infoIcon?.height}
                    fill={infoIcon?.fill}
                    heightM={infoIcon?.heightM}
                    widthM={infoIcon?.widthM}
                    stroke={infoIcon?.stroke}
                  />
                ) : null}
                <span className={`${FLEX["inline_center_"]} grow-0`}>
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
export default Button;
