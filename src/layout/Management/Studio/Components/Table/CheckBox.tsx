import { useEffect, useState } from "react";
import ConverICon from "@/components/ConvertIcon";
import { IconCheck } from "@/components/Icon/Generate";
interface Props {
  isChecked?: boolean;
  onChecked: any;
}
export default function CheckBox({ onChecked, isChecked }: Props) {
  const [isCurrentChecked, setIsCurrentChecked] = useState<boolean>(
    isChecked ?? false
  );
  return (
    <button
      className={`border-solid border-[1.5px] rounded-[4px] w-5 h-5 ${
        isChecked
          ? "bg-primary border-primary"
          : "bg-transparent border-[#303030]"
      }`}
      onClick={() => {
        onChecked();
        setIsCurrentChecked(!isCurrentChecked);
      }}
    >
      {isChecked && (
        <ConverICon Icon={IconCheck} width="14" height="14" stroke="#1B161E" />
      )}
    </button>
  );
}
