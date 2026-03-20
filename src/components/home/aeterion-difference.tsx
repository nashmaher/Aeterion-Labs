"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";

const points = [
  {
    title: "Clinical Dosing",
    description: "Every ingredient at its researched effective dose. No underdosing, no pixie-dusting.",
  },
  {
    title: "Full Transparency",
    description: "No proprietary blends. Every ingredient and exact amount clearly listed on the label.",
  },
  {
    title: "Premium Ingredients",
    description: "Patented, trademarked ingredients like Nitrosigine® and GlycerPump™ for proven results.",
  },
  {
    title: "Third-Party Tested",
    description: "Every batch independently tested for purity, potency, and banned substances.",
  },
  {
    title: "Science-First Approach",
    description: "Formulated by sports scientists using peer-reviewed research, not marketing hype.",
  },
];

export function AeterionDifference() {
  return (
    <section className="py-20 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-blue/10 via-transparent to-accent-gold/10 animate-pulse-glow" />
              <div className="absolute inset-8 rounded-full border border-border/50" />
              <div className="absolute inset-16 rounded-full border border-accent-gold/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="heading-display text-sm text-accent-gold mb-2">The</p>
                  <p className="heading-display text-3xl text-text-primary mb-2">Aeterion</p>
                  <p className="heading-display text-sm text-accent-gold">Difference</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <div>
            <SectionHeading
              title="Why Aeterion?"
              subtitle="We don't cut corners. Every decision is driven by science and a commitment to your performance."
              align="left"
            />
            <div className="space-y-6">
              {points.map((point, idx) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-sm bg-accent-gold/10 border border-accent-gold/30 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-text-primary mb-1">{point.title}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
