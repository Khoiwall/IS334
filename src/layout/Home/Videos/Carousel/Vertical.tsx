import ButtonComponent from "@/components/ButtonComponent";
import { IconChervonLeft, IconChevronRight } from "@/components/Icon/Arrow";
import { ReactNode, useRef, Children, useState, useEffect } from "react";
interface Props {
  children: ReactNode;
  scrollWidth: number;
  sizeOfItems: number;
  isLarge?: boolean;
}
export default function Vertial({
  children,
  scrollWidth,
  sizeOfItems,
  isLarge,
}: Props) {
  const scrollRef = useRef<any>(null);
  const scrollLeft = () => {
    if (currentProduct > 0) setCurrentProduct(currentProduct - 1);
  };
  const scrollRight = () => {
    if (currentProduct + 1 < sizeOfItems) setCurrentProduct(currentProduct + 1);
  };

  const [currentProduct, setCurrentProduct] = useState<number>(0);
  useEffect(() => {
    scrollRef.current.scrollLeft = currentProduct * scrollWidth;
  }, [currentProduct]);
  if (isLarge)
    return (
      <div className="relative">
        <div
          className="flex overflow-hidden scroll-smooth gap-[10px]"
          ref={scrollRef}
        >
          {children}
        </div>
        <div className="flex justify-center gap-[5px] mr-2">
          {Children.map(children, (v, id) => (
            <button
              key={id}
              onClick={() => {
                console.log(id);
                setCurrentProduct(id);
              }}
              className={`bg-white rounded-full w-1 h-1 ${
                currentProduct == id ? "" : "opacity-50"
              }`}
            ></button>
          ))}
        </div>
        <div className="absolute left-[6px] top-[86px]">
          <ButtonComponent
            icon={true}
            infoIcon={{ stroke: "white", width: "18", height: "18" }}
            padding="p-[6px]"
            Icon={IconChervonLeft}
            onClick={scrollLeft}
            className="h-[18px] w-[18px] bg-black opacity-60 rounded-full"
          />
        </div>
        <div className="absolute right-[5px] top-[86px]">
          <ButtonComponent
            icon={true}
            Icon={IconChevronRight}
            infoIcon={{ stroke: "white", width: "18", height: "18" }}
            onClick={scrollRight}
            padding="p-[6px]"
            className="h-[18px] w-[18px] bg-black opacity-60 rounded-full"
          />
        </div>
      </div>
    );
  else
    return (
      <div className="relative ">
        <div
          className="flex overflow-hidden scroll-smooth gap-[10px]"
          ref={scrollRef}
        >
          {children}
        </div>
        <div className="flex justify-center gap-[5px] mr-2">
          {Children.map(children, (v, id) => (
            <button
              key={id}
              onClick={() => {
                console.log(id);
                setCurrentProduct(id);
              }}
              className={`bg-white rounded-full w-1 h-1 ${
                currentProduct == id ? "" : "opacity-50"
              }`}
            ></button>
          ))}
        </div>
        <div className="absolute left-[6px] top-12">
          <ButtonComponent
            icon={true}
            infoIcon={{ stroke: "white", width: "14", height: "14" }}
            padding="p-[6px]"
            Icon={IconChervonLeft}
            onClick={scrollLeft}
            className="h-4 w-4 bg-black opacity-60 rounded-full"
          />
        </div>
        <div className="absolute right-[5px] top-12">
          <ButtonComponent
            icon={true}
            Icon={IconChevronRight}
            infoIcon={{ stroke: "white", width: "14", height: "14" }}
            onClick={scrollRight}
            padding="p-[6px]"
            className="h-4 w-4 bg-black opacity-60 rounded-full"
          />
        </div>
      </div>
    );
}
