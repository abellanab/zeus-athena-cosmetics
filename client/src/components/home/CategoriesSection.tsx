import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Link } from "wouter";

/*
 * CATEGORIES SECTION — "Feel Beautiful"
 * Design: Brand Purple/Lavender/Marble
 * - Category filter tabs
 * - Product grid with category-based filtering
 */

const categories = [
  { id: "all", label: "All" },
  { id: "new", label: "New Arrival" },
  { id: "cleansing", label: "Cleansing" },
  { id: "serum", label: "Serum" },
  { id: "moisturizer", label: "Moisturizer" },
  { id: "oil", label: "Face Oil" },
];

const categoryProducts = [
  {
    id: 1,
    name: "Botanical Serum",
    category: "serum",
    price: "$48.00",
    isNew: false,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Gentle Cleanser",
    category: "cleansing",
    price: "$32.00",
    isNew: true,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Hydra Moisturizer",
    category: "moisturizer",
    price: "$42.00",
    isNew: false,
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Rose Face Oil",
    category: "oil",
    price: "$55.00",
    isNew: true,
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Vitamin C Serum",
    category: "serum",
    price: "$52.00",
    isNew: true,
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Night Repair Cream",
    category: "moisturizer",
    price: "$58.00",
    isNew: false,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop",
  },
  {
    id: 7,
    name: "Foam Cleanser",
    category: "cleansing",
    price: "$28.00",
    isNew: false,
    image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=400&h=400&fit=crop",
  },
  {
    id: 8,
    name: "Argan Face Oil",
    category: "oil",
    price: "$46.00",
    isNew: false,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=400&fit=crop",
  },
];

export default function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = activeCategory === "all"
    ? categoryProducts
    : activeCategory === "new"
    ? categoryProducts.filter((p) => p.isNew)
    : categoryProducts.filter((p) => p.category === activeCategory);

  return (
    <section className="bg-cream py-20 lg:py-28 relative overflow-hidden">
      {/* Watermark */}
      <span className="watermark bottom-10 right-0 hidden xl:block">
        BEAUTY
      </span>

      <div className="container relative z-10">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-10">
          <span className="text-gold text-sm font-medium tracking-wider uppercase mb-3 block">
            Shop By Category
          </span>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-purple mb-4">
            Feel
            <span className="italic text-purple/70"> Beautiful</span>
          </h2>
          <p className="text-purple/60 text-base max-w-lg mx-auto">
            Explore our curated categories to find your perfect skincare ritual.
          </p>
        </AnimateOnScroll>

        {/* Category Filters */}
        <AnimateOnScroll delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`btn-active px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-purple text-cream shadow-md"
                    : "bg-lavender-light/30 text-purple/70 hover:bg-lavender-light/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {filtered.map((product, i) => (
            <AnimateOnScroll key={product.id} delay={i * 0.06}>
              <Link href="/products">
                <div className="group cursor-pointer">
                  <div className="relative aspect-square rounded-2xl overflow-hidden bg-lavender-light/10 mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {product.isNew && (
                      <span className="absolute top-3 left-3 px-3 py-1 bg-gold text-cream text-xs font-medium rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-purple/50 uppercase tracking-wider mb-0.5">
                    {product.category}
                  </p>
                  <h3 className="font-display text-base font-semibold text-purple group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm font-medium text-purple/70 mt-0.5">
                    {product.price}
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
