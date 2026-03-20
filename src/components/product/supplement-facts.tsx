"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/data/products";

export function SupplementFacts({ product }: { product: Product }) {
  const [expandedIngredient, setExpandedIngredient] = useState<string | null>(null);

  const categories = Array.from(new Set(product.ingredients.map((i) => i.category).filter(Boolean)));

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-bg-card border border-border rounded-sm overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-border bg-bg-secondary">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">
                Supplement Facts
              </h3>
              <p className="text-[11px] text-text-secondary mt-1">
                Serving Size: 1 Scoop ({product.scoopSize}) &middot; Servings Per Container: {product.servings}
              </p>
            </div>
            <Badge variant="gold">Full Transparency</Badge>
          </div>
        </div>

        {/* Ingredients by category */}
        {categories.map((category) => (
          <div key={category}>
            <div className="px-4 py-2 bg-bg-secondary/50 border-b border-border">
              <span className="text-[11px] text-accent-gold uppercase tracking-wider font-medium">
                {category}
              </span>
            </div>
            {product.ingredients
              .filter((i) => i.category === category)
              .map((ingredient) => (
                <div key={ingredient.name} className="border-b border-border/50 last:border-0">
                  <button
                    onClick={() =>
                      setExpandedIngredient(
                        expandedIngredient === ingredient.name ? null : ingredient.name
                      )
                    }
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-text-primary">{ingredient.name}</span>
                      {ingredient.dosage + ingredient.unit === ingredient.clinicalDose.replace("-", "").replace(/\s/g, "") || parseInt(ingredient.dosage) >= parseInt(ingredient.clinicalDose.split("-").pop() || "0") ? (
                        <span className="text-[9px] bg-accent-gold/10 text-accent-gold px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
                          Clinical Dose
                        </span>
                      ) : null}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-text-primary">
                        {ingredient.dosage} {ingredient.unit}
                      </span>
                      <svg
                        className={`w-4 h-4 text-text-secondary transition-transform duration-200 ${
                          expandedIngredient === ingredient.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Expanded info */}
                  {expandedIngredient === ingredient.name && (
                    <div className="px-4 pb-4 bg-bg-primary/30">
                      <p className="text-xs text-text-secondary leading-relaxed mb-2">
                        {ingredient.description}
                      </p>
                      <p className="text-[11px] text-text-secondary">
                        <span className="text-accent-gold">Clinical dose range:</span> {ingredient.clinicalDose}
                      </p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
