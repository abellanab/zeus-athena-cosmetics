import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ShoppingBag, Search, ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

/*
 * PRODUCTS PAGE — Zeus and Athena House of Cosmetics Corp.
 * Matches reference video style:
 * - Same #EDF1E8 background as home page
 * - Simple header with title
 * - Pill-shaped category tabs
 * - Clean product grid with shelf/niche effect
 */

const allCategories = [
  { id: "all", label: "All Products" },
  { id: "serum", label: "Serums" },
  { id: "cleansing", label: "Cleansing" },
  { id: "moisturizer", label: "Moisturizers" },
  { id: "oil", label: "Face Oils" },
  { id: "sunscreen", label: "Sunscreen" },
  { id: "bundle", label: "Bundles" },
];

const allProducts = [
  { id: 1, name: "LUMINOUS SERUM", category: "serum", price: "$48.00", rating: 4.8, reviews: 124, tag: "Best Seller", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop" },
  { id: 2, name: "GENTLE CLEANSER", category: "cleansing", price: "$32.00", rating: 4.9, reviews: 156, tag: null, image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=500&fit=crop" },
  { id: 3, name: "HYDRA MOISTURIZER", category: "moisturizer", price: "$42.00", rating: 4.7, reviews: 98, tag: null, image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500&h=500&fit=crop" },
  { id: 4, name: "ROSE FACE OIL", category: "oil", price: "$55.00", rating: 4.6, reviews: 73, tag: "New", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=500&fit=crop" },
  { id: 5, name: "VITAMIN C SERUM", category: "serum", price: "$52.00", rating: 4.8, reviews: 201, tag: "Popular", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&h=500&fit=crop" },
  { id: 6, name: "NIGHT REPAIR CREAM", category: "moisturizer", price: "$58.00", rating: 4.9, reviews: 87, tag: null, image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop" },
  { id: 7, name: "FOAM CLEANSER", category: "cleansing", price: "$28.00", rating: 4.5, reviews: 64, tag: null, image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=500&h=500&fit=crop" },
  { id: 8, name: "ARGAN FACE OIL", category: "oil", price: "$46.00", rating: 4.7, reviews: 52, tag: null, image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&h=500&fit=crop" },
  { id: 9, name: "DAILY SPF 50", category: "sunscreen", price: "$36.00", rating: 4.9, reviews: 189, tag: "Best Seller", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop" },
  { id: 10, name: "STARTER BUNDLE", category: "bundle", price: "$120.00", rating: 4.8, reviews: 76, tag: "Save 20%", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=500&fit=crop" },
  { id: 11, name: "GLOW RITUAL SET", category: "bundle", price: "$180.00", rating: 4.9, reviews: 43, tag: null, image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500&h=500&fit=crop" },
  { id: 12, name: "MINERAL SUNSCREEN", category: "sunscreen", price: "$38.00", rating: 4.7, reviews: 112, tag: null, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop" },
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
    <div className="pt-16 bg-[#EDF1E8] min-h-screen">
      {/* Page Header */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <AnimateOnScroll>
            <p className="text-xs text-[#1A1A1A]/40 uppercase tracking-widest mb-3">
              Our Collection
            </p>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A1A1A] mb-3">
              Discover Your <span className="text-[#1A1A1A]/70">Ritual</span>
            </h1>
            <p className="text-[#1A1A1A]/60 text-base lg:text-lg max-w-lg">
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
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1A1A1A]/30" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white/60 rounded-full border border-[#1A1A1A]/10 text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 focus:outline-none focus:border-[#1A1A1A]/20 transition-colors"
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
                    ? "bg-[#1A1A1A] text-white shadow-md"
                    : "bg-white/60 text-[#1A1A1A]/60 hover:bg-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-[#1A1A1A]/40 mb-8">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Product Grid — Shelf/Niche Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((product, i) => (
            <AnimateOnScroll key={product.id} delay={(i % 4) * 0.06}>
              <div className="shelf-card p-4 group cursor-pointer">
                {/* Product Image in Niche */}
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4 bg-white/40 shadow-inner">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {product.tag && (
                    <span className={`absolute top-2.5 left-2.5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full ${
                      product.tag.includes("Save") ? "bg-[#B8956A] text-white" : "bg-[#1A1A1A] text-white"
                    }`}>
                      {product.tag}
                    </span>
                  )}
                  <button className="absolute bottom-2.5 right-2.5 w-9 h-9 bg-[#1A1A1A] rounded-lg flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 btn-active">
                    <ShoppingBag className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Product Info */}
                <h3 className="font-display text-xs font-bold tracking-wider text-[#1A1A1A] uppercase mb-0.5">
                  {product.name}
                </h3>
                <p className="text-[10px] text-[#1A1A1A]/50">
                  FROM {product.price}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-[#1A1A1A]/30 mb-2">No products found</p>
            <p className="text-[#1A1A1A]/30 text-sm">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
