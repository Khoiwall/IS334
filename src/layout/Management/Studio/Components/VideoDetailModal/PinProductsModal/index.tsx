import { Modal } from "@mui/material";
import ButtonComponent from "@/components/ButtonComponent";
import { IconFilter, IconSearchSm, IconX } from "@/components/Icon/Generate";
import { useState } from "react";
import TabSection from "@/components/TabSection";
import ProductsTab from "./ProductsTab";
import ModalNew from "@/components/ModalNew";

interface Props {
  setIsOpen: any;
  video: any;
  setVideo: any;
}
export default function PinProductsModal({
  setIsOpen,
  video,
  setVideo,
}: Props) {
  // const [NFTs, setNFTs] = useState<CurrentNFT[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [currentTab, setCurrentTab] = useState<number>(0);
  return (
    <ModalNew
      title={currentTab === 0 ? "Pin Products" : "Pin NFTs"}
      setIsOpen={setIsOpen}
      minHeight="min-h-[724px]"
      maxHeight="max-h-[724px]"
      minWidth="min-w-[1008px]"
      maxWidth="max-w-[1008px]"
    >
      <TabSection
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
        tabs={[`Products (${products.length})`]}
        paddingX="px-9"
        paddingB="pb-6"
      />
      <ProductsTab products={products} setProducts={setProducts} />
      <div className="flex justify-end pr-[60px] py-[25px] border-solid border border-t-[#303030] border-x-transparent border-b-transparent">
        <ButtonComponent
          padding="py-[15px] px-6"
          onClick={() => {
            setIsOpen(false);
          }}
          title="CANCEL"
          classNameText="text-14 font-normal"
          className=" bg-transparent hover:opacity-60 rounded-[12px]"
        />
        {products.filter((p) => p.isSelected).length > 0 ? (
          <ButtonComponent
            padding="py-[15px] px-6"
            onClick={() => {
              let vid: any = { ...video };
              let productsTmp = products
                .filter((p) => p.isSelected)
                .map((t) => {
                  return { _id: t._id, images: t.images };
                });

              setVideo({ ...vid, products: productsTmp });
              setIsOpen(false);
            }}
            title="PIN PRODUCTS/NFTS"
            classNameText="text-14 font-semibold"
            className=" hover:bg-[#27B12E] bg-primary text-black rounded-lg"
          />
        ) : (
          <ButtonComponent
            padding="py-[15px] px-6"
            title="PIN PRODUCTS/NFTS"
            classNameText="text-14 font-semibold"
            className=" cursor-default w-[168px] bg-[#322E35] text-white opacity-40 rounded-lg"
          />
        )}
      </div>
    </ModalNew>
  );
}
