"use client";

import { useCartStore } from "@/lib/store/cart-store";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FREE_SHIPPING_THRESHOLD = 75;

export function CartDrawer() {
  const { items, isOpen, closeDrawer, removeItem, updateQuantity, getSubtotal } = useCartStore();
  const subtotal = getSubtotal();
  const remaining = Math.max(FREE_SHIPPING_THRESHOLD - subtotal, 0);
  const progress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[60] transition-opacity"
          onClick={closeDrawer}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-bg-secondary border-l border-border z-[70] transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="heading-section text-sm">Your Cart</h2>
            <button
              onClick={closeDrawer}
              className="text-text-secondary hover:text-text-primary transition-colors p-1"
              aria-label="Close cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Free shipping bar */}
          <div className="px-6 py-3 bg-bg-card">
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

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <svg className="w-16 h-16 text-border mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p className="text-text-secondary text-sm mb-4">Your cart is empty</p>
                <Button variant="outline" size="sm" onClick={closeDrawer}>
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={`${item.productId}-${item.flavor}-${item.size}`}
                    className="flex gap-4 p-3 bg-bg-card rounded-sm border border-border"
                  >
                    {/* Product image placeholder */}
                    <div className="w-16 h-16 bg-bg-primary rounded-sm flex-shrink-0 flex items-center justify-center">
                      <span className="text-[10px] text-text-secondary uppercase tracking-wider">
                        {item.name}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-text-primary truncate">{item.name}</h4>
                      <p className="text-xs text-text-secondary">{item.flavor} &middot; {item.size}</p>
                      {item.isSubscription && (
                        <p className="text-[10px] text-accent-gold mt-0.5">Subscribe & Save {item.subscriptionDiscount}%</p>
                      )}

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, item.flavor, item.size, item.quantity - 1)
                            }
                            className="w-6 h-6 flex items-center justify-center border border-border text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors rounded-sm text-xs"
                          >
                            -
                          </button>
                          <span className="text-sm text-text-primary w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.productId, item.flavor, item.size, item.quantity + 1)
                            }
                            className="w-6 h-6 flex items-center justify-center border border-border text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors rounded-sm text-xs"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-text-primary">
                            ${(
                              (item.isSubscription
                                ? item.price * (1 - item.subscriptionDiscount / 100)
                                : item.price) * item.quantity
                            ).toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeItem(item.productId, item.flavor, item.size)}
                            className="text-text-secondary hover:text-accent-red transition-colors"
                            aria-label="Remove item"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-border bg-bg-card">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-text-secondary">Subtotal</span>
                <span className="text-lg font-medium text-text-primary">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-text-secondary mb-4">
                Shipping and taxes calculated at checkout.
              </p>
              <Link href="/checkout" onClick={closeDrawer}>
                <Button className="w-full" size="lg">
                  Checkout
                </Button>
              </Link>
              <button
                onClick={closeDrawer}
                className="w-full text-center text-xs text-text-secondary hover:text-accent-gold transition-colors mt-3 py-2 uppercase tracking-wider"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
