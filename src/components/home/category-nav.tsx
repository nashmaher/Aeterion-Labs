"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";

const categories = [
  { name: "Pre-Workout", slug: "pre-workout", description: "Energy, Focus & Performance", color: "#4a7eb8" },
  { name: "Protein", slug: "protein", description: "Recovery & Muscle Growth", color: "#c9a962" },
  { name: "Aminos", slug: "aminos", description: "Recovery & Endurance", color: "#5a8ec8" },
  { name: "Health", slug: "health", description: "Wellness & Vitality", color: "#4a9e6e" },
  { name: "Apparel", slug: "apparel", description: "Rep the Lab", color: "#a0a0b0" },
];

export function CategoryNav() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading title="Shop by Category" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category, idx) => (
          <motion.div
            key={category.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Link
              href={`/shop/${category.slug}`}
              className="group block relative bg-bg-card border border-border rounded-sm p-6 text-center overflow-hidden hover:border-border-light transition-all duration-300"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at center, ${category.color}10, transparent 70%)`,
                }}
              />
              <div className="relative z-10">
                <div
                  className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center border"
                  style={{ borderColor: `${category.color}40`, background: `${category.color}10` }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
                </div>
                <h3 className="text-sm font-medium text-text-primary uppercase tracking-wider mb-1">
                  {category.name}
                </h3>
                <p className="text-[11px] text-text-secondary">{category.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
