"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star } from "lucide-react";

/*
 * HERO SECTION — Zeus and Athena House of Cosmetics Corp.
 * Palette derived from official logo:
 * - White background, deep purple (#4A2D6B) text, light lavender (#9B85C4) accents
 * - Massive outlined "ZEUS & ATHENA" watermark behind content (Cinzel, wide letter-spacing)
 * - Intro paragraph top-left
 * - "Shop Now" pill-shaped CTA bottom-left
 * - Vertical rectangular image center
 * - Floating product card overlapping bottom-left of image
 * - Product jar inset top-right
 * - Rating 4.8/5 bottom-right
 */

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-16">
      {/* Massive Solid ZEUS & ATHENA Wordmark — bottom-anchored, overlapped by hero content */}
      <div
        className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display font-black uppercase tracking-tight leading-[0.85] select-none text-[#4A2D6B]/[0.08]"
          style={{ fontSize: "clamp(5rem, 18vw, 22rem)" }}
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
              <p className="text-sm text-[#4A2D6B]/60 leading-relaxed max-w-xs mb-8">
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
                <button className="btn-active inline-flex items-center gap-2 px-8 py-3.5 bg-[#4A2D6B] text-white font-medium text-sm rounded-full hover:bg-[#5B3A7A] transition-all duration-300">
                  Shop Now
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
            <div className="relative w-full max-w-sm lg:max-w-md">
              <video
                src="/Product photos/soapanimation.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[5/7] rounded-2xl object-cover shadow-lg"
              />

              {/* Floating Product Card — overlaps bottom-left of image */}
              
            </div>
          </motion.div>

          {/* Right Column — Product Jar + Rating */}
          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-8">
            {/* Product Jar Inset — top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="w-36 h-36 rounded-2xl overflow-hidden shadow-lg border border-[#B8A8D4]/40"
            >
              <img
                src="/Product photos/logo&name.jpg"
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
                <span className="text-2xl font-bold text-[#4A2D6B]">4.8</span>
                <Star className="w-5 h-5 fill-[#4A2D6B] text-[#4A2D6B]" />
                <span className="text-sm text-[#4A2D6B]/60">(2,524)</span>
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
          className="w-6 h-10 rounded-full border-2 border-[#9B85C4]/40 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#4A2D6B]/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
