"use client";

import { products } from "@/lib/data/products";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/product/product-card";
import { motion } from "framer-motion";

export function BestSellers() {
  return (
    <section className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Best Sellers"
          subtitle="Our most popular formulas chosen by athletes"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        >
          {[...products, ...products].slice(0, 6).map((product, idx) => (
            <div key={`${product.id}-${idx}`} className="min-w-[280px] snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
