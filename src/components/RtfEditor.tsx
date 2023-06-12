import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SpinLoading from "./SpinLoading";
import "react-quill/dist/quill.bubble.css";

const Quill = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <SpinLoading fill={"fill-primary"} width={"w-5"} height={"h-5"} />,
});
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
];
interface Props {
  value: any;
  onValueChange?: any;
  isReadOnly?: boolean;
}
export default function RtfEditor({ value, onValueChange, isReadOnly }: Props) {
  const [currentValue, setCurrentValue] = useState(value);
  useEffect(() => {
    if (onValueChange) onValueChange(currentValue);
  }, [currentValue]);
  if (typeof window !== "undefined") {
    return isReadOnly ? (
      <Quill theme="bubble" value={value} readOnly={true} />
    ) : (
      <Quill theme="snow" value={currentValue} onChange={setCurrentValue} />
    );
  } else return <></>;
}
