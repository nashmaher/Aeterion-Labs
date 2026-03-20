"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store/cart-store";
import Link from "next/link";

export default function CheckoutPage() {
  const items = useCartStore((s) => s.items);
  const getSubtotal = useCartStore((s) => s.getSubtotal);
  const subtotal = getSubtotal();

  if (items.length === 0) {
    return (
      <div className="pt-24 pb-20 text-center">
        <div className="max-w-md mx-auto px-4">
          <p className="text-text-secondary mb-4">Your cart is empty</p>
          <Link href="/shop"><Button>Shop Now</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Checkout" />

        <div className="bg-bg-card border border-border rounded-sm p-8 text-center">
          <svg className="w-16 h-16 text-accent-gold mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          <h2 className="text-lg font-medium text-text-primary mb-2">Stripe Checkout</h2>
          <p className="text-sm text-text-secondary mb-4">
            Stripe integration will be connected here. Total: ${subtotal.toFixed(2)}
          </p>
          <p className="text-xs text-text-secondary mb-6">
            In production, this will redirect to a secure Stripe Checkout session with Apple Pay, Google Pay, and all major cards.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/cart">
              <Button variant="outline">Back to Cart</Button>
            </Link>
            <Button disabled>Place Order (Demo)</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
