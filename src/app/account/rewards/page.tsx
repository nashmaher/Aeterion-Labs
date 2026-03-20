"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const tiers = [
  { name: "Bronze", points: "0-499", perks: ["5% back in points", "Birthday reward"] },
  { name: "Silver", points: "500-1499", perks: ["7% back in points", "Birthday reward", "Free shipping"] },
  { name: "Gold", points: "1500-2999", perks: ["10% back in points", "Birthday reward", "Free shipping", "Early access"] },
  { name: "Elite", points: "3000+", perks: ["15% back in points", "Birthday reward", "Free shipping", "Early access", "Exclusive products"] },
];

export default function RewardsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Rewards Program"
          subtitle="Earn points with every purchase. Unlock exclusive perks."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-bg-card border border-border rounded-sm p-6"
            >
              <Badge variant="gold">{tier.name}</Badge>
              <p className="text-xs text-text-secondary mt-2 mb-4">{tier.points} points</p>
              <ul className="space-y-2">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2 text-xs text-text-secondary">
                    <svg className="w-3 h-3 text-accent-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {perk}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-text-secondary">
          <p>Earn 1 point for every $1 spent. Redeem 100 points for $5 off.</p>
        </div>
      </div>
    </div>
  );
}
