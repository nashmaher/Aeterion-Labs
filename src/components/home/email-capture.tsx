"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-gold/3 rounded-full blur-[150px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-xl mx-auto text-center px-4"
      >
        <p className="text-xs text-accent-gold uppercase tracking-[0.3em] mb-4">
          Join the Lab
        </p>
        <h2 className="heading-section text-2xl md:text-3xl text-text-primary mb-4">
          Get 15% Off Your First Order
        </h2>
        <p className="text-sm text-text-secondary mb-8">
          Subscribe for exclusive access to new products, training tips, and member-only offers.
        </p>

        {submitted ? (
          <div className="bg-accent-gold/10 border border-accent-gold/30 rounded-sm p-6">
            <p className="text-accent-gold font-medium text-sm">Welcome to the Lab.</p>
            <p className="text-xs text-text-secondary mt-2">Check your email for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 bg-bg-card border border-border rounded-sm px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-gold/50 transition-colors"
            />
            <Button type="submit" size="md">
              Subscribe
            </Button>
          </form>
        )}

        <p className="text-[10px] text-text-secondary/50 mt-4">
          No spam. Unsubscribe anytime. By subscribing you agree to our Privacy Policy.
        </p>
      </motion.div>
    </section>
  );
}
