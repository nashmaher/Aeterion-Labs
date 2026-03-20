"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const categories = ["All", "Training", "Nutrition", "Supplementation", "Lifestyle"];

const posts = [
  {
    slug: "citrulline-vs-arginine",
    title: "L-Citrulline vs L-Arginine: Which is Better for Pumps?",
    excerpt: "The science behind why we chose L-Citrulline over L-Arginine in our formulas, and why dosage matters more than most brands admit.",
    category: "Supplementation",
    date: "2025-12-10",
    readTime: "5 min",
  },
  {
    slug: "pre-workout-timing",
    title: "When to Take Pre-Workout for Maximum Effect",
    excerpt: "The optimal timing window for pre-workout supplementation based on ingredient absorption rates and individual factors.",
    category: "Training",
    readTime: "4 min",
    date: "2025-11-28",
  },
  {
    slug: "protein-timing-myth",
    title: "The Protein Timing Myth: What Science Actually Says",
    excerpt: "Breaking down the anabolic window myth and what the latest research tells us about protein timing for muscle growth.",
    category: "Nutrition",
    readTime: "6 min",
    date: "2025-11-15",
  },
  {
    slug: "sleep-performance",
    title: "Sleep: The Most Underrated Performance Enhancer",
    excerpt: "How sleep quality directly impacts your training, recovery, and supplement effectiveness. Plus practical tips for better sleep.",
    category: "Lifestyle",
    readTime: "7 min",
    date: "2025-11-01",
  },
  {
    slug: "beta-alanine-guide",
    title: "Beta-Alanine: The Complete Guide",
    excerpt: "Everything you need to know about beta-alanine — from the tingling sensation to the endurance benefits, backed by research.",
    category: "Supplementation",
    readTime: "8 min",
    date: "2025-10-20",
  },
  {
    slug: "progressive-overload",
    title: "Progressive Overload: The Only Principle That Matters",
    excerpt: "Why progressive overload is the foundation of all training progress, and how to apply it regardless of your training style.",
    category: "Training",
    readTime: "5 min",
    date: "2025-10-05",
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered = posts.filter(
    (p) => selectedCategory === "All" || p.category === selectedCategory
  );

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="The Lab"
          subtitle="Science-backed insights on training, nutrition, and supplementation"
        />

        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap justify-center mb-12">
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

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post, idx) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-bg-card border border-border rounded-sm overflow-hidden hover:border-border-light transition-all duration-300"
              >
                <div className="h-40 bg-bg-secondary flex items-center justify-center">
                  <span className="heading-display text-xs text-text-secondary/30">Article</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="gold">{post.category}</Badge>
                    <span className="text-[10px] text-text-secondary">{post.readTime} read</span>
                  </div>
                  <h3 className="text-sm font-medium text-text-primary mb-2 group-hover:text-accent-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <p className="text-[10px] text-text-secondary/50 mt-3">
                    {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
