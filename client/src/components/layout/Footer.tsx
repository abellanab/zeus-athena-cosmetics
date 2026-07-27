import { Link } from "wouter";
import { Facebook, Instagram } from "lucide-react";

/*
 * FOOTER — Zeus and Athena House of Cosmetics Corp.
 * Design: Brand Purple/Lavender/Marble
 * - Deep purple background for strong visual anchor
 * - Ritual-led brand voice, not generic e-commerce copy
 */

const footerLinks = {
  shop: [
    { label: "All Products", href: "/products" },
    { label: "Skincare Rituals", href: "/products" },
    { label: "Serums", href: "/products" },
    { label: "Curated Bundles", href: "/products" },
  ],
  company: [
    { label: "Our Story", href: "/about" },
    { label: "Ingredients", href: "/about" },
    { label: "Sustainability", href: "/about" },
    { label: "Reach Us", href: "/contact" },
  ],
  support: [
    { label: "Common Questions", href: "/faq" },
    { label: "Shipping & Returns", href: "/faq" },
    { label: "Privacy Policy", href: "/contact" },
    { label: "Terms of Service", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-purple text-cream">
      {/* Newsletter Section */}
      <div className="border-b border-purple-dark/30">
        <div className="container py-16 lg:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-2xl lg:text-3xl font-semibold mb-3">
              Begin Your Ritual
            </h3>
            <p className="text-cream/70 text-sm lg:text-base mb-6 font-body">
              Join our community for skincare wisdom, exclusive offers, and early access to new collections.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-purple-light/30 border border-purple-dark/40 text-cream placeholder:text-cream/50 text-sm focus:outline-none focus:border-gold/60 transition-colors"
              />
              <button className="px-6 py-3 bg-gold text-cream font-medium text-sm rounded-lg hover:bg-gold-light transition-colors btn-active whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/manus-storage/zeus-athena-logo-final_b1173ed0.png"
                alt="Zeus & Athena House of Cosmetics Corp."
                className="h-14 w-auto"
              />
            </div>
            <p className="text-cream/60 text-sm leading-relaxed mb-4">
              Where ancient beauty meets modern skincare science. Crafted with intention, proven by nature.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-purple-light/30 flex items-center justify-center hover:bg-gold/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-cream/80" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-purple-light/30 flex items-center justify-center hover:bg-gold/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-cream/80" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-cream/90 mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-cream/60 hover:text-cream transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-purple-dark/20">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Zeus and Athena House of Cosmetics Corp. All rights reserved.
          </p>
          <p className="text-xs text-cream/40">
            contact@zeusathena.com
          </p>
        </div>
      </div>
    </footer>
  );
}
