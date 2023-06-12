import LayOutInput from "@/components/Input";
import RtfEditor from "@/components/RtfEditor";

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
        defaultValue={product?.name}
        className={"bg-[#110B14] outline-none w-full"}
        backGroundInput="bg-[#110B14]"
        padding="p-3"
        textSize="text-sm"
      />
      <div>
        <label
          className={`mb-1.5 text-sm font-bold text-white required flex justify-start`}
        >
          Mô tả sản phẩm
        </label>
        <RtfEditor
          value={product?.bio || ""}
          onValueChange={(e: any) => {
            setProduct({ ...product, bio: e });
          }}
        />
      </div>
      <LayOutInput
        sign={{
          title: "Giá tiền",
          isRequire: true,
          type: "number",
          placeholder: "Giá tiền",
          name: "price",
        }}
        defaultValue={product?.price}
        className={"bg-[#110B14] outline-none w-full"}
        backGroundInput="bg-[#110B14]"
        padding="p-3"
        textSize="text-sm"
      />
    </div>
  );
}
export default FormInputProduct;
