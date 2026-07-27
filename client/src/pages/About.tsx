import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Leaf, Award, Heart, Shield } from "lucide-react";

/*
 * ABOUT PAGE — Zeus and Athena House of Cosmetics Corp.
 * Matches video style: same #EDF1E8 background, clean editorial layout
 * - Brand story with image
 * - Core values grid
 * - Ingredients section
 */

const values = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Every ingredient is sourced from nature — no synthetic chemicals, no shortcuts.",
  },
  {
    icon: Award,
    title: "Clinically Proven",
    description: "Our formulations are tested and validated by dermatologists and skincare experts.",
  },
  {
    icon: Heart,
    title: "Cruelty Free",
    description: "We never test on animals. Our commitment to beauty never comes at the cost of life.",
  },
  {
    icon: Shield,
    title: "Sustainable",
    description: "From sourcing to packaging, we prioritize the planet in every decision we make.",
  },
];

export default function About() {
  return (
    <div className="pt-16 bg-[#EDF1E8] min-h-screen">
      {/* Page Header */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <AnimateOnScroll>
            <p className="text-xs text-[#1A1A1A]/40 uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A1A1A] mb-3">
              Where Ancient Beauty Meets
              <br />
              <span className="text-[#1A1A1A]/70">Modern Science</span>
            </h1>
            <p className="text-[#1A1A1A]/60 text-base lg:text-lg max-w-xl">
              A journey rooted in nature and powered by wisdom.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimateOnScroll direction="left" duration={0.7}>
              <img
                src="/manus-storage/about-section_549fd6d9.png"
                alt="Our story"
                className="w-full rounded-2xl object-cover shadow-lg"
                style={{ aspectRatio: "4/5", maxHeight: "500px" }}
              />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <p className="text-xs text-[#1A1A1A]/40 uppercase tracking-widest mb-3">
                Our Heritage
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                Born from a Belief in
                <br />
                <span className="text-[#1A1A1A]/70">Nature's Power</span>
              </h2>
              <div className="space-y-4 text-[#1A1A1A]/60 text-base leading-relaxed">
                <p>
                  Zeus and Athena House of Cosmetics Corp. was founded on a simple yet powerful belief: that the best skincare comes from nature itself. Drawing inspiration from both the strength of Zeus and the wisdom of Athena, we craft formulations that combine botanical purity with scientific precision.
                </p>
                <p>
                  Our journey began in a small studio where natural ingredients were carefully selected, hand-blended, and lovingly packaged. Today, we remain committed to that same philosophy — every product that bears our name is a testament to our dedication to quality, transparency, and sustainability.
                </p>
                <p>
                  We believe that beauty should be accessible, honest, and kind — to your skin and to the earth.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 border-t border-[#1A1A1A]/5">
        <div className="container">
          <AnimateOnScroll className="text-center mb-14">
            <p className="text-xs text-[#1A1A1A]/40 uppercase tracking-widest mb-3">
              What We Stand For
            </p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Our Core Values
            </h2>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimateOnScroll key={value.title} delay={i * 0.1}>
                <div className="bg-white/60 rounded-2xl p-6 lg:p-8 text-center group hover:shadow-lg transition-shadow duration-500">
                  <div className="w-14 h-14 rounded-xl bg-[#2D3A30]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2D3A30]/20 transition-colors duration-300">
                    <value.icon className="w-6 h-6 text-[#1A1A1A]" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-[#1A1A1A] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#1A1A1A]/50 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Promise */}
      <section className="py-16 lg:py-24 border-t border-[#1A1A1A]/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <p className="text-xs text-[#1A1A1A]/40 uppercase tracking-widest mb-3">
                Our Promise
              </p>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#1A1A1A] mb-6 leading-tight">
                Ingredients You Can
                <br />
                <span className="text-[#1A1A1A]/70">Trust</span>
              </h2>
              <p className="text-[#1A1A1A]/60 text-base leading-relaxed mb-6">
                We source only the finest botanical ingredients from sustainable farms and ethical suppliers.
              </p>
              <div className="space-y-4">
                {["Rosehip Oil — Rich in vitamins A and C", "Hyaluronic Acid — Deep hydration", "Jojoba Extract — Balances natural oils", "Green Tea — Powerful antioxidant"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#2D3A30] flex-shrink-0" />
                    <span className="text-[#1A1A1A]/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2} direction="right">
              <img
                src="/manus-storage/product-hero_9f70883c.png"
                alt="Natural ingredients"
                className="w-full rounded-2xl object-cover shadow-lg"
                style={{ aspectRatio: "1/1", maxHeight: "400px" }}
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
