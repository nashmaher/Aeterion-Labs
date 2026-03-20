"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const athletes = [
  {
    name: "Marcus Rivera",
    sport: "IFBB Pro Bodybuilder",
    bio: "3x national champion and IFBB pro. Marcus trusts Aeterion for every session — from off-season bulk to stage-ready conditioning.",
    quote: "Ascension is the only pre-workout that matches the intensity of my training. The pumps from Warpath are next level.",
    products: ["ASCENSION", "WARPATH"],
    initials: "MR",
  },
  {
    name: "Sarah Chen",
    sport: "CrossFit Games Athlete",
    bio: "Top-20 CrossFit Games finisher. Sarah demands supplements that are transparent, effective, and tested for banned substances.",
    quote: "Full transparency and clinical dosing. I can trust what I'm putting in my body before every competition.",
    products: ["ASCENSION", "DOMINUS"],
    initials: "SC",
  },
  {
    name: "Jake Thompson",
    sport: "Competitive Powerlifter",
    bio: "Elite-total powerlifter with a 2000+ lb total. Jake stacks Ascension with Warpath for maximum performance on heavy days.",
    quote: "The Warpath + Ascension stack gives me insane pumps and focus for every session. Can't train without it.",
    products: ["ASCENSION", "WARPATH"],
    initials: "JT",
  },
  {
    name: "Diana Osei",
    sport: "Fitness Athlete & Coach",
    bio: "Online fitness coach and bikini competitor. Diana uses Dominus as her everyday training partner for consistent energy.",
    quote: "Dominus is my daily driver. Smooth energy, no crash, and I look fuller during training.",
    products: ["DOMINUS", "WARPATH"],
    initials: "DO",
  },
  {
    name: "Alex Volkov",
    sport: "MMA Fighter",
    bio: "Professional MMA fighter competing at the highest level. Alex relies on clean supplements that pass all athletic testing.",
    quote: "In my sport, what you put in your body matters. Aeterion gives me confidence with their third-party testing.",
    products: ["DOMINUS"],
    initials: "AV",
  },
  {
    name: "Taylor Brooks",
    sport: "Olympic Weightlifter",
    bio: "National-level Olympic weightlifter. Taylor appreciates the science-backed formulations and clean ingredient profiles.",
    quote: "The focus from Ascension is unreal. It's like a mental and physical switch flips. Pure performance.",
    products: ["ASCENSION"],
    initials: "TB",
  },
];

export default function AthletesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Team Aeterion"
          subtitle="Elite athletes who trust our science-backed formulas"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {athletes.map((athlete, idx) => (
            <motion.div
              key={athlete.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-bg-card border border-border rounded-sm overflow-hidden group hover:border-accent-gold/30 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="h-48 bg-bg-secondary flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-accent-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-24 h-24 rounded-full bg-bg-card border border-border flex items-center justify-center">
                  <span className="heading-display text-xl text-accent-gold">{athlete.initials}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-base font-medium text-text-primary mb-0.5">{athlete.name}</h3>
                <p className="text-xs text-accent-gold uppercase tracking-wider mb-3">{athlete.sport}</p>
                <p className="text-xs text-text-secondary leading-relaxed mb-4">{athlete.bio}</p>
                <blockquote className="text-xs text-text-secondary italic border-l-2 border-accent-gold/30 pl-3 mb-4">
                  &ldquo;{athlete.quote}&rdquo;
                </blockquote>
                <div className="flex gap-2">
                  {athlete.products.map((p) => (
                    <span key={p} className="text-[10px] bg-bg-secondary px-2 py-1 rounded-sm text-text-secondary uppercase tracking-wider">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Apply CTA */}
        <div className="mt-16 text-center bg-bg-secondary border border-border rounded-sm p-12">
          <h2 className="heading-section text-xl text-text-primary mb-4">Become an Aeterion Athlete</h2>
          <p className="text-sm text-text-secondary mb-6 max-w-md mx-auto">
            Are you a competitive athlete who values transparency and science-backed supplementation?
            We&apos;re always looking for athletes who align with our mission.
          </p>
          <Button>Apply Now</Button>
        </div>
      </div>
    </div>
  );
}
