import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ShoppingBag, Star, Search } from "lucide-react";

/*
 * PRODUCTS PAGE — Zeus and Athena House of Cosmetics Corp.
 * Design: Botanical Editorial
 * - Editorial asymmetric grid layout (not a generic catalog feed)
 * - Varied card sizes: some full-width, some small, some medium
 * - Search + category filter with curated negative space
 * - Magazine-like browsing rhythm
 */

const allCategories = [
  { id: "all", label: "All" },
  { id: "serum", label: "Serums" },
  { id: "cleansing", label: "Cleansing" },
  { id: "moisturizer", label: "Moisturizers" },
  { id: "oil", label: "Face Oils" },
  { id: "sunscreen", label: "Sunscreen" },
  { id: "bundle", label: "Bundles" },
];

const allProducts = [
  { id: 1, name: "Botanical Serum", category: "serum", price: "$48.00", rating: 4.8, reviews: 124, tag: "Best Seller", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=600&fit=crop" },
  { id: 2, name: "Gentle Cleanser", category: "cleansing", price: "$32.00", rating: 4.9, reviews: 156, tag: "New", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=500&h=400&fit=crop" },
  { id: 3, name: "Hydra Moisturizer", category: "moisturizer", price: "$42.00", rating: 4.7, reviews: 98, tag: null, image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500&h=500&fit=crop" },
  { id: 4, name: "Rose Face Oil", category: "oil", price: "$55.00", rating: 4.6, reviews: 73, tag: null, image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&h=400&fit=crop" },
  { id: 5, name: "Vitamin C Serum", category: "serum", price: "$52.00", rating: 4.8, reviews: 201, tag: "Popular", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&h=600&fit=crop" },
  { id: 6, name: "Night Repair Cream", category: "moisturizer", price: "$58.00", rating: 4.9, reviews: 87, tag: null, image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=500&fit=crop" },
  { id: 7, name: "Foam Cleanser", category: "cleansing", price: "$28.00", rating: 4.5, reviews: 64, tag: null, image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=500&h=400&fit=crop" },
  { id: 8, name: "Argan Face Oil", category: "oil", price: "$46.00", rating: 4.7, reviews: 52, tag: "New", image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&h=500&fit=crop" },
  { id: 9, name: "Daily SPF 50", category: "sunscreen", price: "$36.00", rating: 4.9, reviews: 189, tag: "Best Seller", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=400&fit=crop" },
  { id: 10, name: "Starter Bundle", category: "bundle", price: "$120.00", rating: 4.8, reviews: 76, tag: "Save 20%", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&h=500&fit=crop" },
  { id: 11, name: "Glow Ritual Set", category: "bundle", price: "$180.00", rating: 4.9, reviews: 43, tag: "Popular", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&h=600&fit=crop" },
  { id: 12, name: "Mineral Sunscreen", category: "sunscreen", price: "$38.00", rating: 4.7, reviews: 112, tag: null, image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=400&fit=crop" },
];

// Editorial layout: vary card sizes for magazine feel
// row 1: 2 cols (large left, small right)
// row 2: 3 cols (equal)
// row 3: 2 cols (small left, large right)
// row 4: 3 cols (equal)

function getLayoutClass(index: number, total: number): string {
  const row = Math.floor(index / 3);
  const posInRow = index % 3;

  // Odd rows: asymmetric 2-col (span 2 + span 1)
  if (row % 2 === 1 && posInRow < 2) {
    return posInRow === 0
      ? "col-span-1 md:col-span-2 row-span-1"
      : "col-span-1 md:col-span-1 row-span-1";
  }
  // Even rows: 3-col equal grid
  return "col-span-1";
}

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = allProducts.filter((product) => {
    const matchCategory = activeCategory === "all" || product.category === activeCategory;
    const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <section className="bg-lavender-light py-16 lg:py-24 relative overflow-hidden">
        <span className="watermark top-10 right-0 hidden lg:block">SHOP</span>
        <div className="container relative z-10">
          <AnimateOnScroll>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-purple mb-3">
              Our <span className="italic text-purple/70">Collection</span>
            </h1>
            <p className="text-purple/60 text-base lg:text-lg max-w-lg">
              Explore our full range of botanical skincare essentials, crafted with intention and proven by nature.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="container py-10 lg:py-16">
        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-12">
          {/* Search */}
          <AnimateOnScroll className="relative flex-1 max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple/40" />
            <input
              type="text"
              placeholder="Search our collection..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-cream rounded-xl border border-lavender-light/30 text-sm text-purple placeholder:text-purple/40 focus:outline-none focus:border-gold/50 transition-colors"
            />
          </AnimateOnScroll>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`btn-active px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "bg-purple text-cream shadow-md"
                    : "bg-lavender-light/30 text-purple/70 hover:bg-lavender-light/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-purple/50 mb-8">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""} curated for you
        </p>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {filtered.map((product, i) => {
            const isLarge = i % 3 === 0 && (Math.floor(i / 3) % 2 === 1);
            const isMedium = i % 3 === 1 && (Math.floor(i / 3) % 2 === 1);

            return (
              <AnimateOnScroll key={product.id} delay={(i % 3) * 0.06}>
                <div
                  className={`group bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                    isLarge ? "md:col-span-2" : isMedium ? "md:col-span-1" : "md:col-span-1"
                  }`}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-lavender-light/10" style={{ aspectRatio: isLarge ? "2/1" : "4/5" }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {product.tag && (
                      <span className={`absolute top-3 left-3 px-3 py-1 text-xs font-medium rounded-full ${
                        product.tag.includes("Save") ? "bg-gold text-cream" : "bg-purple text-cream"
                      }`}>
                        {product.tag}
                      </span>
                    )}
                    <button className="absolute bottom-3 right-3 w-10 h-10 bg-cream rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-purple hover:text-cream btn-active">
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Info */}
                  <div className="p-4 lg:p-5">
                    <p className="text-xs text-purple/50 uppercase tracking-wider mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-display text-base lg:text-lg font-semibold text-purple mb-1 group-hover:text-gold transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                      <span className="text-xs text-purple/70">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                    <p className="font-semibold text-purple text-base">
                      {product.price}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-purple/40 mb-2">No products found</p>
            <p className="text-purple/40 text-sm">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
