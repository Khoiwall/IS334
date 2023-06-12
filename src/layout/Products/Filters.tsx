import { PRODUCTS } from "@/contants/DATABANNER";
import { useEffect, useState } from "react";

export default function Filters({ products, setDisplayProducts }: any) {
  const priceFilters = [
    {
      min: 0,
      max: 100000000,
      displayName: "Không",
      value: true,
    },
    {
      min: 50000,
      max: 100000,
      displayName: "50.000đ - 100.000đ",
      value: false,
    },
    {
      min: 100000,
      max: 150000,
      displayName: "100.000đ - 150.000đ",
      value: false,
    },
    {
      min: 150000,
      max: 200000,
      displayName: "150.000đ - 200.000đ",
      value: false,
    },
    {
      min: 200000,
      max: 250000,
      displayName: "200.000đ - 250.000đ",
      value: false,
    },
  ];
  return (
    <div className="w-[200px] border-r border-solid border-slate-700">
      <div className="text-xl font-semibold ">Bộ lọc</div>
      <div>Theo giá khoảng</div>
      {priceFilters.map((filter, i) => (
        <div key={i} className="flex gap-2 p-2">
          <input
            id={`priceFilter${i}`}
            type="radio"
            name="priceFilters"
            onClick={() => {
              const newFilters = [...priceFilters];
              setDisplayProducts(
                products.filter((product: any) => {
                  return (
                    newFilters[i].min <= product.price &&
                    product.price <= newFilters[i].max
                  );
                })
              );
            }}
          />
          <label htmlFor={`priceFilter${i}`}>{filter.displayName}</label>
        </div>
      ))}
    </div>
  );
}
