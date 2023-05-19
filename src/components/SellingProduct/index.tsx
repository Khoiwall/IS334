import Horizontal from "./Horizontal";
import Large from "./Large";
import Medium from "./Medium";
import Small from "./Small";

interface Props {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
    discount: number;
    rating: number;
  };
  sizeType?: string;
}
export default function SellingProduct({ product, sizeType }: Props) {
  switch (sizeType) {
    case "small":
      return <Small product={product} />;
    case "medium":
      return <Medium product={product} />;
    case "horizontal":
      return <Horizontal product={product} />;
    default:
      return <Large product={product} />;
  }
}
