"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, ClipboardList, Package } from "lucide-react";
import EyebrowPill from "@/components/EyebrowPill";

const navItems = [
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin/orders", label: "Order History", icon: ClipboardList },
  { href: "/admin/products", label: "Manage Products", icon: Package },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="pt-16 bg-white min-h-screen">
      <section className="py-16 lg:py-20">
        <div className="container">
          <EyebrowPill>Admin</EyebrowPill>
          <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-[#4A2D6B] mb-3">
            Admin <span className="text-[#4A2D6B]/70">Dashboard</span>
          </h1>
          <p className="text-[#9B85C4] text-base lg:text-lg max-w-xl leading-relaxed">
            Manage orders and the storefront product catalog.
          </p>
        </div>
      </section>

      <div className="container pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8">
          <aside>
            <nav className="flex lg:flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full lg:rounded-xl text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-[#4A2D6B] text-white"
                        : "text-[#4A2D6B]/70 hover:bg-[#EFE9F5]"
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </aside>

          <div className="min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
}
