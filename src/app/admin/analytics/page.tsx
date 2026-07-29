"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useOrderStore } from "@/store/useOrderStore";

const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export default function AdminAnalyticsPage() {
  const orders = useOrderStore((s) => s.orders);

  useEffect(() => {
    useOrderStore.persist.rehydrate();
  }, []);

  const currentYear = new Date().getFullYear();

  const years = useMemo(() => {
    const distinct = new Set(orders.map((o) => new Date(o.date).getFullYear()));
    if (distinct.size === 0) distinct.add(currentYear);
    return Array.from(distinct).sort((a, b) => b - a);
  }, [orders, currentYear]);

  const [selectedYear, setSelectedYear] = useState(years[0]);

  useEffect(() => {
    if (!years.includes(selectedYear)) {
      setSelectedYear(years[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [years]);

  const yearOrders = useMemo(
    () => orders.filter((o) => new Date(o.date).getFullYear() === selectedYear),
    [orders, selectedYear]
  );

  const monthlyData = useMemo(() => {
    const revenue = new Array(12).fill(0);
    const count = new Array(12).fill(0);
    yearOrders.forEach((order) => {
      const month = new Date(order.date).getMonth();
      revenue[month] += order.subtotal;
      count[month] += 1;
    });
    return MONTH_LABELS.map((label, i) => ({
      month: label,
      revenue: revenue[i],
      orders: count[i],
    }));
  }, [yearOrders]);

  const totalRevenue = useMemo(
    () => yearOrders.reduce((sum, o) => sum + o.subtotal, 0),
    [yearOrders]
  );

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <h2 className="font-display text-xl lg:text-2xl font-bold text-[#4A2D6B]">
          Insights
        </h2>
        <Select
          value={String(selectedYear)}
          onValueChange={(value) => setSelectedYear(Number(value))}
        >
          <SelectTrigger className="w-32 border-[#B8A8D4]/40 text-[#4A2D6B]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {years.map((year) => (
              <SelectItem key={year} value={String(year)}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-[#EFE9F5] rounded-2xl p-6 border border-[#B8A8D4]/30">
          <p className="text-[#9B85C4] text-xs uppercase tracking-widest font-semibold mb-1">
            Total Revenue
          </p>
          <p className="font-display text-2xl lg:text-3xl font-bold text-[#4A2D6B]">
            ₱{totalRevenue.toFixed(2)}
          </p>
        </div>
        <div className="bg-[#EFE9F5] rounded-2xl p-6 border border-[#B8A8D4]/30">
          <p className="text-[#9B85C4] text-xs uppercase tracking-widest font-semibold mb-1">
            Total Orders
          </p>
          <p className="font-display text-2xl lg:text-3xl font-bold text-[#4A2D6B]">
            {yearOrders.length}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="font-display text-sm font-semibold text-[#4A2D6B] mb-3">
            Monthly Revenue
          </h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#EFE9F5" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#9B85C4" }} />
              <YAxis tick={{ fontSize: 12, fill: "#9B85C4" }} />
              <Tooltip
                formatter={(value: number) => [`₱${value.toFixed(2)}`, "Revenue"]}
              />
              <Bar dataKey="revenue" fill="#4A2D6B" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-[#4A2D6B] mb-3">
            Monthly Orders
          </h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#EFE9F5" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#9B85C4" }} />
              <YAxis tick={{ fontSize: 12, fill: "#9B85C4" }} allowDecimals={false} />
              <Tooltip formatter={(value: number) => [value, "Orders"]} />
              <Bar dataKey="orders" fill="#9B85C4" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
