"use client";

import { useState } from "react";
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
import { useOrderStore, type Order } from "@/store/useOrderStore";

interface EditOrderDialogProps {
  order: Order | null;
  onOpenChange: (open: boolean) => void;
}

function EditOrderForm({ order, onOpenChange }: { order: Order; onOpenChange: (open: boolean) => void }) {
  const updateOrder = useOrderStore((s) => s.updateOrder);

  const [name, setName] = useState(order.customerName);
  const [email, setEmail] = useState(order.customerEmail);
  const [phone, setPhone] = useState(order.customerPhone);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    updateOrder(order.id, {
      customerName: name,
      customerEmail: email,
      customerPhone: phone,
    });
    onOpenChange(false);
    toast.success("Order updated");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="edit-order-name" className="text-[#4A2D6B]">
          Name
        </Label>
        <Input
          id="edit-order-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="edit-order-email" className="text-[#4A2D6B]">
          Email
        </Label>
        <Input
          id="edit-order-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="edit-order-phone" className="text-[#4A2D6B]">
          Phone
        </Label>
        <Input
          id="edit-order-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <DialogFooter>
        <button
          type="submit"
          className="btn-active w-full px-7 py-3 bg-[#4A2D6B] text-white font-medium text-sm rounded-full hover:bg-[#5B3A7A] transition-all duration-300"
        >
          Save Changes
        </button>
      </DialogFooter>
    </form>
  );
}

export default function EditOrderDialog({ order, onOpenChange }: EditOrderDialogProps) {
  return (
    <Dialog open={!!order} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-display text-[#4A2D6B]">Edit Order</DialogTitle>
          <DialogDescription className="text-[#9B85C4]">
            Update this customer&apos;s contact details.
          </DialogDescription>
        </DialogHeader>

        {order && (
          <EditOrderForm key={order.id} order={order} onOpenChange={onOpenChange} />
        )}
      </DialogContent>
    </Dialog>
  );
}
