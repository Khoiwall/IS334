import { useContext } from "react";
import { useSelector } from "react-redux";

interface Props {
  className: string;
  sign: {
    title: string;
    isRequire: boolean;
    type: string;
    placeholder: string;
    name: string;
    data?: {
      _id: string;
      title: string;
    }[];
  };
  defaultValue?: string;
  backGroundInput?: string;
}
function Select({ className, sign, defaultValue, backGroundInput }: Props) {
  const { name, placeholder, data } = sign;
  return (
    <div
      className={`${
        backGroundInput ? backGroundInput : "bg-[#1B161E]"
      } py-4 px-5 rounded-xl`}
    >
      <select
        placeholder={placeholder}
        className={className}
        id={name}
        name={name}
      >
        {data?.map((_data) => {
          return (
            <option
              key={_data?._id}
              selected={defaultValue === _data?._id}
              value={_data?._id}
            >
              {_data?.title}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default Select;
