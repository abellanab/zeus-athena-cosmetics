"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Star, CheckCircle2 } from "lucide-react";

/*
 * HERO SECTION — Zeus and Athena House of Cosmetics Corp.
 * Palette derived from official logo:
 * - White background, deep purple (#4A2D6B) text, light lavender (#9B85C4) accents
 * - Massive outlined "ZEUS & ATHENA" watermark behind content (Cinzel, wide letter-spacing)
 * - Row 1: large ambassador photo (left, with floating "Proven Effectiveness" badge)
 *   beside two stacked product macro-shot cards (right)
 * - Row 2: centered headline + supporting copy + CTA, with star rating alongside the CTA
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
      <div className="container relative z-10 py-16 lg:py-20">

        {/* Row 1 — Headline (left) + Rating (right), inline */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 lg:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-[#4A2D6B] leading-tight mb-6">
              Your Skin
              <br />
              <span className="text-[#4A2D6B]/70">Deserves The Ritual</span>
            </h1>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-[#4A2D6B]">4.8</span>
              <Star className="w-5 h-5 fill-[#4A2D6B] text-[#4A2D6B]" />
              <span className="text-sm text-[#4A2D6B]/60">(2,524)</span>
            </div>
          </motion.div>
        </div>

        {/* Row 2 — Ambassador Photo + Two Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 lg:h-[560px]">
          {/* Left — Ambassador Photo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="relative aspect-[4/5] lg:aspect-auto lg:h-full"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Product photos/kyra.jpg"
                alt="Zeus & Athena ambassador with Arbutin Soap"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[45%_22%]"
              />
            </div>

            {/* Floating Proven Effectiveness Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.23, 1, 0.32, 1] }}
              className="absolute -bottom-4 -left-4 lg:-left-6 bg-white rounded-xl px-4 py-3 shadow-xl max-w-[220px] border border-[#B8A8D4]/40 flex items-start gap-3"
            >
              <CheckCircle2 className="w-8 h-8 text-[#4A2D6B] flex-shrink-0" />
              <div>
                <p className="font-display text-xs font-bold text-[#4A2D6B] mb-0.5">
                  Proven Effectiveness
                </p>
                <p className="text-[10px] text-[#4A2D6B]/60 leading-snug">
                  Every product is carefully crafted by hand in small batches.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Two Stacked Product Cards */}
          <div className="flex flex-col gap-6 h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="group relative flex-1 aspect-[16/10] lg:aspect-auto rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/Product photos/arbutinsoap.jpg"
                alt="Arbutin Soap — dewy & polished skin"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[50%_55%] group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="group relative flex-1 aspect-[16/10] lg:aspect-auto rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/Product photos/charcoal.jpg"
                alt="Charcoal Soap — matte & refined skin"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[50%_55%] group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:flex"
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
