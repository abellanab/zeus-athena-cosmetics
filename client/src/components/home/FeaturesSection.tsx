import AnimateOnScroll from "@/components/AnimateOnScroll";
import { motion } from "framer-motion";
import { Leaf, Sun, Heart, Award, ArrowRight } from "lucide-react";

/*
 * FEATURES SECTION — "Your Skin Deserves The Best Care"
 * Matches reference video design:
 * - Left column: header, description, numbered list (01/02/03)
 * - Right column: large portrait image
 * - Floating circular award badge
 * - Bottom: "SINCE 2001" left, "LEARN MORE" with arrow right
 */

const features = [
  {
    number: "01",
    title: "Bio Ingredients",
    description: "Sourced from the finest botanical gardens, our ingredients are 100% natural and sustainably harvested.",
  },
  {
    number: "02",
    title: "Everything Natural",
    description: "No parabens, no sulfates, no synthetic fragrances. Just pure, nature-powered formulations.",
  },
  {
    number: "03",
    title: "All Handmade",
    description: "Each product is carefully crafted by hand in small batches to ensure the highest quality and freshness.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#EDF1E8] py-24 lg:py-32 relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column — Content */}
          <div>
            <AnimateOnScroll delay={0.1}>
              <p className="text-xs text-[#1A1A1A]/50 uppercase tracking-widest mb-3">
                Why Choose Us
              </p>
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1A1A1A] mb-4 leading-tight">
                Your Skin Deserves
                <br />
                <span className="text-[#1A1A1A]/70">The Best Care</span>
              </h2>
              <p className="text-[#1A1A1A]/60 text-base lg:text-lg mb-10 max-w-md leading-relaxed">
                We believe beauty should be simple, natural, and effective. Every formula is a testament to our commitment.
              </p>
            </AnimateOnScroll>

            <div className="space-y-5">
              {features.map((feature, i) => (
                <AnimateOnScroll key={feature.number} delay={0.15 + i * 0.1} direction="right">
                  <div className="flex items-start gap-4 group">
                    <span className="flex-shrink-0 text-2xl font-bold text-[#1A1A1A]/20 font-display w-10">
                      {feature.number}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-[#1A1A1A] mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-[#1A1A1A]/60 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Right Column — Image + Badge */}
          <AnimateOnScroll direction="left" duration={0.7}>
            <div className="relative">
              <img
                src="/manus-storage/about-section_549fd6d9.png"
                alt="Natural skincare with gold treatment"
                className="w-full rounded-2xl object-cover shadow-xl"
                style={{ aspectRatio: "4/5" }}
              />

              {/* Floating Award Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 -right-4 lg:-right-8 w-32 h-32 rounded-full bg-[#2D3A30] flex flex-col items-center justify-center text-white shadow-xl"
              >
                <Award className="w-6 h-6 mb-1" />
                <p className="text-[9px] font-semibold uppercase text-center leading-tight px-2">
                  Best Skin Care<br />Product<br />Award Winning
                </p>
              </motion.div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Bottom Bar — SINCE 2001 + LEARN MORE */}
        <AnimateOnScroll delay={0.3}>
          <div className="flex items-center justify-between mt-12 lg:mt-16 pt-8 border-t border-[#1A1A1A]/10">
            <span className="text-xs font-semibold text-[#1A1A1A]/40 uppercase tracking-widest">
              Since 2001
            </span>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#1A1A1A] uppercase tracking-widest hover:text-[#1A1A1A]/70 transition-colors group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
