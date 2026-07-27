import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ShoppingBag, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { useRef } from "react";

/*
 * PRODUCTS SECTION — "Skincare That Brings Out Your Natural Radiance"
 * Matches reference video design:
 * - Header with section title + circular arrow navigation buttons
 * - 3-column grid layout
 * - Cards in 3D "shelf/niche" effect with inset shadow
 * - Product name (uppercase), price "FROM $X.XX", small cart button
 */

const products = [
  {
    id: 1,
    name: "LUMINOUS SERUM",
    price: "$28.00",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop&crop=center",
  },
  {
    id: 2,
    name: "HYDRA MOISTURIZER",
    price: "$35.00",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500&h=500&fit=crop&crop=center",
  },
  {
    id: 3,
    name: "GENTLE CLEANSER",
    price: "$22.00",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop&crop=center",
  },
  {
    id: 4,
    name: "ROSE FACE OIL",
    price: "$42.00",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop&crop=center",
  },
  {
    id: 5,
    name: "VITAMIN C SERUM",
    price: "$38.00",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&h=500&fit=crop&crop=center",
  },
  {
    id: 6,
    name: "NIGHT REPAIR CREAM",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop&crop=center",
  },
];

export default function ProductsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 400;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#EDF1E8] py-24 lg:py-32 relative overflow-hidden">
      <div className="container relative z-10">

        {/* Section Header with Nav Arrows */}
        <AnimateOnScroll className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1A1A1A] leading-tight max-w-lg">
              Skincare That Brings Out
              <br />
              <span className="text-[#1A1A1A]/70">Your Natural Radiance</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all btn-active"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all btn-active"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </AnimateOnScroll>

        {/* Scrollable Product Grid */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 scroll-smooth -mx-5 px-5 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {products.map((product, i) => (
            <AnimateOnScroll key={product.id} delay={i * 0.08}>
              <div className="min-w-[280px] lg:min-w-[320px] flex-shrink-0 snap-start">
                {/* Shelf/Niche Card Effect */}
                <div className="shelf-card p-5 lg:p-6 group">
                  {/* Product Image in Niche */}
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-5 bg-white/40 shadow-inner">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Small Cart Button */}
                    <button className="absolute bottom-3 right-3 w-9 h-9 bg-[#1A1A1A] rounded-lg flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 btn-active">
                      <ShoppingBag className="w-4 h-4 text-white" />
                    </button>
                  </div>

                  {/* Product Info */}
                  <h3 className="font-display text-sm font-bold tracking-wider text-[#1A1A1A] uppercase mb-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/50">
                    FROM {product.price}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* View All CTA */}
        <AnimateOnScroll delay={0.3} className="text-center mt-12">
          <Link href="/products">
            <button className="btn-active inline-flex items-center gap-2 px-7 py-3.5 bg-[#1A1A1A] text-white font-medium text-sm rounded-full hover:bg-[#1A1A1A]/90 transition-all duration-300">
              View All Products
            </button>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
