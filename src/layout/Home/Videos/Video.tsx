import ImageAndGifNew from "@/components/ImageAndGifNew";
import Carousel from "./Carousel";
import SellingProduct from "@/components/SellingProduct";

interface Props {
  video: {
    title: string;
    image: string;
    createdAt: string;
    duration: string;
    views: number;
    isSellingProduct: Boolean;
    sellingNFTs: any;
    sellingProducts: any;
  };
  isLarge?: boolean;
}
export default function Video({ video, isLarge }: Props) {
  if (isLarge) {
    return (
      <div className="pr-[36px]">
        <div className="flex min-w-[734px] w-[734px] h-[350px] border border-solid border-[#252027] rounded-[30px] p-4 ">
          <div className="w-[496px] h-[315px] relative">
            <ImageAndGifNew
              src="data:image/jpeg;base64,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USmiFSS2cgEGwCka2PMk/CVOJPPDibVT8fB7VyKqXLERErJxERAEREAREQBERAEREAREQBERAE3eFcPOIfKDZRqzfuj8zsB+U01UkgAXJIAA3JPITofZ3hQpqqbn3nPVunkNh/meeSulfU9MUdVfQ+P2UouoymvSIAsadQj5GYf/ABmqn+3jcSP47OPk8toEZZMstLtsu6EU+rwbFkG9ehWHStRVdvvZL/ObWC4viqbqmIw6unN6FTOV6HJq5HxllIPIkHqJVu0XZ8V7MUZXUWFTD5b2G2akxAsPut6TDU5O1pfwZ7z4LTSqK/ukHw5jzntpymvUxuENxVNRF2Jz5lG1yj2dR4jTznrFduMa6hVNJLDV1S7HxOe6jytJr+zbb9jTRssy+S89pnoCg/61c0zoyqSGboqkEHe0rXZGotVq/wCr0Ew6IEClQWe7Zvedrk6CUnH8WxFa/t6zVFup1Cgd29rBQAPePLXToJ1jsnw79XwyIQM7d97dW1t6LYekrjj/AHfDp+WzR31VteCr8d4Q5fMzFmOgYn4AyskW0M65xPCh0M5hxaj7Oq46nN/Nr9bzfDTftZNnhL3I0oiJSTCIiAIiIAiIgCIiAIiIAiIgCIiAIiIBs8PxQpVEcrny308xa48Re86DwbtBhnAXPkY8n7vwOx+M5rE86xqj0jI48HakYHUEHyInucbwnEKtL/bdl8Abj+U6SdwvbOunvqr+RKn53HynhWCl4KZ5EvydHM8kSoUe3KH30dfRWH1B+U207ZUDu9vNKn4AzRxS+DdZZfyRP6SOJZVTDIO+1nY8woJCgeZBv5eMoLgWsdhqZbe0K0cZWNX9bRLqqgeyqGwHjfreRtLhmGXLnxJcBgWC0agzAG5W5PPaXYqUQl8/oeVUm97NDiHCnpIntFKBkVxe3utsT08pbOxPaksUw2JPeFlp1P3raBGPXax57HXf52g43hsWgVlq3W9igQGx3U5jsdOXKQ2DxlGgytSoFnXVWqvex65VUCYuuuNUu465l9mdWqagznHa+jlqI3VWH8pv/wDUxYntRian2wg+4v4teRNeu9Q5qjs56sSfheeGPE5rbNcuaanSMUREoJhERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREA//9k="
              alt="123"
              className="relative pt-[315px] pr-[496px]"
              rounded="rounded-[16px] "
            />
            <div className="absolute bottom-[18px] right-[18px] w-[58px] h-[28px] bg-opacity-[0.24] bg-black rounded-[7px] align-middle text-center font-medium text-[16px] leading-[28px]">
              {video.duration ?? "20:12"}
            </div>
          </div>
          <div className="max-w-[190px] ml-4">
            <Carousel
              scrollWidth={200}
              sizeOfItems={video.sellingProducts.length}
              type="vertical"
              isLarge={true}
            >
              {video.sellingProducts.map((product: any, index: number) => (
                <SellingProduct
                  key={index}
                  product={product}
                  sizeType="medium"
                />
              ))}
            </Carousel>
          </div>
        </div>
        <div className="text-xl ml-3 mt-[14px] mb-[5px] leading-5 font-semibold">
          {video.title}
        </div>
        <div className="text-[#8F8F8F] ml-3 font-semibold text-xs mb-[7px]">
          {video.views} views . {video.createdAt} ago
        </div>
      </div>
    );
  } else
    return (
      <div>
        <div className="flex min-w-[454px] w-[454px] h-[223px] border border-solid border-[#252027] rounded-[20px] p-4">
          <div className="w-[300px] h-[190px] relative">
            <ImageAndGifNew
              src={video?.image}
              alt="123"
              className="relative pt-[190px] pr-[300px]"
              rounded="rounded-[20px] "
            />
            <div className="absolute bottom-[10px] right-[10px] w-[42px] h-[24px] bg-opacity-[0.24] bg-black rounded-[7px] align-middle text-center font-medium text-[10px] leading-[24px]">
              {video.duration ?? "20:12"}
            </div>
          </div>
          <div className="max-w-[110px] ml-3 my">
            <Carousel
              scrollWidth={120}
              sizeOfItems={video.sellingProducts.length}
              type="vertical"
            >
              {video.sellingProducts.map((product: any, index: number) => (
                <SellingProduct
                  product={product}
                  key={index}
                  sizeType="small"
                />
              ))}
            </Carousel>
          </div>
        </div>
        <div className="text-[16px] ml-3 mt-4 mb-[5px] leading-5 font-semibold">
          {video.title}
        </div>
        <div className="text-[#8F8F8F] ml-3 font-semibold text-xs">
          {video.views} views {video.createdAt} ago
        </div>
      </div>
    );
}
