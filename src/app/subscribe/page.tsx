"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { motion } from "framer-motion";

const benefits = [
  { title: "Save 15% Every Order", description: "Automatic savings on every delivery." },
  { title: "Free Shipping Always", description: "No minimums for subscribers." },
  { title: "Flexible Schedule", description: "Choose delivery every 2, 4, 6, or 8 weeks." },
  { title: "Easy Management", description: "Pause, skip, swap, or cancel anytime." },
  { title: "2X Loyalty Points", description: "Double points on every subscription order." },
  { title: "Early Access", description: "First access to new products and flavors." },
];

export default function SubscribePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Subscribe & Save"
          subtitle="Never run out. Save on every order. Cancel anytime."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-bg-card border border-border rounded-sm p-6 text-center"
            >
              <div className="w-10 h-10 mx-auto mb-4 bg-accent-gold/10 border border-accent-gold/30 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-sm font-medium text-text-primary mb-1">{benefit.title}</h3>
              <p className="text-xs text-text-secondary">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center bg-bg-secondary border border-border rounded-sm p-12">
          <Badge variant="gold">Subscribe & Save 15%</Badge>
          <h2 className="heading-section text-xl text-text-primary mt-4 mb-4">
            Ready to Subscribe?
          </h2>
          <p className="text-sm text-text-secondary mb-6 max-w-md mx-auto">
            Add any product to your cart and toggle &quot;Subscribe & Save&quot; to get started.
          </p>
          <Link href="/shop">
            <Button size="lg">Shop Products</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
