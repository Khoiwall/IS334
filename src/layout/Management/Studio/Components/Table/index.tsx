import { useEffect, useState } from "react";
import TableMobile from "./Mobile";
import TablePc from "./Pc";

interface Props {
  items: any;
  setItems: any;
  onUploadVideo: any;
  isLoading: boolean;
}
export default function Table({
  items,
  setItems,
  onUploadVideo,
  isLoading,
}: Props) {
  const [isSelectAll, setIsSelectAll] = useState<boolean>(false);
  useEffect(() => {
    let j = 0;
    items.map((item: any, index: number) => {
      !item.isSelected ? setIsSelectAll(false) : j++;
    });
    if (j === items?.length) {
      setIsSelectAll(true);
    }
  }, [items]);
  return (
    <>
      <TablePc
        isSelectAll={isSelectAll}
        isLoading={isLoading}
        items={items}
        setIsSelectAll={setIsSelectAll}
        setItems={setItems}
        onUploadVideo={onUploadVideo}
      />
      <TableMobile
        isSelectAll={isSelectAll}
        isLoading={isLoading}
        items={items}
        setIsSelectAll={setIsSelectAll}
        setItems={setItems}
        onUploadVideo={onUploadVideo}
      />
    </>
  );
}
