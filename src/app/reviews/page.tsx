"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { StarRating } from "@/components/ui/star-rating";
import { products } from "@/lib/data/products";

export default function ReviewsPage() {
  const allReviews = products.flatMap((p) =>
    p.reviews.map((r) => ({ ...r, productName: p.name }))
  );
  const avgRating = allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length;

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Customer Reviews" subtitle="Real feedback from real athletes" />

        <div className="text-center mb-12">
          <span className="text-5xl font-light text-text-primary">{avgRating.toFixed(1)}</span>
          <div className="flex justify-center mt-2">
            <StarRating rating={avgRating} size="lg" />
          </div>
          <p className="text-sm text-text-secondary mt-2">Based on {allReviews.length} reviews</p>
        </div>

        <div className="space-y-4">
          {allReviews.map((review) => (
            <div key={review.id} className="bg-bg-card border border-border rounded-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <StarRating rating={review.rating} size="sm" />
                  <span className="text-xs text-text-secondary">{review.productName}</span>
                </div>
                {review.verified && (
                  <span className="text-[10px] text-accent-gold uppercase tracking-wider">Verified Purchase</span>
                )}
              </div>
              <h4 className="text-sm font-medium text-text-primary mb-1">{review.title}</h4>
              <p className="text-xs text-text-secondary leading-relaxed mb-3">{review.body}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-primary">{review.author}</span>
                <span className="text-[10px] text-text-secondary">
                  {new Date(review.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
