import AnimateOnScroll from "@/components/AnimateOnScroll";

/*
 * TESTIMONIAL SECTION
 * Matches reference video design:
 * - Full-width image of woman partially obscured by large green leaf
 * - White centered overlay box with text "Feel Beautiful Inside and Out with Every Product."
 */

export default function TestimonialSection() {
  return (
    <section className="relative py-0 overflow-hidden">
      {/* Full-width Background Image */}
      <div className="relative w-full" style={{ height: "70vh", minHeight: "400px" }}>
        <img
          src="/manus-storage/testimonial-bg_77b486f5.png"
          alt="Feel beautiful with natural skincare"
          className="w-full h-full object-cover"
        />

        {/* Centered White Overlay Box */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <AnimateOnScroll>
            <div className="bg-white rounded-2xl px-8 py-10 lg:px-14 lg:py-14 max-w-lg text-center shadow-2xl">
              <h2 className="font-display text-xl lg:text-2xl xl:text-3xl font-bold text-[#1A1A1A] leading-snug">
                Feel Beautiful Inside and Out with Every Product.
              </h2>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
