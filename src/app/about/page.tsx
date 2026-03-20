"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const values = [
  { title: "Full Transparency", description: "Every ingredient and exact dosage clearly listed. No proprietary blends, ever." },
  { title: "Clinical Dosing", description: "We use only clinically studied dosages. If the research says 8g, we put in 8g." },
  { title: "Premium Sourcing", description: "Patented, trademarked ingredients from world-class suppliers for proven results." },
  { title: "Third-Party Tested", description: "Every batch independently verified for purity, potency, and banned substances." },
  { title: "Science-First", description: "Formulated by sports scientists using peer-reviewed research, not marketing trends." },
  { title: "No Compromises", description: "We never cut corners on quality to improve margins. Your performance comes first." },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 cosmic-bg" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs text-accent-gold uppercase tracking-[0.4em] mb-4">Our Story</p>
            <h1 className="heading-display text-4xl md:text-5xl text-text-primary mb-6">
              Built Different
            </h1>
            <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Aeterion Labs was founded on a simple principle: the supplement industry can do better.
              Too many brands hide behind proprietary blends, underdose key ingredients, and prioritize
              marketing over formulation. We set out to change that.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading title="Our Mission" align="left" />
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              We believe every athlete deserves to know exactly what they&apos;re putting in their body.
              That&apos;s why every Aeterion product features a fully transparent label with clinically
              validated dosages.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              Our formulas are designed by sports scientists who understand the research, not marketers
              chasing trends. Every ingredient is chosen for a reason, dosed at the amount shown to be
              effective in peer-reviewed studies.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              We partner with world-class ingredient suppliers and use patented compounds like
              Nitrosigine&reg;, GlycerPump&trade;, and S7&reg; — because generic alternatives simply
              don&apos;t deliver the same results.
            </p>
          </div>
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-lg bg-bg-card border border-border flex items-center justify-center">
              <div className="text-center">
                <p className="heading-display text-3xl text-accent-gold mb-4">A</p>
                <p className="heading-display text-sm text-text-primary">Aeterion Labs</p>
                <p className="text-xs text-text-secondary mt-2">Est. 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Values" subtitle="The principles that guide every formula we create" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-bg-card border border-border rounded-sm p-6"
              >
                <div className="w-10 h-10 bg-accent-gold/10 border border-accent-gold/30 rounded-sm flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-text-primary mb-2">{value.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-4">
        <h2 className="heading-section text-2xl text-text-primary mb-4">Ready to Elevate?</h2>
        <p className="text-text-secondary text-sm mb-8 max-w-md mx-auto">
          Experience the difference that clinical dosing and full transparency make.
        </p>
        <Link href="/shop">
          <Button size="lg">Shop Now</Button>
        </Link>
      </section>
    </div>
  );
}
