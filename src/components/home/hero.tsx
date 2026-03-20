"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
      {/* Hero background image — on mobile, push focus to the bottom of the image (products) */}
      <Image
        src="https://res.cloudinary.com/djxfmxrfx/image/upload/v1774046059/9c1419ea-f705-464e-ac5c-4d9a5569150f_ixw624.jpg"
        alt="Aeterion Labs product lineup — Ascension, Warpath, and Dominus"
        fill
        className="object-cover object-[center_75%] sm:object-center"
        priority
      />

      {/* Dark overlay — stronger on mobile for readability over busy product art */}
      <div className="absolute inset-0 bg-black/60 sm:bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary/40 via-30% to-bg-primary/90 sm:bg-gradient-to-t sm:from-bg-primary sm:via-transparent sm:to-bg-primary/70" />

      {/* Content — sits in the top portion on mobile so products show below */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6 pt-24 pb-32 sm:pt-0 sm:pb-0 max-w-4xl mx-auto w-full">
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
