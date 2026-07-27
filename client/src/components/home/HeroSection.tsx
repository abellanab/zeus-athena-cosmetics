import { motion } from "framer-motion";
import { Link } from "wouter";
import { Star } from "lucide-react";

/*
 * HERO SECTION — Zeus and Athena House of Cosmetics Corp.
 * Matches reference video design:
 * - Light cream background (#EDF1E8)
 * - Massive outlined "SKINCARE" text behind content
 * - Intro paragraph top-left
 * - "Show Now" pill-shaped CTA bottom-left
 * - Vertical rectangular image center
 * - Floating product card overlapping bottom-left of image
 * - Product jar inset top-right
 * - Rating 4.8/5 bottom-right
 */

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#EDF1E8] overflow-hidden pt-16">
      {/* Massive Outlined ZEUS & ATHENA Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          className="font-display font-black uppercase tracking-tight leading-none select-none"
          style={{
            fontSize: "clamp(5rem, 18vw, 22rem)",
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(45, 58, 48, 0.06)",
          }}
        >
          Zeus & Athena
        </span>
      </div>

      {/* Content */}
      <div className="container relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 w-full">

          {/* Left Column — Text + CTA */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <p className="text-sm text-[#1A1A1A]/60 leading-relaxed max-w-xs mb-8">
                Your skin deserves the ritual it deserves. Discover botanical skincare crafted with intention and proven by nature.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="mt-auto pb-8"
            >
              <Link href="/products">
                <button className="btn-active inline-flex items-center gap-2 px-8 py-3.5 bg-[#1A1A1A] text-white font-medium text-sm rounded-full hover:bg-[#1A1A1A]/90 transition-all duration-300">
                  Show Now
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Center — Vertical Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-4 flex justify-center items-center"
          >
            <div className="relative">
              <img
                src="/manus-storage/hero-nature-beauty_4acff4e3.png"
                alt="Natural beauty with botanical elements"
                className="w-full max-w-sm lg:max-w-md rounded-2xl object-cover shadow-lg"
                style={{ aspectRatio: "3/4" }}
              />

              {/* Floating Product Card — overlaps bottom-left of image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="absolute -bottom-4 -left-8 lg:-left-12 bg-white rounded-xl px-4 py-3 shadow-xl max-w-[200px]"
              >
                <p className="text-[10px] text-[#1A1A1A]/50 leading-snug">
                  While giving you an invigorating cleansing experience.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column — Product Jar + Rating */}
          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-8">
            {/* Product Jar Inset — top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="w-36 h-36 rounded-2xl overflow-hidden shadow-lg border border-white/50"
            >
              <img
                src="/manus-storage/product-hero_9f70883c.png"
                alt="Featured product"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Rating — bottom right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="mt-auto pb-8"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-[#1A1A1A]">4.8</span>
                <Star className="w-5 h-5 fill-[#1A1A1A] text-[#1A1A1A]" />
                <span className="text-sm text-[#1A1A1A]/60">(2,524)</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-[#1A1A1A]/15 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
