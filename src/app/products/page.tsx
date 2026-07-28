"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import EyebrowPill from "@/components/EyebrowPill";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { Search } from "lucide-react";
import type { Product } from "@/store/useCartStore";

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

interface CatalogProduct extends Product {
  category: string;
  tag: string | null;
}

const allProducts: CatalogProduct[] = [
  { id: 1, name: "GLUTA ARBUTIN SOAP", category: "brightening", price: "₱65.00", tag: null, image: "/Product photos/Arbutinsoap.jpeg" },
  { id: 2, name: "CHARCOAL SOAP", category: "cleansing", price: "₱65.00", tag: null, image: "/Product photos/charcoalsoap.jpeg" },
  { id: 3, name: "SOAP BUNDLE", category: "bundle", price: "₱398.00", tag: "Save", image: "/Product photos/bundlesoap.jpeg" },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

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
              <div className="shelf-card p-4 group cursor-pointer">
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
                  <AddToCartButton product={product} className="bottom-2.5 right-2.5" />
                </div>

                {/* Product Info */}
                <h3 className="font-display text-xs font-bold tracking-wider text-[#4A2D6B] uppercase mb-0.5">
                  {product.name}
                </h3>
                <p className="text-[10px] text-[#9B85C4]">
                  FROM {product.price}
                </p>
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
