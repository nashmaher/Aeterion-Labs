"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const ingredients = [
  { name: "L-Citrulline", category: "Pump", clinicalDose: "6000-8000mg", description: "Converts to L-Arginine in the kidneys, boosting nitric oxide production for enhanced blood flow and muscle pumps. Superior bioavailability compared to direct L-Arginine supplementation.", products: ["ASCENSION", "WARPATH", "DOMINUS"] },
  { name: "Beta-Alanine", category: "Endurance", clinicalDose: "3200-6400mg", description: "Increases intramuscular carnosine levels, buffering hydrogen ions during intense exercise. This delays the onset of fatigue and allows for more reps and longer training sessions.", products: ["ASCENSION", "DOMINUS"] },
  { name: "Betaine Anhydrous", category: "Performance", clinicalDose: "2500mg", description: "Supports power output through enhanced creatine synthesis. Improves cellular hydration and has been shown to improve body composition over time.", products: ["ASCENSION", "WARPATH", "DOMINUS"] },
  { name: "Caffeine Anhydrous", category: "Energy", clinicalDose: "200-400mg", description: "The most well-researched ergogenic aid in sports nutrition. Enhances alertness, focus, and physical performance through adenosine receptor antagonism.", products: ["ASCENSION", "DOMINUS"] },
  { name: "Alpha-GPC (50%)", category: "Focus", clinicalDose: "300-600mg", description: "Premium choline source that crosses the blood-brain barrier efficiently. Enhances acetylcholine production for improved mind-muscle connection and cognitive performance.", products: ["ASCENSION", "DOMINUS"] },
  { name: "Nitrosigine®", category: "Pump", clinicalDose: "1500mg", description: "Patented complex of bonded arginine silicate that boosts nitric oxide for up to 6 hours. Clinically shown to enhance blood flow, muscle pumps, and even cognitive function.", products: ["ASCENSION", "WARPATH"] },
  { name: "GlycerPump™", category: "Pump", clinicalDose: "2000-3000mg", description: "Stabilized glycerol powder that hyperhydrates muscle cells, creating fuller, harder pumps. Unlike standard glycerol, GlycerPump maintains stability and clump-free mixability.", products: ["WARPATH"] },
  { name: "L-Tyrosine", category: "Focus", clinicalDose: "500-2000mg", description: "Amino acid precursor to dopamine, norepinephrine, and epinephrine. Supports mental focus, mood, and cognitive performance under stressful conditions.", products: ["ASCENSION"] },
  { name: "Rhodiola Rosea", category: "Adaptogen", clinicalDose: "200-600mg", description: "Adaptogenic herb shown to reduce perceived exertion during exercise, combat fatigue, and support recovery. Enhances endurance performance.", products: ["ASCENSION"] },
  { name: "L-Theanine", category: "Focus", clinicalDose: "100-200mg", description: "Amino acid found naturally in tea that promotes calm focus. Synergistic with caffeine — smooths out energy and reduces jitters and anxiety.", products: ["DOMINUS"] },
  { name: "Lion's Mane Extract", category: "Nootropic", clinicalDose: "500-1000mg", description: "Medicinal mushroom supporting nerve growth factor (NGF) production. Promotes neurogenesis, focus, and long-term cognitive health.", products: ["DOMINUS"] },
  { name: "Taurine", category: "Performance", clinicalDose: "1000-2000mg", description: "Conditionally essential amino acid that supports cell hydration, reduces oxidative stress, and enhances endurance performance.", products: ["ASCENSION"] },
];

export default function IngredientsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(ingredients.map((i) => i.category)))];

  const filtered = ingredients.filter((i) => {
    const matchesSearch = i.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || i.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Ingredient Encyclopedia"
          subtitle="Every ingredient we use, explained with science"
        />

        {/* Search & filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search ingredients..."
            className="flex-1 bg-bg-card border border-border rounded-sm px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-gold/50"
          />
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 text-xs uppercase tracking-wider border rounded-sm transition-all ${
                  selectedCategory === cat
                    ? "border-accent-gold bg-accent-gold/10 text-accent-gold"
                    : "border-border text-text-secondary hover:border-border-light"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Ingredient list */}
        <div className="space-y-4">
          {filtered.map((ingredient, idx) => (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-bg-card border border-border rounded-sm p-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-base font-medium text-text-primary">{ingredient.name}</h3>
                    <Badge variant="gold">{ingredient.category}</Badge>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed mb-3">{ingredient.description}</p>
                  <div className="flex items-center gap-4">
                    <span className="text-[11px] text-text-secondary">
                      <span className="text-accent-gold">Clinical dose:</span> {ingredient.clinicalDose}
                    </span>
                    <div className="flex gap-2">
                      {ingredient.products.map((p) => (
                        <span key={p} className="text-[10px] bg-bg-secondary px-2 py-0.5 rounded-sm text-text-secondary uppercase tracking-wider">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
