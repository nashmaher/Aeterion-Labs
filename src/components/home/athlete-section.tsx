"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";

const athletes = [
  {
    name: "Marcus Rivera",
    sport: "Pro Bodybuilder",
    quote: "Aeterion Ascension is the only pre-workout that matches the intensity of my training.",
    initials: "MR",
  },
  {
    name: "Sarah Chen",
    sport: "CrossFit Athlete",
    quote: "Full transparency and clinical dosing. I can trust what I'm putting in my body.",
    initials: "SC",
  },
  {
    name: "Jake Thompson",
    sport: "Powerlifter",
    quote: "The Warpath + Ascension stack gives me insane pumps and focus for every session.",
    initials: "JT",
  },
  {
    name: "Diana Osei",
    sport: "Fitness Model",
    quote: "Dominus is my daily driver. Smooth energy, no crash, and I look fuller during training.",
    initials: "DO",
  },
];

export function AthleteSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SectionHeading
        title="Team Aeterion"
        subtitle="Trusted by elite athletes who demand the best"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {athletes.map((athlete, idx) => (
          <motion.div
            key={athlete.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group bg-bg-card border border-border rounded-sm p-6 hover:border-accent-gold/30 transition-all duration-300"
          >
            {/* Avatar */}
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-bg-secondary border border-border flex items-center justify-center group-hover:border-accent-gold/30 transition-colors">
              <span className="heading-display text-sm text-accent-gold">{athlete.initials}</span>
            </div>

            <h3 className="text-sm font-medium text-text-primary text-center mb-0.5">
              {athlete.name}
            </h3>
            <p className="text-[11px] text-accent-gold text-center uppercase tracking-wider mb-4">
              {athlete.sport}
            </p>

            <p className="text-xs text-text-secondary text-center leading-relaxed italic">
              &ldquo;{athlete.quote}&rdquo;
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
