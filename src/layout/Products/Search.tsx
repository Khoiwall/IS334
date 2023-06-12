import { useState } from "react";

export default function Search({ products, setDisplayProducts }: any) {
  return (
    <div className="flex px-6 pt-4 gap-2">
      <div>Tìm kiếm: </div>
      <input
        className="flex-1 p-1 rounded-lg "
        onChange={(e) => {
          setDisplayProducts(
            products.filter((product: any) =>
              product.title.includes(e.target.value)
            )
          );
        }}
        placeholder="Vd: Nến hương"
      />
    </div>
  );
}
