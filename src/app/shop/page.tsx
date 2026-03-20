"use client";

import { useState } from "react";
import { getAllProducts, type Product } from "@/lib/data/products";
import { ProductCard } from "@/components/product/product-card";
import { SectionHeading } from "@/components/ui/section-heading";

const categories = ["All", "Pre-Workout", "Protein", "Aminos", "Health"];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const allProducts = getAllProducts();

  const filtered = allProducts.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory.toLowerCase().replace(" ", "-")
  );

  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case "price-asc": return a.price - b.price;
      case "price-desc": return b.price - a.price;
      case "rating": return b.averageRating - a.averageRating;
      default: return 0;
    }
  });

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Shop All"
          subtitle="Precision-engineered formulas for peak performance"
        />

        {/* Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider border rounded-sm transition-all duration-300 ${
                  selectedCategory === cat
                    ? "border-accent-gold bg-accent-gold/10 text-accent-gold"
                    : "border-border text-text-secondary hover:border-border-light"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-bg-card border border-border rounded-sm px-3 py-2 text-xs text-text-secondary focus:outline-none focus:border-accent-gold/50"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {sorted.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-secondary">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
