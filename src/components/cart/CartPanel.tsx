"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ShoppingBag, X, Minus, Plus } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useCartStore, parsePrice } from "@/store/useCartStore";
import CheckoutModal from "@/components/cart/CheckoutModal";

export default function CartPanel() {
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);
  const items = useCartStore((s) => s.items);
  const isOpen = useCartStore((s) => s.isOpen);
  const openCart = useCartStore((s) => s.openCart);
  const closeCart = useCartStore((s) => s.closeCart);
  const removeItem = useCartStore((s) => s.removeItem);
  const incrementQuantity = useCartStore((s) => s.incrementQuantity);
  const decrementQuantity = useCartStore((s) => s.decrementQuantity);

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + parsePrice(i.price) * i.quantity, 0),
    [items]
  );

  return (
    <Sheet open={isOpen} onOpenChange={(open) => (open ? openCart() : closeCart())}>
      <SheetContent side="right" className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-[#4A2D6B]">Your Cart</SheetTitle>
          <SheetDescription className="sr-only">Review items in your cart</SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3">
            <ShoppingBag className="w-10 h-10 text-[#9B85C4]" />
            <p className="text-[#9B85C4] text-sm">Your cart is empty</p>
          </div>
        ) : (
          <ScrollArea className="flex-1 px-4">
            {items.map((item, i) => (
              <div key={item.id}>
                <div className="flex items-center gap-3 py-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded-lg object-cover bg-[#EFE9F5]"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xs font-bold uppercase tracking-wider text-[#4A2D6B] truncate">
                      {item.name}
                    </h3>
                    <p className="text-[#9B85C4] text-xs">{item.price} each</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => decrementQuantity(item.id)}
                        className="btn-active w-6 h-6 rounded-md border border-[#B8A8D4]/40 flex items-center justify-center"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span
                        className="text-xs font-medium text-[#4A2D6B] w-4 text-center"
                        aria-live="polite"
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => incrementQuantity(item.id)}
                        className="btn-active w-6 h-6 rounded-md border border-[#B8A8D4]/40 flex items-center justify-center"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-[#9B85C4] hover:text-[#4A2D6B] transition-colors"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                {i < items.length - 1 && <Separator />}
              </div>
            ))}
          </ScrollArea>
        )}

        {items.length > 0 && (
          <SheetFooter>
            <div className="flex items-center justify-between mb-2">
              <span className="font-display text-[#4A2D6B] font-bold">Subtotal</span>
              <span className="font-display text-[#4A2D6B] font-bold">
                ₱{subtotal.toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => setCheckoutOpen(true)}
              className="btn-active w-full px-7 py-3 bg-[#4A2D6B] text-white font-medium text-sm rounded-full hover:bg-[#5B3A7A] transition-all duration-300"
            >
              Checkout
            </button>
            <button
              onClick={closeCart}
              className="btn-active w-full py-3 rounded-full border border-[#B8A8D4]/40 text-[#4A2D6B] text-sm font-medium hover:bg-[#EFE9F5] transition-all duration-300"
            >
              Continue Shopping
            </button>
          </SheetFooter>
        )}
      </SheetContent>
      <CheckoutModal open={isCheckoutOpen} onOpenChange={setCheckoutOpen} />
    </Sheet>
  );
}
