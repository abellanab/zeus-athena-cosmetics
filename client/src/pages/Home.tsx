import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProductsSection from "@/components/home/ProductsSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import FAQSection from "@/components/home/FAQSection";

/*
 * HOME PAGE — Zeus and Athena House of Cosmetics Corp.
 * Design: Brand Purple/Lavender/Marble
 * All sections are split into separate TSX files for clean architecture.
 * Wave dividers between sections for organic transitions.
 */

const WaveDivider = ({ color, flip = false }: { color: string; flip?: boolean }) => (
  <svg
    viewBox="0 0 1440 120"
    className={`wave-divider ${flip ? "rotate-180" : ""}`}
    preserveAspectRatio="none"
    style={{ height: "60px" }}
  >
    <path
      d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,40 1440,40 L1440,120 L0,120 Z"
      fill={color}
    />
  </svg>
);

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />

      {/* Wave: Lavender-Light → Cream */}
      <div className="relative z-10 -mt-px">
        <WaveDivider color="oklch(0.98 0.008 85)" />
      </div>

      <FeaturesSection />

      {/* Wave: Cream → Lavender-Light */}
      <div className="relative z-10 -mt-px">
        <WaveDivider color="oklch(0.9 0.03 300)" />
      </div>

      <ProductsSection />

      {/* Wave: Lavender-Light → Cream */}
      <div className="relative z-10 -mt-px">
        <WaveDivider color="oklch(0.98 0.008 85)" />
      </div>

      <CategoriesSection />

      {/* Wave: Cream → Purple (Testimonial bg) */}
      <div className="relative z-10 -mt-px">
        <WaveDivider color="oklch(0.42 0.1 300)" />
      </div>

      <TestimonialSection />

      {/* Wave: Purple → Lavender-Light (FAQ bg) */}
      <div className="relative z-10 -mt-px rotate-180">
        <WaveDivider color="oklch(0.9 0.03 300)" />
      </div>

      <FAQSection />
    </div>
  );
}
