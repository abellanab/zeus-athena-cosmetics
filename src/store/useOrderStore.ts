import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "@/store/useCartStore";

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: CartItem[];
  subtotal: number;
  date: string;
}

interface OrderState {
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrder: (
    id: string,
    patch: Partial<Pick<Order, "customerName" | "customerEmail" | "customerPhone">>
  ) => void;
  clearOrders: () => void;
}

export const useOrderStore = create<OrderState>()(
  persist(
    (set) => ({
      orders: [],
      addOrder: (order) =>
        set((state) => ({
          orders: [order, ...state.orders],
        })),
      updateOrder: (id, patch) =>
        set((state) => ({
          orders: state.orders.map((o) => (o.id === id ? { ...o, ...patch } : o)),
        })),
      clearOrders: () => set({ orders: [] }),
    }),
    {
      name: "zeus-athena-orders",
      partialize: (state) => ({ orders: state.orders }),
      skipHydration: true,
    }
  )
);
