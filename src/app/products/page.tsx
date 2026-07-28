"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import EyebrowPill from "@/components/EyebrowPill";
import { ShoppingBag, Search, ChevronDown } from "lucide-react";

/*
 * PRODUCTS PAGE — Zeus and Athena House of Cosmetics Corp.
 * Palette: white background, deep purple text, lavender accents
 * - Simple header with title
 * - Pill-shaped category tabs
 * - Clean product grid with shelf/niche effect
 */

const allCategories = [
  { id: "all", label: "All Products" },
  { id: "brightening", label: "Brightening" },
  { id: "cleansing", label: "Cleansing" },
  { id: "bundle", label: "Bundles" },
];

const allProducts = [
  {
    id: 1,
    name: "GLUTA ARBUTIN SOAP",
    category: "brightening",
    price: "₱65.00",
    tag: null,
    image: "/Product photos/Arbutinsoap.jpeg",
    description:
      "Reveal brighter, smoother, and more radiant skin with Athena Gluta-Arbutin Whitening Soap. This advanced whitening soap is formulated with a powerful blend of alpha arbutin, glutathione, and niacinamide to help reduce dark spots, acne marks, and uneven skin tone while gently cleansing the skin.",
  },
  {
    id: 2,
    name: "CHARCOAL SOAP",
    category: "cleansing",
    price: "₱65.00",
    tag: null,
    image: "/Product photos/charcoalsoap.jpeg",
    description:
      "Experience deep, effective cleansing with Zeus Charcoal Soap with Niacinamide and Salicylic Acid. This 100g soap bar is specially formulated to remove dirt, excess oil, and impurities while helping prevent acne and breakouts. Powered by activated charcoal and acne-fighting ingredients, it is ideal for daily face and body cleansing, especially for oily and acne-prone skin.",
  },
  {
    id: 3,
    name: "SOAP BUNDLE",
    category: "bundle",
    price: "₱398.00",
    tag: "Save",
    image: "/Product photos/bundlesoap.jpeg",
    description:
      "Achieve cleaner, brighter, and smoother skin with this value bundle promo! Get 2 Arbutin Whitening Soaps + 1 FREE Charcoal Soap—perfect for daily skincare routine for both face and body.",
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered = allProducts.filter((product) => {
    const matchCategory = activeCategory === "all" || product.category === activeCategory;
    const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="pt-16 bg-white min-h-screen">
      {/* Page Header */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <AnimateOnScroll>
            <EyebrowPill>Our Collection</EyebrowPill>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-[#4A2D6B] mb-3">
              Discover Your <span className="text-[#4A2D6B]/70">Ritual</span>
            </h1>
            <p className="text-[#9B85C4] text-base lg:text-lg max-w-lg">
              Explore our full range of botanical skincare essentials.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="container pb-20">
        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-10">
          {/* Search */}
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9B85C4]" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-[#EFE9F5] rounded-full border border-[#B8A8D4]/40 text-sm text-[#4A2D6B] placeholder:text-[#9B85C4] focus:outline-none focus:border-[#9B85C4] transition-colors"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`btn-active px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-[#4A2D6B] text-white shadow-md"
                    : "bg-[#EFE9F5] text-[#4A2D6B]/70 hover:bg-[#B8A8D4]/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-[#9B85C4] mb-8">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Product Grid — Shelf/Niche Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product, i) => (
            <AnimateOnScroll key={product.id} delay={(i % 4) * 0.06}>
              <div
                className="shelf-card p-4 group cursor-pointer"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() =>
                  setHoveredId((prev) => (prev === product.id ? null : prev))
                }
              >
                {/* Product Image in Niche */}
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-[#EFE9F5] shadow-inner">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {product.tag && (
                    <span className={`absolute top-2.5 left-2.5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full ${
                      product.tag.includes("Save") ? "bg-[#9B85C4] text-white" : "bg-[#4A2D6B] text-white"
                    }`}>
                      {product.tag}
                    </span>
                  )}
                  <button className="absolute bottom-2.5 right-2.5 w-9 h-9 bg-[#4A2D6B] rounded-lg flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 btn-active">
                    <ShoppingBag className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="flex items-start justify-between gap-2 mb-0.5">
                  <h3 className="font-display text-xs font-bold tracking-wider text-[#4A2D6B] uppercase">
                    {product.name}
                  </h3>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#9B85C4] flex-shrink-0 mt-0.5 transition-transform duration-300 ${
                      hoveredId === product.id ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <p className="text-[10px] text-[#9B85C4]">
                  FROM {product.price}
                </p>

                {/* Description — revealed on click, container expands */}
                <AnimatePresence initial={false}>
                  {hoveredId === product.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-[11px] text-[#4A2D6B]/70 leading-relaxed pt-2 mt-2 border-t border-[#B8A8D4]/30">
                        {product.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-[#9B85C4] mb-2">No products found</p>
            <p className="text-[#9B85C4] text-sm">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
