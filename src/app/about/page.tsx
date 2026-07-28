import AnimateOnScroll from "@/components/AnimateOnScroll";
import EyebrowPill from "@/components/EyebrowPill";
import { Leaf, Award, Heart, Shield } from "lucide-react";

/*
 * ABOUT PAGE — Zeus and Athena House of Cosmetics Corp.
 * Palette: white background, deep purple text, lavender accents
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
    <div className="pt-16 bg-white min-h-screen">
      {/* Page Header */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <AnimateOnScroll>
            <EyebrowPill>Our Story</EyebrowPill>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-[#4A2D6B] mb-3">
              Where Ancient Beauty Meets
              <br />
              <span className="text-[#4A2D6B]/70">Modern Science</span>
            </h1>
            <p className="text-[#9B85C4] text-base lg:text-lg max-w-xl">
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
                src="/Product photos/logo&name.jpg"
                alt="Our story"
                className="w-full max-w-md mx-auto rounded-2xl shadow-lg"
                style={{ aspectRatio: "2/3", maxHeight: "500px" }}
              />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <EyebrowPill>Our Heritage</EyebrowPill>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#4A2D6B] mb-6 leading-tight">
                Born from a Belief in
                <br />
                <span className="text-[#4A2D6B]/70">Nature's Power</span>
              </h2>
              <div className="space-y-4 text-[#4A2D6B]/70 text-base leading-relaxed">
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
      <section className="py-16 lg:py-24 border-t border-[#B8A8D4]/30">
        <div className="container">
          <AnimateOnScroll className="text-center mb-14">
            <EyebrowPill>What We Stand For</EyebrowPill>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#4A2D6B]">
              Our Core Values
            </h2>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimateOnScroll key={value.title} delay={i * 0.1}>
                <div className="bg-[#EFE9F5] rounded-2xl p-6 lg:p-8 text-center group hover:shadow-lg transition-shadow duration-500">
                  <div className="w-14 h-14 rounded-xl bg-[#9B85C4]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#9B85C4]/30 transition-colors duration-300">
                    <value.icon className="w-6 h-6 text-[#4A2D6B]" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-[#4A2D6B] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-[#9B85C4] text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Promise */}
      <section className="py-16 lg:py-24 border-t border-[#B8A8D4]/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <EyebrowPill>Our Promise</EyebrowPill>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#4A2D6B] mb-6 leading-tight">
                Ingredients You Can
                <br />
                <span className="text-[#4A2D6B]/70">Trust</span>
              </h2>
              <p className="text-[#4A2D6B]/70 text-base leading-relaxed mb-6">
                We source only the finest botanical ingredients from sustainable farms and ethical suppliers.
              </p>
              <div className="space-y-4">
                {["Rosehip Oil — Rich in vitamins A and C", "Hyaluronic Acid — Deep hydration", "Jojoba Extract — Balances natural oils", "Green Tea — Powerful antioxidant"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#4A2D6B] flex-shrink-0" />
                    <span className="text-[#4A2D6B]/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2} direction="right">
              <img
                src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=600&fit=crop"
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
