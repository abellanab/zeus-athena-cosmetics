"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";

/*
 * TESTIMONIAL SECTION
 * Palette: white background, deep purple text, lavender accents
 * - Full-width image of woman partially obscured by large leaf
 * - White centered overlay box with text "Feel Beautiful Inside and Out with Every Product."
 */

export default function TestimonialSection() {
  return (
    <section className="relative py-0 overflow-hidden">
      {/* Full-width Background Image */}
      <div className="relative w-full h-[80vh]">
        <img
          src="/Product photos/download.png"
          alt="Feel beautiful with natural skincare"
          className="w-full h-full object-cover object-[64%_79%]"
        />

        {/* Centered White Overlay Box */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <AnimateOnScroll>
            <div className="bg-white rounded-2xl px-8 py-10 lg:px-14 lg:py-14 max-w-lg text-center shadow-2xl border border-[#B8A8D4]/40">
              <h2 className="font-display text-xl lg:text-2xl xl:text-3xl font-bold text-[#4A2D6B] leading-snug">
                Feel Beautiful Inside and Out with Every Product.
              </h2>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
