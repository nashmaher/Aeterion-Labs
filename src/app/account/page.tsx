"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const sections = [
  { href: "/account/orders", title: "Order History", description: "Track your orders and view past purchases", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
  { href: "/account/subscriptions", title: "Subscriptions", description: "Manage your Subscribe & Save orders", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
  { href: "/account/rewards", title: "Rewards", description: "Check your points balance and tier status", icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" },
];

export default function AccountPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="My Account" />

        <div className="bg-bg-card border border-border rounded-sm p-6 mb-8 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-bg-secondary border border-border flex items-center justify-center">
            <svg className="w-8 h-8 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <p className="text-sm text-text-secondary mb-4">Sign in to access your account dashboard</p>
          <Button>Sign In</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group bg-bg-card border border-border rounded-sm p-6 hover:border-accent-gold/30 transition-all duration-300"
            >
              <svg className="w-8 h-8 text-text-secondary group-hover:text-accent-gold transition-colors mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={section.icon} />
              </svg>
              <h3 className="text-sm font-medium text-text-primary mb-1">{section.title}</h3>
              <p className="text-xs text-text-secondary">{section.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
