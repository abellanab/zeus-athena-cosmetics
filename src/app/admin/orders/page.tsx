"use client";

import { useEffect, useState } from "react";
import { ShoppingBag, Pencil } from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import EditOrderDialog from "@/components/admin/EditOrderDialog";
import { useOrderStore, type Order } from "@/store/useOrderStore";

export default function AdminOrdersPage() {
  const orders = useOrderStore((s) => s.orders);
  const clearOrders = useOrderStore((s) => s.clearOrders);

  const [editingOrder, setEditingOrder] = useState<Order | null>(null);

  useEffect(() => {
    useOrderStore.persist.rehydrate();
  }, []);

  function handleClearOrders() {
    if (window.confirm("Clear all orders? This cannot be undone.")) {
      clearOrders();
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <h2 className="font-display text-xl lg:text-2xl font-bold text-[#4A2D6B]">
          Orders
        </h2>
        {orders.length > 0 && (
          <button
            onClick={handleClearOrders}
            className="btn-active px-5 py-2 rounded-full border border-[#B8A8D4]/40 text-[#4A2D6B] text-xs font-medium hover:bg-[#EFE9F5] transition-all duration-300"
          >
            Clear all orders
          </button>
        )}
      </div>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 py-16 border border-[#B8A8D4]/30 rounded-2xl">
          <ShoppingBag className="w-10 h-10 text-[#9B85C4]" />
          <p className="text-[#9B85C4] text-sm">No orders yet</p>
        </div>
      ) : (
        <div className="border border-[#B8A8D4]/30 rounded-2xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-[#B8A8D4]/30">
                <TableHead className="text-[#4A2D6B]">Date</TableHead>
                <TableHead className="text-[#4A2D6B]">Customer</TableHead>
                <TableHead className="text-[#4A2D6B]">Items</TableHead>
                <TableHead className="text-[#4A2D6B] text-right">Total</TableHead>
                <TableHead className="text-[#4A2D6B] text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} className="border-[#B8A8D4]/30">
                  <TableCell className="text-[#4A2D6B] whitespace-nowrap">
                    {new Date(order.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="text-[#4A2D6B] font-medium">
                      {order.customerName}
                    </div>
                    <div className="text-[#9B85C4] text-xs">
                      {order.customerEmail}
                    </div>
                    <div className="text-[#9B85C4] text-xs">
                      {order.customerPhone}
                    </div>
                  </TableCell>
                  <TableCell className="text-[#4A2D6B]">
                    {order.items.length}{" "}
                    {order.items.length === 1 ? "item" : "items"}
                  </TableCell>
                  <TableCell className="text-[#4A2D6B] font-medium text-right">
                    ₱{order.subtotal.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-right">
                    <button
                      onClick={() => setEditingOrder(order)}
                      className="btn-active inline-flex items-center justify-center p-2 rounded-full text-[#4A2D6B] hover:bg-[#EFE9F5] transition-colors"
                      aria-label={`Edit order for ${order.customerName}`}
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <EditOrderDialog
        order={editingOrder}
        onOpenChange={(open) => {
          if (!open) setEditingOrder(null);
        }}
      />
    </div>
  );
}
