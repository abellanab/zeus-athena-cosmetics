import { Link } from "wouter";
import { Facebook, Instagram } from "lucide-react";

/*
 * FOOTER — Zeus and Athena House of Cosmetics Corp.
 * Matches reference video design:
 * - Dark green #2D3A30 background
 * - "Join The Skincare Community Now" heading
 * - Newsletter signup
 * - Social links (Facebook, Instagram, Tiktok)
 * - Legal links (Terms, Privacy, Cookies)
 * - Massive outlined "SKINCARE" text at bottom
 */

export default function Footer() {
  return (
    <footer className="bg-[#2D3A30] text-white overflow-hidden relative">
      {/* Newsletter Section */}
      <div className="container py-20 lg:py-28">
        <div className="max-w-xl mx-auto text-center mb-16">
          <p className="text-xs text-white/50 uppercase tracking-widest mb-3">
            Newsletter
          </p>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4">
            Join The Zeus & Athena<br />Community Now
          </h2>
          <p className="text-white/60 text-sm lg:text-base mb-8">
            Get exclusive access to new collections, skincare tips, and special offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/15 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-white/30 transition-colors"
            />
            <button className="px-7 py-3.5 bg-white text-[#2D3A30] font-semibold text-sm rounded-full hover:bg-white/90 transition-colors btn-active whitespace-nowrap">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Links Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors font-medium">
              Facebook
            </Link>
            <Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors font-medium">
              Instagram
            </Link>
            <Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors font-medium">
              Tiktok
            </Link>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Terms
            </Link>
            <Link href="/about" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Privacy
            </Link>
            <Link href="/about" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>

      {/* Massive Outlined ZEUS & ATHENA Text */}
      <div className="py-4 overflow-hidden">
        <div className="text-center">
          <span
            className="block font-display font-black uppercase tracking-tight leading-none"
            style={{
              fontSize: "clamp(3rem, 10vw, 8rem)",
              color: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.12)",
            }}
          >
            Zeus & Athena
          </span>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="container py-4 flex items-center justify-between">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Zeus and Athena House of Cosmetics Corp.
          </p>
          <p className="text-xs text-white/30">
            contact.skincare.com
          </p>
        </div>
      </div>
    </footer>
  );
}
