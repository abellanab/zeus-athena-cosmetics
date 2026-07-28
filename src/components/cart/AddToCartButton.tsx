"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, Check } from "lucide-react";
import { toast } from "sonner";
import { useCartStore, type Product } from "@/store/useCartStore";
import { cn } from "@/lib/utils";

interface AddToCartButtonProps {
  product: Product;
  className?: string;
}

export default function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const addItem = useCartStore((s) => s.addItem);
  const [isJustAdded, setJustAdded] = useState(false);

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setJustAdded(true);
    toast.success(`${product.name} added to cart`, { duration: 1800 });
    setTimeout(() => setJustAdded(false), 900);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Add ${product.name} to cart`}
      className={cn(
        "absolute w-9 h-9 bg-[#4A2D6B] rounded-lg flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 btn-active overflow-hidden",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isJustAdded ? (
          <motion.span
            key="check"
            initial={{ scale: 0.4, opacity: 0, rotate: -45 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          >
            <Check className="w-4 h-4 text-white" />
          </motion.span>
        ) : (
          <motion.span
            key="bag"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
          >
            <ShoppingBag className="w-4 h-4 text-white" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
