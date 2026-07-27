import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Link } from "wouter";

/*
 * CATEGORIES SECTION — "Feel Beautiful"
 * Matches reference video design:
 * - Pill-shaped tabs: NEW ARRIVAL, CLEANING, ACNE FIGHTER, ANTI-AGING
 * - 3-column grid with flat background (no shelf effect)
 * - Product cards with image, name, price
 */

const categories = [
  { id: "all", label: "NEW ARRIVAL" },
  { id: "cleansing", label: "CLEANING" },
  { id: "acne", label: "ACNE FIGHTER" },
  { id: "antiaging", label: "ANTI-AGING" },
];

const categoryProducts = [
  {
    id: 1,
    name: "Botanical Serum",
    category: "all",
    price: "$48.00",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop",
  },
  {
    id: 2,
    name: "Gentle Cleanser",
    category: "cleansing",
    price: "$32.00",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop",
  },
  {
    id: 3,
    name: "Hydra Moisturizer",
    category: "antiaging",
    price: "$42.00",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500&h=500&fit=crop",
  },
  {
    id: 4,
    name: "Rose Face Oil",
    category: "antiaging",
    price: "$55.00",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop",
  },
  {
    id: 5,
    name: "Acne Control Serum",
    category: "acne",
    price: "$38.00",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&h=500&fit=crop",
  },
  {
    id: 6,
    name: "Night Repair Cream",
    category: "antiaging",
    price: "$58.00",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop",
  },
  {
    id: 7,
    name: "Foam Cleanser",
    category: "cleansing",
    price: "$28.00",
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=500&h=500&fit=crop",
  },
  {
    id: 8,
    name: "Blemish Treatment",
    category: "acne",
    price: "$34.00",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&h=500&fit=crop",
  },
  {
    id: 9,
    name: "Vitamin C Serum",
    category: "all",
    price: "$52.00",
    image: "https://images.unsplash.com/photo-1631730486784-5c3e0b3b8f38?w=500https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=500&h=500&fit=croph=500https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=500&h=500&fit=cropfit=crop",
  },
];

export default function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? categoryProducts.filter((p) => p.category === "all")
    : categoryProducts.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-[#EDF1E8] py-24 lg:py-32 relative overflow-hidden">
      <div className="container relative z-10">

        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1A1A1A] mb-4">
            Feel <span className="text-[#1A1A1A]/70">Beautiful</span>
          </h2>
          <p className="text-[#1A1A1A]/60 text-base max-w-lg mx-auto">
            Explore our curated categories to find your perfect skincare ritual.
          </p>
        </AnimateOnScroll>

        {/* Category Tabs */}
        <AnimateOnScroll delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`btn-active px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-[#1A1A1A] text-white shadow-md"
                    : "bg-[#E8EDE0] text-[#1A1A1A]/60 hover:bg-[#dce3d4]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Product Grid — Flat background, 3-column */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((product, i) => (
            <AnimateOnScroll key={product.id} delay={i * 0.06}>
              <Link href="/products">
                <div className="group cursor-pointer bg-white/60 rounded-xl p-3 hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-3 bg-[#E8EDE0]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-display text-sm font-bold tracking-wider text-[#1A1A1A] uppercase mb-0.5">
                    {product.name}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/50">
                    FROM {product.price}
                  </p>
                </div>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
