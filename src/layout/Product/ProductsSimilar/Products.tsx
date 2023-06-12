import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  products: any[];
}

function Products({ products }: Props) {
  const { userId, id } = useRouter().query;
  return (
    <ul className="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-2 gap-2 md:gap-5">
      {products?.map((product) => {
        return id !== product?._id ? (
          <li className="flex w-full" key={product?._id}>
            <Link
              className="w-full h-full flex flex-col"
              href={`/detail/ms/${userId}/${product?._id}`}
            >
              <div className="rounded-xl h-full bg-white">
                <div className="overflow-hidden pt-[100%] relative rounded-xl">
                  <div className="absolute w-full h-full top-0 left-0">
                    <img
                      className="border-0 transition scale-100 hover:scale-110 h-[100%] w-[100%] rounded-xl opacity-1 object-contain	"
                      src={product?.images[0]?.url}
                      alt={product?.title}
                    />
                  </div>
                </div>
              </div>
              <div className="py-3 flex flex-col">
                <div className="mint-ellipsis">
                  <b className="text-base lowercase text-white hover:text-[#4AE052]">
                    {product?.title}
                  </b>
                </div>
                <span className="block text-base lowercase text-white">
                  {product?.price?.displayValue}
                </span>
              </div>
            </Link>
          </li>
        ) : null;
      })}
    </ul>
  );
}
export default Products;
