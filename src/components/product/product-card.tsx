"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StarRating } from "@/components/ui/star-rating";
import { useCartStore } from "@/lib/store/cart-store";
import type { Product } from "@/lib/data/products";

const textGradientClass = {
  blue: "text-gradient-blue",
  red: "text-gradient-red",
  gold: "text-gradient-gold",
};

const glowColors = {
  blue: "group-hover:shadow-[0_0_30px_rgba(74,126,184,0.15)]",
  red: "group-hover:shadow-[0_0_30px_rgba(139,58,58,0.15)]",
  gold: "group-hover:shadow-[0_0_30px_rgba(201,169,98,0.15)]",
};

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div
      className={`group relative bg-bg-card border border-border rounded-sm overflow-hidden transition-all duration-500 hover:border-border-light ${glowColors[product.accentColor]}`}
    >
      {/* Badges */}
      {product.badges.length > 0 && (
        <div className="absolute top-3 left-3 z-10 flex gap-2">
          {product.badges.map((badge) => (
            <Badge key={badge} variant={product.accentColor === "blue" ? "blue" : "red"}>
              {badge}
            </Badge>
          ))}
        </div>
      )}

      {/* Image */}
      <Link href={`/product/${product.slug}`}>
        <div className="relative h-56 flex items-center justify-center overflow-hidden bg-bg-primary/50">
          <div className="group-hover:scale-105 transition-transform duration-500">
            <div className="w-32 h-32 bg-bg-secondary rounded-full flex items-center justify-center border border-border/50">
              <div className="text-center">
                <p className="heading-display text-[8px] text-text-secondary">Aeterion</p>
                <p className={`text-sm font-bold ${textGradientClass[product.accentColor]}`}>
                  {product.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <Link href={`/product/${product.slug}`}>
          <h3 className={`text-base font-bold mb-0.5 ${textGradientClass[product.accentColor]}`}>
            {product.name}
          </h3>
        </Link>
        <p className="text-[11px] text-text-secondary mb-2">{product.tagline}</p>

        <div className="flex items-center gap-1 mb-3">
          <StarRating rating={product.averageRating} size="sm" />
          <span className="text-[11px] text-text-secondary">({product.reviewCount})</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-base font-semibold text-text-primary">${product.price.toFixed(2)}</span>
            {product.compareAtPrice && (
              <span className="text-xs text-text-secondary line-through">
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
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
