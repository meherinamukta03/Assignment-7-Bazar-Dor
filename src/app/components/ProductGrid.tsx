"use client";

import { useState } from "react";
import ProductCard, { Product } from "./ProductCard";

type ProductGridProps = {
    products: Product[];
};

const ProductGrid = ({ products }: ProductGridProps) => {

    const [sort, setSort] = useState("default");

    const sortedProducts = [...products].sort((a, b) => {

        if (sort === "low-high") {
            return a.today - b.today;
        }

        if (sort === "high-low") {
            return b.today - a.today;
        }

        return 0;
    });

    return (
        <>
            {/* FILTER / SORT BAR */}
            <div className="bg-white rounded-2xl px-4 sm:px-6 py-3 border border-gray-100 shadow-sm flex items-center justify-end">

                <div className="flex items-center gap-2">

                    <span className="text-xs sm:text-sm text-gray-600 font-medium">
                        সাজান
                    </span>

                    <select value={sort} onChange={(e) => setSort(e.target.value)} className="bg-white border border-gray-200 text-gray-800 text-xs sm:text-sm rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-green-500 cursor-pointer">

                        <option value="default">
                            ডিফল্ট
                        </option>

                        <option value="low-high">
                            দাম: কম থেকে বেশি
                        </option>

                        <option value="high-low">
                            দাম: বেশি থেকে কম
                        </option>

                    </select>

                </div>

            </div>

            {/* TOTAL PRODUCTS COUNT */}
            <p className="text-xs sm:text-sm text-gray-500 font-medium px-1">
                মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
            </p>

            {/* PRODUCTS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">

                {sortedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}

            </div>
        </>
    );
};

export default ProductGrid;