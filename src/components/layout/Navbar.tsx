"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, User, Search } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";

/*
 * NAVBAR — Zeus and Athena House of Cosmetics Corp.
 * Palette: deep purple (#4A2D6B) header, lavender accents
 * - Logo: "ZEUS & ATHENA" in Cinzel with wide letter-spacing, all caps
 * - Center: Nav links in sentence case
 * - Right: Search, User, Cart icons
 */

const navLinks = [
  { label: "All products", href: "/products" },
  { label: "Serum", href: "/products?cat=serum" },
  { label: "Sunscreen", href: "/products?cat=sunscreen" },
  { label: "Bundle", href: "/products?cat=bundle" },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const cartItemCount = useCartStore((s) => s.itemCount);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#4A2D6B]">
        <nav className="container flex items-center justify-between h-16 lg:h-18">
          {/* Logo — Zeus & Athena brand name (Cinzel, wide letter-spacing, all caps) */}
          <Link href="/" className="flex items-center group">
            <span className="text-white font-display text-sm lg:text-base font-bold tracking-[0.3em] uppercase group-hover:opacity-90 transition-opacity">
              Zeus & Athena
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Utility Icons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="p-2 text-white/80 hover:text-white transition-colors btn-active" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-white/80 hover:text-white transition-colors btn-active" aria-label="Account">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 text-white/80 hover:text-white transition-colors btn-active relative" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#9B85C4] rounded-full text-[9px] font-bold text-white flex items-center justify-center">
                {cartItemCount}
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-white btn-active"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] z-50 bg-[#4A2D6B] shadow-2xl lg:hidden"
          >
            <div className="flex flex-col h-full pt-20 pb-8 px-6">
              <div className="flex flex-col gap-1 mb-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-3 px-4 text-base font-medium text-white/70 hover:text-white transition-colors rounded-lg"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + 4 * 0.05 }}
                >
                  <Link href="/" className="block py-3 px-4 text-base font-medium text-white/70 hover:text-white transition-colors rounded-lg">
                    Home
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + 5 * 0.05 }}
                >
                  <Link href="/about" className="block py-3 px-4 text-base font-medium text-white/70 hover:text-white transition-colors rounded-lg">
                    About Us
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + 6 * 0.05 }}
                >
                  <Link href="/faq" className="block py-3 px-4 text-base font-medium text-white/70 hover:text-white transition-colors rounded-lg">
                    FAQ
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + 7 * 0.05 }}
                >
                  <Link href="/contact" className="block py-3 px-4 text-base font-medium text-white/70 hover:text-white transition-colors rounded-lg">
                    Contact
                  </Link>
                </motion.div>
              </div>

              <div className="mt-auto flex items-center gap-4 px-4">
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors btn-active" aria-label="Search">
                  <Search className="w-5 h-5 text-white" />
                </button>
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors btn-active" aria-label="Account">
                  <User className="w-5 h-5 text-white" />
                </button>
                <button className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors btn-active relative" aria-label="Cart">
                  <ShoppingBag className="w-5 h-5 text-white" />
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#9B85C4] rounded-full text-[9px] font-bold text-white flex items-center justify-center">
                    {cartItemCount}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
