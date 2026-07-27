import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Quote } from "lucide-react";

/*
 * TESTIMONIAL SECTION
 * Design: Botanical Editorial
 * - Brand statement with large quotation
 * - Warm ivory background with subtle texture
 */

export default function TestimonialSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/manus-storage/testimonial-bg_9cf658b9.png"
          alt="Natural ingredients close-up"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-purple/85" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <Quote className="w-10 h-10 text-gold/60 mx-auto mb-6" />
            <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-cream leading-relaxed mb-8 italic">
              "We believe that true beauty comes from nature itself. Every product we create is a love letter to your skin — crafted with intention, backed by science, and inspired by the wisdom of the earth."
            </blockquote>
            <div className="w-12 h-0.5 bg-gold/50 mx-auto mb-4" />
            <p className="text-gold text-sm font-medium tracking-wider uppercase">
              Zeus & Athena — Our Philosophy
            </p>
          </AnimateOnScroll>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          {[
            { value: "10K+", label: "Happy Customers" },
            { value: "50+", label: "Products" },
            { value: "100%", label: "Natural" },
            { value: "4.8", label: "Average Rating" },
          ].map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={0.1 * i} className="text-center">
              <p className="font-display text-3xl lg:text-4xl font-bold text-gold mb-1">
                {stat.value}
              </p>
              <p className="text-cream/60 text-xs lg:text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
