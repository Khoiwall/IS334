import { useState } from "react";
import ButtonComponent from "@/components/ButtonComponent";
import ConverICon from "@/components/ConvertIcon";
import { IconPenEdit } from "@/components/Icon/Different";
import { IconCheck } from "@/components/Icon/Generate";

interface Props {
  value: number;
  onChange: (e: number) => void;
}
export default function ListPriceEditor({ value: propValue, onChange }: Props) {
  const [value, setValue] = useState<number>(propValue);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const onEditListPrice = () => {
    onChange(value * 100);
    setIsEditable(false);
  };
  return (
    <div
      className={`rounded-lg overflow-auto flex justify-center h-11 w-[115px] ${
        isEditable && "bg-black"
      }`}
    >
      {isEditable ? (
        <>
          <input
            type="number"
            min="0"
            max="100"
            required
            readOnly={!isEditable}
            className="text-13 pl-[12px] pr-[8px] py-[15px] bg-transparent w-[70px] text-right "
            value={value ?? "12.99"}
            onChange={(e: any) => {
              setValue(e.target.value);
            }}
          />
          <ButtonComponent
            onClick={onEditListPrice}
            icon
            Icon={IconCheck}
            infoIcon={{ width: "18", height: "18" }}
            className="min-w-[48px] h-11 bg-primary hover:bg-opacity-70"
          />
        </>
      ) : (
        <>
          <div className="text-13 pl-[12px] pr-[8px] py-[15px] bg-transparent w-[70px] text-right ">
            {value + "%"}
          </div>
          <button
            onClick={() => {
              setIsEditable(true);
            }}
            className="self-start h-11 bg-transparent hover-svg-primary hover:bg-opacity-70 cursor-pointer"
          >
            <IconPenEdit />
          </button>
        </>
      )}
    </div>
  );
}
