"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/lib/store/cart-store";
import { products } from "@/lib/data/products";
import { motion } from "framer-motion";

const bundles = [
  {
    name: "The Full Send",
    description: "Our complete stack for maximum performance. Ascension for energy and focus, Warpath for pumps, and Dominus for everyday training.",
    products: ["ascension", "warpath", "dominus"],
    discount: 20,
    badge: "Best Value",
    level: "Elite",
  },
  {
    name: "The Pump Stack",
    description: "Combine Ascension's energy with Warpath's pump formula for the ultimate training session.",
    products: ["ascension", "warpath"],
    discount: 15,
    badge: "Popular",
    level: "Intermediate",
  },
  {
    name: "The Daily Driver",
    description: "Ascension for PR days, Dominus for everyday training. Cover all your bases.",
    products: ["ascension", "dominus"],
    discount: 15,
    badge: null,
    level: "Beginner",
  },
];

export default function BundlesPage() {
  const addItem = useCartStore((s) => s.addItem);

  const addBundle = (bundle: typeof bundles[0]) => {
    bundle.products.forEach((slug) => {
      const product = products.find((p) => p.slug === slug);
      if (product) {
        addItem({
          productId: product.id,
          slug: product.slug,
          name: product.name,
          flavor: product.flavors[0].name,
          size: product.sizes[0].label,
          price: product.price * (1 - bundle.discount / 100),
          image: product.images[0],
          isSubscription: false,
          subscriptionDiscount: 0,
        });
      }
    });
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Build Your Stack"
          subtitle="Pre-built stacks with bundle discounts for maximum performance"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bundles.map((bundle, idx) => {
            const bundleProducts = bundle.products
              .map((slug) => products.find((p) => p.slug === slug))
              .filter(Boolean);
            const originalTotal = bundleProducts.reduce((sum, p) => sum + (p?.price || 0), 0);
            const discountedTotal = originalTotal * (1 - bundle.discount / 100);

            return (
              <motion.div
                key={bundle.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-bg-card border border-border rounded-sm overflow-hidden hover:border-accent-gold/30 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="gold">{bundle.level}</Badge>
                    {bundle.badge && <Badge variant="blue">{bundle.badge}</Badge>}
                  </div>

                  <h3 className="text-xl font-bold text-text-primary mb-2">{bundle.name}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed mb-6">{bundle.description}</p>

                  {/* Products in bundle */}
                  <div className="space-y-3 mb-6">
                    {bundleProducts.map((product) => product && (
                      <div key={product.id} className="flex items-center gap-3 p-2 bg-bg-secondary rounded-sm">
                        <div className="w-10 h-10 bg-bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-[8px] text-text-secondary uppercase">{product.name.slice(0, 3)}</span>
                        </div>
                        <div>
                          <p className="text-xs font-medium text-text-primary">{product.name}</p>
                          <p className="text-[10px] text-text-secondary">{product.benefits.join(" · ")}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-text-primary">${discountedTotal.toFixed(2)}</span>
                    <span className="text-sm text-text-secondary line-through">${originalTotal.toFixed(2)}</span>
                    <Badge variant="gold">Save {bundle.discount}%</Badge>
                  </div>

                  <Button className="w-full" onClick={() => addBundle(bundle)}>
                    Add Stack to Cart
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
