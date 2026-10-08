import React from "react";

export type Product = {
  id: string | number;
  nameBn: string;
  unit: string;
  today: number;
  image?: string;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
};

interface ProductCardProps {
  product: Product;
}

const toBnNum = (num: string | number): string => {
  const bnNums = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return String(num).replace(/\d/g, (d) => bnNums[Number(d)]);
};

export default function ProductCard({ product }: ProductCardProps) {

  const changeType =
    product.change.dir === "up"
      ? "up"
      : product.change.dir === "down"
        ? "down"
        : "neutral";

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">

      <div className="flex items-start gap-3">

        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg shrink-0">
          <span>{product.image || "🛒"}</span>
        </div>

        <div>
          <h2 className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
            {product.nameBn}
          </h2>

          <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">
            প্রতি {product.unit}
          </p>
        </div>

      </div>

      <div className="mt-5 flex items-end justify-between">

        <div>

          <span className="text-[10px] sm:text-[11px] text-gray-500 block mb-0.5">
            আজকের দাম
          </span>

          <div className="flex items-baseline gap-1">

            <span className="text-lg sm:text-xl font-extrabold text-gray-900">
              {toBnNum(product.today)}
            </span>

            <span className="text-xs sm:text-sm font-semibold text-gray-800">
              টাকা
            </span>

          </div>

        </div>

        {changeType === "up" && (
          <div className="flex items-center gap-1 bg-red-50 text-red-600 px-2 py-1 rounded-md text-[10px] sm:text-xs font-bold">
            <span>▲</span>
            <span>{toBnNum(product.change.pct)}%</span>
          </div>
        )}

        {changeType === "down" && (
          <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-2 py-1 rounded-md text-[10px] sm:text-xs font-bold">
            <span>▼</span>
            <span>{toBnNum(Math.abs(product.change.pct))}%</span>
          </div>
        )}

        {changeType === "neutral" && (
          <div className="flex items-center gap-1 bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-[10px] sm:text-xs font-bold">
            <span>—</span>
            <span>{toBnNum(product.change.pct)}%</span>
          </div>
        )}

      </div>

    </div>
  );
}