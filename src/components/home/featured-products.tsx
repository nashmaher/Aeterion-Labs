"use client";

import { products } from "@/lib/data/products";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/star-rating";
import { useCartStore } from "@/lib/store/cart-store";
import Link from "next/link";
import { motion } from "framer-motion";

const accentGradients = {
  blue: "from-accent-blue/20 to-transparent",
  red: "from-accent-red/20 to-transparent",
  gold: "from-accent-gold/20 to-transparent",
};

const glowColors = {
  blue: "group-hover:shadow-[0_0_40px_rgba(74,126,184,0.2)]",
  red: "group-hover:shadow-[0_0_40px_rgba(139,58,58,0.2)]",
  gold: "group-hover:shadow-[0_0_40px_rgba(201,169,98,0.2)]",
};

const textGradientClass = {
  blue: "text-gradient-blue",
  red: "text-gradient-red",
  gold: "text-gradient-gold",
};

export function FeaturedProducts() {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        title="Featured Products"
        subtitle="Precision-engineered formulas for peak performance"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="group"
          >
            <div
              className={`relative bg-bg-card border border-border rounded-sm overflow-hidden transition-all duration-500 ${glowColors[product.accentColor]} hover:border-border-light`}
            >
              {/* Badges */}
              <div className="absolute top-3 left-3 z-10 flex gap-2">
                {product.badges.map((badge) => (
                  <Badge key={badge} variant={product.accentColor === "blue" ? "blue" : "red"}>
                    {badge}
                  </Badge>
                ))}
              </div>

              {/* Image area with glow */}
              <Link href={`/product/${product.slug}`}>
                <div className="relative h-72 flex items-center justify-center overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${accentGradients[product.accentColor]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div className="relative z-10 group-hover:scale-105 transition-transform duration-500">
                    <div className="w-44 h-44 bg-bg-secondary rounded-full flex items-center justify-center border border-border/50">
                      <div className="text-center">
                        <p className="heading-display text-[10px] text-text-secondary mb-1">Aeterion</p>
                        <p className={`text-lg font-bold ${textGradientClass[product.accentColor]}`}>
                          {product.name}
                        </p>
                        <p className="text-[10px] text-text-secondary mt-1">
                          {product.benefits.join(" · ")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Info */}
              <div className="p-5">
                <Link href={`/product/${product.slug}`}>
                  <h3 className={`text-xl font-bold mb-1 ${textGradientClass[product.accentColor]}`}>
                    {product.name}
                  </h3>
                </Link>
                <p className="text-xs text-text-secondary mb-3">{product.tagline}</p>

                <div className="flex items-center gap-2 mb-3">
                  {product.benefits.map((b) => (
                    <Badge key={b} variant="default">
                      {b}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <StarRating rating={product.averageRating} size="sm" />
                  <span className="text-xs text-text-secondary">({product.reviewCount})</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.compareAtPrice && (
                      <span className="text-sm text-text-secondary line-through">
                        ${product.compareAtPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <Button
                    size="sm"
                    onClick={() =>
                      addItem({
                        productId: product.id,
                        slug: product.slug,
                        name: product.name,
                        flavor: product.flavors[0].name,
                        size: product.sizes[0].label,
                        price: product.price,
                        image: product.images[0],
                        isSubscription: false,
                        subscriptionDiscount: 0,
                      })
                    }
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
