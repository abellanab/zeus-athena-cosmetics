import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ProductsSection from "@/components/home/ProductsSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import FAQSection from "@/components/home/FAQSection";

/*
 * HOME PAGE — Zeus and Athena House of Cosmetics Corp.
 * Matches reference video design:
 * - All sections share the same #EDF1E8 background (no wave dividers needed)
 * - Sections flow seamlessly top to bottom
 * - Full-width testimonial image section in the middle
 */

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <CategoriesSection />
      <TestimonialSection />
      <FAQSection />
    </div>
  );
}
