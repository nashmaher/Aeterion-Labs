"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";

const faqs = [
  { q: "What makes Aeterion Labs different from other supplement brands?", a: "We use clinically dosed ingredients with full label transparency. No proprietary blends, no underdosing, no filler. Every ingredient is chosen based on peer-reviewed research and dosed at the amount shown to be effective." },
  { q: "Are your products third-party tested?", a: "Yes. Every batch of every product is independently tested by a third-party lab for purity, potency, heavy metals, and banned substances. We publish certificates of analysis for full transparency." },
  { q: "What does 'clinically dosed' mean?", a: "Clinically dosed means each ingredient is included at the exact amount shown to be effective in peer-reviewed scientific studies. Many brands include popular ingredients but at fractions of the effective dose." },
  { q: "Can I stack Ascension with Warpath?", a: "Absolutely! Ascension + Warpath is our most popular stack. Take Ascension for energy and focus, plus Warpath for maximum pumps. Warpath is stimulant-free, so there's no caffeine overlap." },
  { q: "How does Subscribe & Save work?", a: "Subscribe & Save gives you 15% off every order with automatic delivery on your schedule (every 2, 4, 6, or 8 weeks). You can pause, skip, swap products, or cancel anytime from your account dashboard." },
  { q: "Do you offer free shipping?", a: "Yes! All orders over $75 ship free within the continental United States. Orders under $75 ship for a flat rate of $5.99. International shipping rates vary by location." },
  { q: "What is your return policy?", a: "We offer a 30-day money-back guarantee on all products. If you're not satisfied, contact us within 30 days of delivery for a full refund. We'll even cover return shipping." },
  { q: "Are your products safe for competitive athletes?", a: "Yes. All Aeterion products are manufactured in GMP-certified facilities and third-party tested for banned substances. However, we always recommend checking with your sport's governing body for specific regulations." },
  { q: "When should I take pre-workout?", a: "For optimal results, take your pre-workout 20-30 minutes before training. This allows caffeine and other ingredients to reach peak blood levels during your workout." },
  { q: "Do you ship internationally?", a: "Currently we ship to the United States and Canada. International shipping to additional countries is coming soon. Sign up for our newsletter to be notified when we expand." },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Frequently Asked Questions" subtitle="Everything you need to know about Aeterion Labs" />

        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-border rounded-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-sm text-text-primary pr-4">{faq.q}</span>
                <svg
                  className={`w-4 h-4 text-text-secondary flex-shrink-0 transition-transform duration-200 ${openIndex === idx ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === idx && (
                <div className="px-5 pb-5">
                  <p className="text-xs text-text-secondary leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
