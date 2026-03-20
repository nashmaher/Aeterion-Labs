"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden bg-bg-primary">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,170,110,0.08)_0%,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-[10px] sm:text-xs text-accent-gold uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-4 sm:mb-6">
            Performance Supplements
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="heading-display text-3xl sm:text-5xl md:text-7xl text-text-primary mb-4 sm:mb-6"
        >
          Aeterion Labs
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-text-secondary text-sm sm:text-base md:text-lg max-w-xs sm:max-w-xl mx-auto mb-3 sm:mb-4 italic"
        >
          Elevating human performance beyond natural limits
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-text-secondary/70 text-xs sm:text-sm max-w-xs sm:max-w-lg mx-auto mb-8 sm:mb-10"
        >
          Precision-built formulas. No proprietary blends. No compromises. Full transparency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center w-full sm:w-auto"
        >
          <Link href="/shop" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto">Shop Now</Button>
          </Link>
          <Link href="/about" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Our Science
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent" />
    </section>
  );
}
