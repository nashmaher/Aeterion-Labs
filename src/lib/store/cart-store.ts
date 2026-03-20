"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  flavor: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
  isSubscription: boolean;
  subscriptionDiscount: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (productId: string, flavor: string, size: string) => void;
  updateQuantity: (productId: string, flavor: string, size: string, quantity: number) => void;
  clearCart: () => void;
  toggleDrawer: () => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  getItemCount: () => number;
  getSubtotal: () => number;
  getFreeShippingProgress: () => number;
}

const FREE_SHIPPING_THRESHOLD = 75;

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (item) => {
        set((state) => {
          const existing = state.items.find(
            (i) => i.productId === item.productId && i.flavor === item.flavor && i.size === item.size
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.productId === item.productId && i.flavor === item.flavor && i.size === item.size
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
              isOpen: true,
            };
          }
          return { items: [...state.items, { ...item, quantity: 1 }], isOpen: true };
        });
      },

      removeItem: (productId, flavor, size) => {
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.productId === productId && i.flavor === flavor && i.size === size)
          ),
        }));
      },

      updateQuantity: (productId, flavor, size, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, flavor, size);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.productId === productId && i.flavor === flavor && i.size === size
              ? { ...i, quantity }
              : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),
      toggleDrawer: () => set((state) => ({ isOpen: !state.isOpen })),
      openDrawer: () => set({ isOpen: true }),
      closeDrawer: () => set({ isOpen: false }),

      getItemCount: () => get().items.reduce((sum, item) => sum + item.quantity, 0),

      getSubtotal: () =>
        get().items.reduce((sum, item) => {
          const price = item.isSubscription
            ? item.price * (1 - item.subscriptionDiscount / 100)
            : item.price;
          return sum + price * item.quantity;
        }, 0),

      getFreeShippingProgress: () => {
        const subtotal = get().getSubtotal();
        return Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
      },
    }),
    {
      name: "aeterion-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
);
