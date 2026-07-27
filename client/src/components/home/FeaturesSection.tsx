import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Leaf, Sun, Heart } from "lucide-react";

/*
 * FEATURES SECTION — "Your Skin Deserves The Best Care"
 * Design: Botanical Editorial
 * - Numbered list (01, 02, 03) with icons and descriptions
 * - Side image for visual balance
 */

const features = [
  {
    number: "01",
    title: "Bio Ingredients",
    description: "Sourced from the finest botanical gardens, our ingredients are 100% natural and sustainably harvested.",
    icon: Leaf,
  },
  {
    number: "02",
    title: "Everything Natural",
    description: "No parabens, no sulfates, no synthetic fragrances. Just pure, nature-powered formulations.",
    icon: Sun,
  },
  {
    number: "03",
    title: "All Handmade",
    description: "Each product is carefully crafted by hand in small batches to ensure the highest quality and freshness.",
    icon: Heart,
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-ivory relative py-20 lg:py-28 overflow-hidden">
      {/* Watermark */}
      <span className="watermark top-10 right-0 hidden lg:block">
        CARE
      </span>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <AnimateOnScroll direction="left" duration={0.7}>
            <div className="relative">
              <img
                src="/manus-storage/products-carousel_d0afb68f.png"
                alt="Natural skincare ingredients"
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sage rounded-2xl -z-10" />
            </div>
          </AnimateOnScroll>

          {/* Content Column */}
          <div>
            <AnimateOnScroll delay={0.1}>
              <span className="text-gold text-sm font-medium tracking-wider uppercase mb-3 block">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-forest mb-4 leading-tight">
                Your Skin Deserves
                <br />
                <span className="italic text-forest/70">The Best Care</span>
              </h2>
              <p className="text-forest/60 text-base lg:text-lg mb-10 max-w-md">
                We believe beauty should be simple, natural, and effective. Every formula is a testament to our commitment.
              </p>
            </AnimateOnScroll>

            <div className="space-y-6">
              {features.map((feature, i) => (
                <AnimateOnScroll key={feature.number} delay={0.15 + i * 0.1} direction="right">
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sage/50 flex items-center justify-center group-hover:bg-sage transition-colors duration-300">
                      <feature.icon className="w-5 h-5 text-forest" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-gold tracking-wider">{feature.number}</span>
                        <h3 className="font-display text-lg font-semibold text-forest">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-forest/60 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
