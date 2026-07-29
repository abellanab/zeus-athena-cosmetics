import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/store/useCartStore";

export interface CatalogProduct extends Product {
  category: string;
  tag: string | null;
  description: string;
}

interface ProductState {
  products: CatalogProduct[];
  addProduct: (product: Omit<CatalogProduct, "id">) => void;
  updateProduct: (id: number, patch: Partial<Omit<CatalogProduct, "id">>) => void;
  deleteProduct: (id: number) => void;
}

const defaultProducts: CatalogProduct[] = [
  {
    id: 1,
    name: "GLUTA ARBUTIN SOAP",
    category: "brightening",
    price: "₱65.00",
    tag: null,
    image: "/Product photos/Arbutinsoap.jpeg",
    description:
      "Reveal brighter, smoother, and more radiant skin with Athena Gluta-Arbutin Whitening Soap. This advanced whitening soap is formulated with a powerful blend of alpha arbutin, glutathione, and niacinamide to help reduce dark spots, acne marks, and uneven skin tone while gently cleansing the skin.",
  },
  {
    id: 2,
    name: "CHARCOAL SOAP",
    category: "cleansing",
    price: "₱65.00",
    tag: null,
    image: "/Product photos/charcoalsoap.jpeg",
    description:
      "Experience deep, effective cleansing with Zeus Charcoal Soap with Niacinamide and Salicylic Acid. This 100g soap bar is specially formulated to remove dirt, excess oil, and impurities while helping prevent acne and breakouts. Powered by activated charcoal and acne-fighting ingredients, it is ideal for daily face and body cleansing, especially for oily and acne-prone skin.",
  },
  {
    id: 3,
    name: "SOAP BUNDLE",
    category: "bundle",
    price: "₱398.00",
    tag: "Save",
    image: "/Product photos/bundlesoap.jpeg",
    description:
      "Achieve cleaner, brighter, and smoother skin with this value bundle promo! Get 2 Arbutin Whitening Soaps + 1 FREE Charcoal Soap—perfect for daily skincare routine for both face and body.",
  },
];

export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      products: defaultProducts,
      addProduct: (product) =>
        set((state) => {
          const nextId = Math.max(0, ...state.products.map((p) => p.id)) + 1;
          return {
            products: [...state.products, { ...product, id: nextId }],
          };
        }),
      updateProduct: (id, patch) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.id === id ? { ...p, ...patch } : p
          ),
        })),
      deleteProduct: (id) =>
        set((state) => ({
          products: state.products.filter((p) => p.id !== id),
        })),
    }),
    {
      name: "zeus-athena-products",
      partialize: (state) => ({ products: state.products }),
      skipHydration: true,
    }
  )
);
