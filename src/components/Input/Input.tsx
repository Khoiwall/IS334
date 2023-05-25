import { useContext, useState } from "react";
import slugify from "slugify";

interface Props {
  className: string;
  onChange: (text: string, name: string) => void;
  sign: {
    title: string;
    isRequire: boolean;
    type: string;
    placeholder: string;
    name: string;
  };
  defaultValue?: string;
  disable?: boolean;
  backGroundInput?: string;
  padding?: string;
}

function Input({
  sign,
  className,
  onChange,
  defaultValue,
  disable,
  backGroundInput,
  padding,
}: Props) {
  const [userName, setUserName] = useState<string>("");
  const { name, placeholder, type, isRequire } = sign;
  const onChangeInput = (e: any) => {
    onChange ? onChange(e?.target?.value, name) : null;
    name === "userName"
      ? setUserName(
          slugify(e?.target?.value, {
            lower: true,
            replacement: "",
            locale: "vi",
          })
        )
      : null;
  };
  return (
    <div
      className={`${backGroundInput ? backGroundInput : "bg-[#1B161E]"} ${
        padding ? padding : "py-4 px-5"
      } rounded-xl`}
    >
      <input
        placeholder={placeholder}
        className={className}
        id={name}
        name={name}
        type={type}
        required={isRequire}
        defaultValue={defaultValue}
        // value={name === "userName" ? userName : undefined}
        onChange={onChangeInput}
        disabled={disable ? true : false}
      />
    </div>
  );
}
export default Input;
