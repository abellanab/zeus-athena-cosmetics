import { motion } from "framer-motion";
import { Link } from "wouter";
import { Star, ArrowRight } from "lucide-react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

/*
 * HERO SECTION — Zeus and Athena House of Cosmetics Corp.
 * Design: Botanical Editorial
 * - Full viewport hero with nature/beauty imagery
 * - Brand mission statement, star rating, CTA
 * - Large watermark typography in background
 * - Scroll indicator at bottom
 */

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-sage overflow-hidden">
      {/* Watermark Background Text */}
      <span className="watermark top-1/4 -left-8 hidden md:block">
        COSMETICS
      </span>
      <span className="watermark bottom-1/4 -right-8 hidden lg:block">
        BEAUTY
      </span>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/manus-storage/hero-nature-beauty_cfedc078.png"
          alt="Natural beauty with botanical elements"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage/90 via-sage/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest/10 text-forest text-xs font-medium tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Premium Skincare Collection
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-forest leading-[1.1] mb-6"
          >
            Glow
            <br />
            <span className="italic font-normal text-forest/80">Naturally</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="text-forest/70 text-base lg:text-lg max-w-lg mb-4 leading-relaxed"
          >
            Your skin deserves the ritual it deserves. Discover botanical skincare crafted with intention and proven by nature.
          </motion.p>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-4 h-4 ${
                    star <= 4 ? "fill-gold text-gold" : "fill-gold/30 text-gold"
                  }`}
                />
              ))}
            </div>
            <span className="text-forest/70 text-sm">
              <span className="font-semibold text-forest">4.8</span> / 5 — Loved by thousands
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link href="/products">
              <button className="btn-active inline-flex items-center gap-2 px-7 py-3.5 bg-forest text-ivory font-medium text-sm rounded-lg hover:bg-forest-light transition-all duration-300 shadow-lg shadow-forest/20">
                Shop Collection
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/about">
              <button className="btn-active inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-forest font-medium text-sm rounded-lg border border-forest/20 hover:border-forest/40 hover:bg-forest/5 transition-all duration-300">
                Our Story
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Product Teaser Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="hidden lg:block absolute right-12 xl:right-24 top-1/2 -translate-y-1/2"
        >
          <div className="relative">
            <img
              src="/manus-storage/product-hero_297ac857.png"
              alt="Premium cosmetics collection"
              className="w-64 xl:w-80 rounded-2xl shadow-2xl shadow-forest/20"
            />
            <div className="absolute -bottom-4 -left-4 bg-ivory rounded-xl px-4 py-3 shadow-lg">
              <p className="text-xs text-forest/60 mb-0.5">Best Seller</p>
              <p className="text-sm font-semibold text-forest">Botanical Serum</p>
            </div>
          </div>
        </motion.div>
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
          className="w-6 h-10 rounded-full border-2 border-forest/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-forest/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
