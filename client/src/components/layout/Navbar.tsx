import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, User, Search } from "lucide-react";

/*
 * NAVBAR — Zeus and Athena House of Cosmetics Corp.
 * Design: Botanical Editorial
 * - Sticky header, transparent over hero, solid sage on scroll
 * - Mobile hamburger menu with slide-down animation
 * - Clean, minimal navigation links
 */

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-sage/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="container flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/manus-storage/logo_4b385619.png"
              alt="Zeus & Athena Logo"
              className="w-8 h-8 lg:w-10 lg:h-10 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-display text-lg lg:text-xl font-semibold tracking-wide text-forest">
              Zeus & Athena
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold ${
                  location === link.href
                    ? "text-forest border-b-2 border-gold pb-0.5"
                    : "text-forest/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Utility Icons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-forest/5 transition-colors btn-active" aria-label="Search">
              <Search className="w-5 h-5 text-forest" />
            </button>
            <button className="p-2 rounded-full hover:bg-forest/5 transition-colors btn-active" aria-label="Account">
              <User className="w-5 h-5 text-forest" />
            </button>
            <button className="p-2 rounded-full hover:bg-forest/5 transition-colors btn-active relative" aria-label="Cart">
              <ShoppingBag className="w-5 h-5 text-forest" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold rounded-full text-[10px] font-bold text-ivory flex items-center justify-center">
                0
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-full hover:bg-forest/5 transition-colors btn-active"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <X className="w-6 h-6 text-forest" />
            ) : (
              <Menu className="w-6 h-6 text-forest" />
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
            className="fixed inset-0 z-40 bg-forest/30 backdrop-blur-sm lg:hidden"
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
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] z-50 bg-ivory shadow-2xl lg:hidden"
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
                      className={`block py-3 px-4 text-lg font-medium transition-colors rounded-lg ${
                        location === link.href
                          ? "text-forest bg-sage/50"
                          : "text-forest/70 hover:text-forest hover:bg-sage/30"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-4 px-4">
                <button className="p-3 rounded-full bg-sage/30 hover:bg-sage/50 transition-colors btn-active" aria-label="Search">
                  <Search className="w-5 h-5 text-forest" />
                </button>
                <button className="p-3 rounded-full bg-sage/30 hover:bg-sage/50 transition-colors btn-active" aria-label="Account">
                  <User className="w-5 h-5 text-forest" />
                </button>
                <button className="p-3 rounded-full bg-sage/30 hover:bg-sage/50 transition-colors btn-active relative" aria-label="Cart">
                  <ShoppingBag className="w-5 h-5 text-forest" />
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold rounded-full text-[10px] font-bold text-ivory flex items-center justify-center">
                    0
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
