"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StarRating } from "@/components/ui/star-rating";
import { SectionHeading } from "@/components/ui/section-heading";
import { SupplementFacts } from "@/components/product/supplement-facts";
import { ProductCard } from "@/components/product/product-card";
import { useCartStore } from "@/lib/store/cart-store";
import type { Product } from "@/lib/data/products";

const textGradientClass = {
  blue: "text-gradient-blue",
  red: "text-gradient-red",
  gold: "text-gradient-gold",
};

const glowClass = {
  blue: "glow-blue",
  red: "glow-red",
  gold: "glow-gold",
};

export function ProductDetailClient({
  product,
  relatedProducts,
}: {
  product: Product;
  relatedProducts: Product[];
}) {
  const [selectedFlavor, setSelectedFlavor] = useState(product.flavors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [isSubscription, setIsSubscription] = useState(false);
  const [frequency, setFrequency] = useState("4");
  const addItem = useCartStore((s) => s.addItem);

  const currentPrice = isSubscription
    ? selectedSize.price * (1 - product.subscriptionDiscount / 100)
    : selectedSize.price;

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      flavor: selectedFlavor.name,
      size: selectedSize.label,
      price: selectedSize.price,
      image: product.images[0],
      isSubscription,
      subscriptionDiscount: isSubscription ? product.subscriptionDiscount : 0,
    });
  };

  return (
    <div className="pt-24 pb-20">
      {/* Main product section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className={`relative aspect-square bg-bg-secondary rounded-sm border border-border overflow-hidden flex items-center justify-center ${glowClass[product.accentColor]}`}>
              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `radial-gradient(ellipse at center, ${product.accentColor === "blue" ? "rgba(74,126,184,0.3)" : "rgba(139,58,58,0.3)"}, transparent 70%)`,
                }}
              />

              {/* Product display */}
              <div className="relative z-10 animate-float">
                <div className="w-64 h-64 bg-bg-card rounded-full flex items-center justify-center border border-border/50">
                  <div className="text-center">
                    <p className="heading-display text-xs text-text-secondary mb-2">Aeterion</p>
                    <p className={`text-3xl font-bold ${textGradientClass[product.accentColor]}`}>
                      {product.name}
                    </p>
                    <p className="text-xs text-text-secondary mt-2">
                      {product.benefits.join(" · ")}
                    </p>
                    <p className="text-[10px] text-text-secondary/50 mt-1">
                      {selectedFlavor.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.badges.map((badge) => (
                <Badge key={badge} variant={product.accentColor === "blue" ? "blue" : "red"}>
                  {badge}
                </Badge>
              ))}
              {product.isStimFree && <Badge variant="gold">Stim-Free</Badge>}
            </div>

            {/* Name & tagline */}
            <h1 className={`text-4xl md:text-5xl font-bold mb-2 ${textGradientClass[product.accentColor]}`}>
              {product.name}
            </h1>
            <p className="text-text-secondary text-sm mb-4 italic">{product.tagline}</p>

            {/* Benefits */}
            <div className="flex gap-2 mb-4">
              {product.benefits.map((b) => (
                <Badge key={b} variant="default">
                  {b}
                </Badge>
              ))}
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <StarRating rating={product.averageRating} size="md" />
              <span className="text-sm text-text-secondary">
                {product.averageRating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Key stats */}
            <div className="flex gap-4 mb-6 text-xs text-text-secondary">
              {product.caffeineContent && (
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
                  {product.caffeineContent}mg Caffeine
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
                {product.scoopSize} Scoop
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
                {product.servings} Servings
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-text-secondary leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Flavor selector */}
            <div className="mb-6">
              <label className="text-xs uppercase tracking-wider text-text-secondary mb-3 block">
                Flavor
              </label>
              <div className="flex gap-3">
                {product.flavors.map((flavor) => (
                  <button
                    key={flavor.id}
                    onClick={() => flavor.inStock && setSelectedFlavor(flavor)}
                    disabled={!flavor.inStock}
                    className={`px-4 py-2.5 text-xs border rounded-sm transition-all duration-300 ${
                      selectedFlavor.id === flavor.id
                        ? "border-accent-gold bg-accent-gold/10 text-accent-gold"
                        : flavor.inStock
                          ? "border-border text-text-secondary hover:border-border-light"
                          : "border-border/50 text-text-secondary/30 cursor-not-allowed line-through"
                    }`}
                  >
                    <span
                      className="inline-block w-2 h-2 rounded-full mr-2"
                      style={{ backgroundColor: flavor.color }}
                    />
                    {flavor.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div className="mb-6">
              <label className="text-xs uppercase tracking-wider text-text-secondary mb-3 block">
                Size
              </label>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2.5 text-xs border rounded-sm transition-all duration-300 ${
                      selectedSize.id === size.id
                        ? "border-accent-gold bg-accent-gold/10 text-accent-gold"
                        : "border-border text-text-secondary hover:border-border-light"
                    }`}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Subscribe & Save */}
            {product.subscriptionEligible && (
              <div className="mb-8 p-4 bg-bg-card border border-border rounded-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsSubscription(!isSubscription)}
                      className={`relative w-10 h-5 rounded-full transition-colors duration-300 ${
                        isSubscription ? "bg-accent-gold" : "bg-border"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${
                          isSubscription ? "translate-x-5" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                    <span className="text-sm text-text-primary">Subscribe & Save</span>
                  </div>
                  <Badge variant="gold">Save {product.subscriptionDiscount}%</Badge>
                </div>
                {isSubscription && (
                  <div className="mt-3">
                    <label className="text-xs text-text-secondary block mb-2">
                      Delivery every
                    </label>
                    <select
                      value={frequency}
                      onChange={(e) => setFrequency(e.target.value)}
                      className="bg-bg-primary border border-border rounded-sm px-3 py-2 text-xs text-text-primary w-full focus:outline-none focus:border-accent-gold/50"
                    >
                      <option value="2">2 weeks</option>
                      <option value="4">4 weeks</option>
                      <option value="6">6 weeks</option>
                      <option value="8">8 weeks</option>
                    </select>
                  </div>
                )}
              </div>
            )}

            {/* Price & Add to Cart */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-text-primary">
                  ${currentPrice.toFixed(2)}
                </span>
                {(isSubscription || selectedSize.compareAtPrice) && (
                  <span className="text-lg text-text-secondary line-through">
                    ${(selectedSize.compareAtPrice || selectedSize.price).toFixed(2)}
                  </span>
                )}
              </div>
            </div>

            <Button size="lg" className="w-full mb-3" onClick={handleAddToCart}>
              Add to Cart
            </Button>

            <p className="text-[11px] text-text-secondary text-center">
              Free shipping on orders over $75 &middot; 30-day money-back guarantee
            </p>
          </motion.div>
        </div>
      </section>

      {/* Supplement Facts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <SectionHeading title="Supplement Facts" subtitle="Full transparency. Every ingredient clinically dosed." />
        <SupplementFacts product={product} />
      </section>

      {/* Reviews */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <SectionHeading
          title="Customer Reviews"
          subtitle={`${product.averageRating} out of 5 based on ${product.reviewCount} reviews`}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {product.reviews.map((review) => (
            <div key={review.id} className="bg-bg-card border border-border rounded-sm p-5">
              <div className="flex items-center justify-between mb-2">
                <StarRating rating={review.rating} size="sm" />
                {review.verified && (
                  <span className="text-[10px] text-accent-gold uppercase tracking-wider">
                    Verified Purchase
                  </span>
                )}
              </div>
              <h4 className="text-sm font-medium text-text-primary mb-2">{review.title}</h4>
              <p className="text-xs text-text-secondary leading-relaxed mb-3">{review.body}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-primary">{review.author}</span>
                <span className="text-[10px] text-text-secondary">
                  {new Date(review.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stack With / Related Products */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <SectionHeading
            title="Complete Your Stack"
            subtitle="These products pair perfectly together"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
