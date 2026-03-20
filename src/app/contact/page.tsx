"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Contact Us" subtitle="We'd love to hear from you" />

        {submitted ? (
          <div className="text-center bg-accent-gold/10 border border-accent-gold/30 rounded-sm p-8">
            <p className="text-accent-gold font-medium mb-2">Message Sent</p>
            <p className="text-sm text-text-secondary">We&apos;ll get back to you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs uppercase tracking-wider text-text-secondary mb-2 block">Name</label>
                <input required className="w-full bg-bg-card border border-border rounded-sm px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-gold/50" placeholder="Your name" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-text-secondary mb-2 block">Email</label>
                <input required type="email" className="w-full bg-bg-card border border-border rounded-sm px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-gold/50" placeholder="your@email.com" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-text-secondary mb-2 block">Subject</label>
              <select className="w-full bg-bg-card border border-border rounded-sm px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent-gold/50">
                <option>General Inquiry</option>
                <option>Order Support</option>
                <option>Product Question</option>
                <option>Wholesale</option>
                <option>Athlete Sponsorship</option>
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-text-secondary mb-2 block">Message</label>
              <textarea required rows={6} className="w-full bg-bg-card border border-border rounded-sm px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-accent-gold/50 resize-none" placeholder="How can we help?" />
            </div>
            <Button type="submit" size="lg" className="w-full">Send Message</Button>
          </form>
        )}

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-4">
            <p className="text-xs text-accent-gold uppercase tracking-wider mb-1">Email</p>
            <p className="text-sm text-text-secondary">support@aeterionlabs.com</p>
          </div>
          <div className="p-4">
            <p className="text-xs text-accent-gold uppercase tracking-wider mb-1">Response Time</p>
            <p className="text-sm text-text-secondary">Within 24 hours</p>
          </div>
          <div className="p-4">
            <p className="text-xs text-accent-gold uppercase tracking-wider mb-1">Hours</p>
            <p className="text-sm text-text-secondary">Mon-Fri 9am-5pm EST</p>
          </div>
        </div>
      </div>
    </div>
  );
}
