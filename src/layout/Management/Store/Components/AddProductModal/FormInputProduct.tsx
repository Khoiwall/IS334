import LayOutInput from "@/components/Input";
import RtfEditor from "@/components/RtfEditor";
import Thumbnails from "./Thumbnails";

interface Props {
  product: any;
  setProduct: any;
}

function FormInputProduct({ product, setProduct }: any) {
  return (
    <div className="relative p-5 flex-1 flex flex-col gap-5">
      <LayOutInput
        sign={{
          title: "Tên sản phẩm",
          isRequire: true,
          type: "text",
          placeholder: "Tên sản phẩm",
          name: "nameProduct",
        }}
        className={"bg-[#110B14] outline-none w-full"}
        backGroundInput="bg-[#110B14]"
        padding="p-3"
        textSize="text-sm"
      />
      <div>
        <label className={`mb-1.5 text-xlfont-bold text-white required`}>
          Mô tả sản phẩm
        </label>
        <RtfEditor
          value={product?.bio || ""}
          onValueChange={(e: any) => {
            setProduct({ ...product, bio: e });
          }}
        />
      </div>
      <div>
        <label className={`mb-1.5 text-xlfont-bold text-white required`}>
          Hình ảnh
        </label>
        <Thumbnails product={product} setProduct={setProduct} />
      </div>
      <LayOutInput
        sign={{
          title: "Giá tiền",
          isRequire: true,
          type: "number",
          placeholder: "Giá tiền",
          name: "price",
        }}
        className={"bg-[#110B14] outline-none w-full"}
        backGroundInput="bg-[#110B14]"
        padding="p-3"
        textSize="text-sm"
      />
      <LayOutInput
        sign={{
          title: "Giảm giá",
          isRequire: false,
          type: "number",
          placeholder: "Giảm giá",
          name: "discount",
          min: 0,
          max: 100,
        }}
        className={"bg-[#110B14] outline-none w-full"}
        backGroundInput="bg-[#110B14]"
        padding="p-3"
        textSize="text-sm"
      />
    </div>
  );
}
export default FormInputProduct;
