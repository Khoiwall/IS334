import ConverICon from "../ConvertIcon";
import { IconStar, IconStarHalfLeft } from "../Icon/Different";

interface Props {
  widthStar?: string;
  heightStar?: string;
  widthStarM?: string;
  heightStarM?: string;
  rating: number;
  fill?: string;
  fillDefault?: string;
  onClick?: (star: number) => void;
  classRatingText?: string;
}

function RatingStar({
  widthStar,
  heightStar,
  widthStarM,
  heightStarM,
  fill,
  rating,
  fillDefault,
  onClick,
  classRatingText,
}: Props) {
  return (
    <div className="relative">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5]?.map((_star) => {
          return (
            <div key={_star} className="relative">
              {_star - rating < 1 && _star - rating > 0 ? (
                <div className="absolute top-0 left-0 w-1/2 h-full">
                  <ConverICon
                    Icon={IconStarHalfLeft}
                    width={(parseInt(widthStar || "24") / 2)?.toString()}
                    fill={fill ?? "#F98600"}
                    height={heightStar}
                  />
                </div>
              ) : null}
              <ConverICon
                Icon={IconStar}
                width={widthStar}
                height={heightStar}
                fill={_star <= rating ? fill ?? "#F98600" : fillDefault}
              />
            </div>
          );
        })}
        <span className={`${classRatingText ?? "text-sm"} font-semibold ml-[10px]`}>
          {rating}
        </span>
      </div>
    </div>
  );
}
export default RatingStar;
