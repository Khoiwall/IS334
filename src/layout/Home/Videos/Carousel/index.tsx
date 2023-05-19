import { ReactNode, useRef, Children, useState, useEffect } from "react";
import Horizontal from "./Horizontal";
import Vertical from "./Vertical";
interface Props {
  children: ReactNode;
  scrollWidth: number;
  sizeOfItems: number;
  type?: string;
  isLarge?: boolean;
}
export default function Carousel({
  children,
  scrollWidth,
  sizeOfItems,
  type,
  isLarge,
}: Props) {
  switch (type) {
    case "horizontal":
      return <Horizontal scrollWidth={scrollWidth}>{children}</Horizontal>;
    default:
      return (
        <Vertical scrollWidth={scrollWidth} sizeOfItems={sizeOfItems} isLarge={isLarge}>
          {children}
        </Vertical>
      );
  }
}
