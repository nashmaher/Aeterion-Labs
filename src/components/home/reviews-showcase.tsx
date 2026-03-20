"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { StarRating } from "@/components/ui/star-rating";
import { motion } from "framer-motion";

const showcaseReviews = [
  {
    author: "Marcus T.",
    rating: 5,
    product: "ASCENSION",
    text: "Best pre-workout I've ever used. The focus and energy are unmatched. No jitters, no crash.",
    verified: true,
  },
  {
    author: "Amanda L.",
    rating: 5,
    product: "WARPATH",
    text: "Insane pumps without any stimulants. Perfect for my evening workouts. Arms look crazy on arm day.",
    verified: true,
  },
  {
    author: "Ryan P.",
    rating: 5,
    product: "DOMINUS",
    text: "Perfect everyday pre-workout. Balanced energy, no overstimulation. Use it 5 days a week.",
    verified: true,
  },
  {
    author: "Sarah K.",
    rating: 5,
    product: "ASCENSION",
    text: "Love the full transparency. I can see every ingredient and know it's clinically dosed.",
    verified: true,
  },
];

export function ReviewsShowcase() {
  return (
    <section className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Athletes Say"
          subtitle="Real reviews from real athletes"
        />

        {/* Aggregate stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl font-light text-text-primary">4.8</span>
            <div>
              <StarRating rating={4.8} size="lg" />
              <p className="text-xs text-text-secondary mt-1">Based on 290+ reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseReviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-bg-card border border-border rounded-sm p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <StarRating rating={review.rating} size="sm" />
                {review.verified && (
                  <span className="text-[10px] text-accent-gold uppercase tracking-wider">Verified</span>
                )}
              </div>
              <p className="text-xs text-text-secondary leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-primary font-medium">{review.author}</span>
                <span className="text-[10px] text-text-secondary">{review.product}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
