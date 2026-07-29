"use client";

import { useMemo, useState } from "react";
import { nanoid } from "nanoid";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCartStore, parsePrice } from "@/store/useCartStore";
import { useOrderStore, type Order } from "@/store/useOrderStore";

interface CheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CheckoutModal({ open, onOpenChange }: CheckoutModalProps) {
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const closeCart = useCartStore((s) => s.closeCart);
  const addOrder = useOrderStore((s) => s.addOrder);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + parsePrice(i.price) * i.quantity, 0),
    [items]
  );

  function resetForm() {
    setName("");
    setEmail("");
    setPhone("");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (items.length === 0) return;

    const order: Order = {
      id: nanoid(),
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      items,
      subtotal,
      date: new Date().toISOString(),
    };

    addOrder(order);
    clearCart();
    closeCart();
    onOpenChange(false);
    resetForm();
    toast.success(`Order placed! Thanks, ${name}.`);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-display text-[#4A2D6B]">Checkout</DialogTitle>
          <DialogDescription className="text-[#9B85C4]">
            Enter your details to place your order.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="checkout-name" className="text-[#4A2D6B]">
              Name
            </Label>
            <Input
              id="checkout-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="checkout-email" className="text-[#4A2D6B]">
              Email
            </Label>
            <Input
              id="checkout-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="checkout-phone" className="text-[#4A2D6B]">
              Phone
            </Label>
            <Input
              id="checkout-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between pt-2">
            <span className="font-display text-[#4A2D6B] font-bold">Subtotal</span>
            <span className="font-display text-[#4A2D6B] font-bold">
              ₱{subtotal.toFixed(2)}
            </span>
          </div>

          <DialogFooter>
            <button
              type="submit"
              className="btn-active w-full px-7 py-3 bg-[#4A2D6B] text-white font-medium text-sm rounded-full hover:bg-[#5B3A7A] transition-all duration-300"
            >
              Place Order
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
