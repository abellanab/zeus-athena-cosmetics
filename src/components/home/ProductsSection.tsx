"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import EyebrowPill from "@/components/EyebrowPill";
import AddToCartButton from "@/components/cart/AddToCartButton";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/store/useCartStore";

/*
 * PRODUCTS SECTION — "Skincare That Brings Out Your Natural Radiance"
 * Palette: white background, deep purple text, lavender accents
 * - Header with section title
 * - Continuously auto-scrolling marquee carousel (pauses on hover)
 * - Cards in 3D "shelf/niche" effect with inset shadow
 * - Product name (uppercase), price "FROM $X.XX", small cart button
 */

const products: Product[] = [
  {
    id: 1,
    name: "GLUTA ARBUTIN SOAP",
    price: "₱65.00",
    image: "/Product photos/Arbutinsoap.jpeg",
  },
  {
    id: 2,
    name: "CHARCOAL SOAP",
    price: "₱65.00",
    image: "/Product photos/charcoalsoap.jpeg",
  },
  {
    id: 3,
    name: "SOAP BUNDLE",
    price: "₱398.00",
    image: "/Product photos/bundlesoap.jpeg",
  },
];

export default function ProductsSection() {
  const marqueeProducts = [...products, ...products];

  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
      <div className="container relative z-10">

        {/* Section Header */}
        <AnimateOnScroll className="mb-12">
          <EyebrowPill>Best Selling Product</EyebrowPill>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-[#4A2D6B] leading-tight max-w-lg">
            Skincare That Brings Out
            <br />
            <span className="text-[#4A2D6B]/70">Your Natural Radiance</span>
          </h2>
        </AnimateOnScroll>

        {/* Auto-Scrolling Marquee Carousel */}
        <AnimateOnScroll>
          <div className="overflow-hidden -mx-5 px-5">
            <div className="flex gap-5 animate-marquee w-max">
              {marqueeProducts.map((product, i) => (
                <div
                  key={`${product.id}-${i}`}
                  className="min-w-[280px] lg:min-w-[320px] flex-shrink-0"
                  aria-hidden={i >= products.length ? "true" : undefined}
                >
                  {/* Shelf/Niche Card Effect */}
                  <div className="shelf-card p-5 lg:p-6 group">
                    {/* Product Image in Niche */}
                    <div className="relative aspect-square rounded-xl overflow-hidden mb-5 bg-[#EFE9F5] shadow-inner">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Small Cart Button */}
                      <AddToCartButton product={product} className="bottom-3 right-3" />
                    </div>

                    {/* Product Info */}
                    <h3 className="font-display text-sm font-bold tracking-wider text-[#4A2D6B] uppercase mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#9B85C4]">
                      FROM {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* View All CTA */}
        <AnimateOnScroll delay={0.3} className="text-center mt-12">
          <Link href="/products">
            <button className="btn-active inline-flex items-center gap-2 px-7 py-3.5 bg-[#4A2D6B] text-white font-medium text-sm rounded-full hover:bg-[#5B3A7A] transition-all duration-300">
              View All Products
            </button>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
