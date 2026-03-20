"use client";

import { useCartStore } from "@/lib/store/cart-store";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import Link from "next/link";

const FREE_SHIPPING_THRESHOLD = 75;

export default function CartPage() {
  const { items, removeItem, updateQuantity, getSubtotal } = useCartStore();
  const subtotal = getSubtotal();
  const remaining = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);
  const progress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Your Cart" />

        {items.length === 0 ? (
          <div className="text-center py-20">
            <svg className="w-20 h-20 text-border mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <p className="text-text-secondary mb-6">Your cart is empty</p>
            <Link href="/shop">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {/* Free shipping bar */}
              <div className="bg-bg-card border border-border rounded-sm p-4 mb-6">
                {remaining > 0 ? (
                  <p className="text-xs text-text-secondary text-center mb-2">
                    Add <span className="text-accent-gold font-medium">${remaining.toFixed(2)}</span> for free shipping
                  </p>
                ) : (
                  <p className="text-xs text-accent-gold text-center mb-2 font-medium">
                    You&apos;ve unlocked free shipping!
                  </p>
                )}
                <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent-gold-dark to-accent-gold rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {items.map((item) => (
                <div
                  key={`${item.productId}-${item.flavor}-${item.size}`}
                  className="flex gap-4 p-4 bg-bg-card border border-border rounded-sm"
                >
                  <div className="w-20 h-20 bg-bg-primary rounded-sm flex-shrink-0 flex items-center justify-center">
                    <span className="text-[10px] text-text-secondary uppercase tracking-wider">
                      {item.name}
                    </span>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-text-primary">{item.name}</h3>
                        <p className="text-xs text-text-secondary">
                          {item.flavor} &middot; {item.size}
                        </p>
                        {item.isSubscription && (
                          <p className="text-[10px] text-accent-gold mt-0.5">
                            Subscribe & Save {item.subscriptionDiscount}%
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => removeItem(item.productId, item.flavor, item.size)}
                        className="text-text-secondary hover:text-accent-red transition-colors p-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.flavor, item.size, item.quantity - 1)
                          }
                          className="w-7 h-7 flex items-center justify-center border border-border text-text-secondary hover:text-text-primary rounded-sm"
                        >
                          -
                        </button>
                        <span className="text-sm text-text-primary w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.productId, item.flavor, item.size, item.quantity + 1)
                          }
                          className="w-7 h-7 flex items-center justify-center border border-border text-text-secondary hover:text-text-primary rounded-sm"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-medium text-text-primary">
                        ${(
                          (item.isSubscription
                            ? item.price * (1 - item.subscriptionDiscount / 100)
                            : item.price) * item.quantity
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <div className="bg-bg-card border border-border rounded-sm p-6 sticky top-28">
                <h3 className="heading-section text-sm mb-6">Order Summary</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Subtotal</span>
                    <span className="text-text-primary">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Shipping</span>
                    <span className="text-text-primary">
                      {subtotal >= FREE_SHIPPING_THRESHOLD ? "Free" : "Calculated at checkout"}
                    </span>
                  </div>
                  <div className="border-t border-border pt-3 flex justify-between">
                    <span className="text-sm font-medium text-text-primary">Total</span>
                    <span className="text-lg font-bold text-text-primary">${subtotal.toFixed(2)}</span>
                  </div>
                </div>

                <Link href="/checkout">
                  <Button className="w-full" size="lg">
                    Checkout
                  </Button>
                </Link>

                <Link
                  href="/shop"
                  className="block text-center text-xs text-text-secondary hover:text-accent-gold transition-colors mt-3 py-2 uppercase tracking-wider"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
