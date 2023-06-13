import { useState } from "react";

export default function Search({ products, setDisplayProducts }: any) {
  return (
    <div className="flex items-center px-6 gap-2">
      <div>Tìm kiếm: </div>
      <input
        className="flex-1 p-1 rounded-lg bg-[#1B161E]"
        onChange={(e) => {
          setDisplayProducts(
            products.filter((product: any) =>
              product.name.includes(e.target.value)
            )
          );
        }}
        placeholder="Vd: Nến hương"
      />
    </div>
  );
}
