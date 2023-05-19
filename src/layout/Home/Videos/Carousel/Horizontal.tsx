import { ReactNode, useRef, Children, useState, useEffect } from "react";
interface Props {
  children: ReactNode;
  scrollWidth: number;
}
export default function Horizontal({ children, scrollWidth }: Props) {
  const scrollRef = useRef<any>(null);

  const [currentProduct, setCurrentProduct] = useState<number>(0);
  useEffect(() => {
    scrollRef.current.scrollLeft = currentProduct * scrollWidth;
  }, [currentProduct]);
  return (
    <div className="relative ">
      <div className="flex overflow-hidden scroll-smooth gap-[5px] px-4" ref={scrollRef}>
        {children}
      </div>
      <div className="flex justify-center gap-[5px] mt-[15px]">
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
    </div>
  );
}
