import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Leaf, Award, Heart, Shield } from "lucide-react";

/*
 * ABOUT PAGE — Zeus and Athena House of Cosmetics Corp.
 * Design: Botanical Editorial
 * - Brand story with imagery
 * - Core values
 * - Team/ingredients highlight
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
    <div className="pt-24 pb-16">
      {/* Hero Banner */}
      <section className="bg-sage py-16 lg:py-24 relative overflow-hidden">
        <span className="watermark top-10 right-0 hidden lg:block">STORY</span>
        <div className="container relative z-10">
          <AnimateOnScroll>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-forest mb-3">
              Our <span className="italic text-forest/70">Story</span>
            </h1>
            <p className="text-forest/60 text-base lg:text-lg max-w-xl">
              Where ancient beauty meets modern skincare science. A journey rooted in nature and powered by wisdom.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="bg-ivory py-16 lg:py-24 relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimateOnScroll direction="left" duration={0.7}>
              <img
                src="/manus-storage/about-section_d992e39c.png"
                alt="Our story"
                className="w-full rounded-2xl shadow-xl"
              />
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <span className="text-gold text-sm font-medium tracking-wider uppercase mb-3 block">
                Our Heritage
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-forest mb-6 leading-tight">
                Born from a Belief in
                <span className="italic text-forest/70"> Nature's Power</span>
              </h2>
              <div className="space-y-4 text-forest/60 text-base leading-relaxed">
                <p>
                  Zeus and Athena House of Cosmetics Corp. was founded on a simple yet powerful belief: that the best skincare comes from nature itself. Drawing inspiration from both the strength of Zeus and the wisdom of Athena, we craft formulations that combine botanical purity with scientific precision.
                </p>
                <p>
                  Our journey began in a small studio where natural ingredients were carefully selected, hand-blended, and lovingly packaged. Today, we remain committed to that same philosophy — every product that bears our name is a testament to our dedication to quality, transparency, and sustainability.
                </p>
                <p>
                  We believe that beauty should be accessible, honest, and kind — to your skin and to the earth. That's why every ingredient in our products can be traced back to its source, and every package is designed with minimal environmental impact.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-sage-light py-16 lg:py-24">
        <div className="container">
          <AnimateOnScroll className="text-center mb-14">
            <span className="text-gold text-sm font-medium tracking-wider uppercase mb-3 block">
              What We Stand For
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-forest">
              Our Core Values
            </h2>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimateOnScroll key={value.title} delay={i * 0.1}>
                <div className="bg-ivory rounded-2xl p-6 lg:p-8 text-center group hover:shadow-lg transition-shadow duration-500">
                  <div className="w-14 h-14 rounded-xl bg-sage/50 flex items-center justify-center mx-auto mb-4 group-hover:bg-sage transition-colors duration-300">
                    <value.icon className="w-6 h-6 text-forest" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-forest mb-2">
                    {value.title}
                  </h3>
                  <p className="text-forest/60 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredients Promise */}
      <section className="bg-ivory py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <span className="text-gold text-sm font-medium tracking-wider uppercase mb-3 block">
                Our Promise
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-forest mb-6 leading-tight">
                Ingredients You Can
                <span className="italic text-forest/70"> Trust</span>
              </h2>
              <p className="text-forest/60 text-base leading-relaxed mb-6">
                We source only the finest botanical ingredients from sustainable farms and ethical suppliers. Each ingredient is carefully selected for its proven benefits and purity.
              </p>
              <div className="space-y-4">
                {["Rosehip Oil — Rich in vitamins A and C", "Hyaluronic Acid — Deep hydration", "Jojoba Extract — Balances natural oils", "Green Tea — Powerful antioxidant"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-forest/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2} direction="right">
              <img
                src="/manus-storage/product-hero_297ac857.png"
                alt="Natural ingredients"
                className="w-full rounded-2xl shadow-xl"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
