import EyebrowPill from "@/components/EyebrowPill";

/*
 * FOOTER — Zeus and Athena House of Cosmetics Corp.
 * Palette: deep purple (#4A2D6B) background, lavender accents
 * - "Join The Zeus & Athena Community Now" heading
 * - Newsletter signup
 * - Social links (Facebook, Tiktok)
 * - Legal links (Terms, Privacy, Cookies)
 * - Massive outlined "ZEUS & ATHENA" watermark at bottom (Cinzel, wide letter-spacing)
 */

export default function Footer() {
  return (
    <footer className="bg-[#4A2D6B] text-white overflow-hidden relative">
      {/* Newsletter Section */}
      <div className="container py-20 lg:py-28">
        <div className="max-w-xl mx-auto text-center mb-16">
          <EyebrowPill variant="dark">Newsletter</EyebrowPill>
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
              className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/15 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#B8A8D4]/60 transition-colors"
            />
            <button className="px-7 py-3.5 bg-white text-[#4A2D6B] font-semibold text-sm rounded-full hover:bg-white/90 transition-colors btn-active whitespace-nowrap">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Links Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61561972694729"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors font-medium"
            >
              Facebook
            </a>
            <a
              href="https://vt.tiktok.com/ZS4day5CJ/?page=TikTokShop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/60 hover:text-white transition-colors font-medium"
            >
              Tiktok
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/40">Terms</span>
            <span className="text-xs text-white/40">Privacy</span>
            <span className="text-xs text-white/40">Cookies</span>
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
              WebkitTextStroke: "1px rgba(184, 168, 212, 0.4)",
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
