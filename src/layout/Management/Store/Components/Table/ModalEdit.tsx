import { ProductAPI } from "@/api";
import ButtonComponent from "@/components/ButtonComponent";
import ModalNew from "@/components/ModalNew";
import { useState } from "react";
import toast from "react-hot-toast";
import FormInputProduct from "./FormInputProduct";

function ModalEdit({ setOpenModal, product, setProduct, setItems }: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const editProduct = async (e: any) => {
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
    const toastId = toast.loading("Đang sửa...");
    const option = {
      _id: product?._id,
      name: e?.target?.nameProduct?.value,
      bio: product?.bio,
      images: product?.images,
      price: parseFloat(e?.target?.price?.value),
      discount: parseFloat(product?.discount || 0),
    };
    const response = await ProductAPI.updateProduct(product?._id, option);
    if (response && (response?.status === 200 || response?.status === 201)) {
      toast.success("Sửa Thành Công!", { id: toastId });
      setItems((prev: any) => {
        return prev?.map((_product: any) => {
          return _product?._id === product?._id ? option : _product;
        });
      });
      setOpenModal(false);
    } else {
      toast.error("Sửa Thất bại!", { id: toastId });
    }
    setIsLoading(false);
  };
  return (
    <ModalNew
      title="Add Products"
      setIsOpen={isLoading ? () => {} : setOpenModal}
      minWidth="min-w-[800px] max-w-[1008px] w-full"
      maxHeight="min-h-[662px] max-h-[662px]"
    >
      <form
        onSubmit={isLoading ? () => {} : editProduct}
        className="flex flex-col flex-1 overflow-auto"
      >
        <div className="flex flex-col flex-1 overflow-auto">
          <FormInputProduct product={product} setProduct={setProduct} />
        </div>
        <div className="border-t border-solid border-[#303030] flex justify-end py-[18px] px-9">
          <ButtonComponent
            title="CANCEL"
            onClick={() => {
              isLoading ? () => {} : setOpenModal(false);
            }}
            padding="px-6 py-[15px]"
            classNameText="text-14"
            className="bg-transparent hover:opacity-70"
          />
          <ButtonComponent
            title="Chỉnh sửa sản phẩm"
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
export default ModalEdit;
