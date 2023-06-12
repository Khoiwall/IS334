import { useState } from "react";
import ModalNew from "@/components/ModalNew";
import ButtonComponent from "@/components/ButtonComponent";
import { toast } from "react-hot-toast";
import FormInputProduct from "./FormInputProduct";
import { uploadImage } from "@/utils/uploadImage";
import { ProductAPI } from "@/api";

interface Props {
  setIsOpen: any;
  setItems: any;
}

export default function AddProductModal({ setIsOpen, setItems }: Props) {
  const [product, setProduct] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onAddProduct = async (e: any) => {
    e.preventDefault();
    if (!product?.bio) {
      toast.error("Vui lòng thêm mô tả sản phẩm");
      return;
    }
    if (product?.thumbnails?.length === 0) {
      toast.error("Vui lòng thêm ảnh");
      return;
    }
    setIsLoading(true);
    const toastId = toast.loading("Uploading...");
    let thumbnails: string[] = [];
    for (let i = 0; i < product?.thumbnails?.length; i++) {
      await uploadImage(
        product?.thumbnails[i],
        thumbnails,
        toast,
        setIsLoading
      );
    }
    const option = {
      name: e?.target?.nameProduct?.value,
      bio: product?.bio,
      images: thumbnails,
      price: parseFloat(e?.target?.price?.value),
      discount: parseFloat(e?.target?.discount?.value || 0),
    };
    const response = await ProductAPI.createProduct(option);
    if (response && (response?.status === 200 || response?.status === 201)) {
      setItems((prev: any) => [response?.data?.data, ...prev]);
      toast.success("Uploading Product Succeed!", { id: toastId });
      setIsOpen(false);
    } else {
      toast.error("Uploading Product Failed!", { id: toastId });
    }
    setIsLoading(false);
  };
  return (
    <ModalNew
      title="Add Products"
      setIsOpen={isLoading ? () => {} : setIsOpen}
      minWidth="min-w-[800px] max-w-[1008px] w-full"
      maxHeight="min-h-[662px] max-h-[662px]"
    >
      <form
        onSubmit={isLoading ? () => {} : onAddProduct}
        className="flex flex-col flex-1 overflow-auto"
      >
        <div className="flex flex-col flex-1 overflow-auto">
          <FormInputProduct product={product} setProduct={setProduct} />
        </div>
        <div className="border-t border-solid border-[#303030] flex justify-end py-[18px] px-9">
          <ButtonComponent
            title="CANCEL"
            onClick={() => {
              isLoading ? () => {} : setIsOpen(false);
            }}
            padding="px-6 py-[15px]"
            classNameText="text-14"
            className="bg-transparent hover:opacity-70"
          />
          <ButtonComponent
            title="ADD PRODUCTS"
            type="submit"
            padding="px-6 py-[15px]"
            classNameText="text-14"
            className="rounded-lg text-black bg-primary hover:opacity-70 "
          />
        </div>
      </form>
    </ModalNew>
  );
}
