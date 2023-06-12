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
    min?: number;
    max?: number;
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
  const [userName, setUserName] = useState<string>(defaultValue || "");
  const { name, placeholder, type, isRequire, min, max } = sign;

  const onChangeInput = (e: any) => {
    onChange ? onChange(e?.target?.value, name) : null;
    name === "userName" || name === "name"
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
        value={name === "userName" || name === "name" ? userName : undefined}
        onChange={onChangeInput}
        disabled={disable ? true : false}
        min={min || undefined}
        max={max || undefined}
      />
    </div>
  );
}
export default Input;
