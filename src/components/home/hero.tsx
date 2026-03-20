"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Aeterion Labs product lineup — Ascension, Warpath, and Dominus"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-bg-primary/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-xs text-accent-gold uppercase tracking-[0.4em] mb-6">
            Performance Supplements
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="heading-display text-4xl sm:text-5xl md:text-7xl text-text-primary mb-6"
        >
          Aeterion Labs
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-text-secondary text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-4 italic"
        >
          Elevating human performance beyond natural limits
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-text-secondary/70 text-xs sm:text-sm max-w-lg mx-auto mb-10"
        >
          Precision-built formulas. No proprietary blends. No compromises. Full transparency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/shop">
            <Button size="lg">Shop Now</Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg">
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
