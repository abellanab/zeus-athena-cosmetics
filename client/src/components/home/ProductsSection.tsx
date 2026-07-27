import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ShoppingBag, Star } from "lucide-react";
import { Link } from "wouter";

/*
 * PRODUCTS SECTION — "Skincare That Brings Out Your Natural Radiance"
 * Design: Brand Purple/Lavender/Marble
 * - Horizontal carousel of product cards
 * - Each card: image, name, price, rating, quick-add button
 */

const products = [
  {
    id: 1,
    name: "Botanical Serum",
    category: "Serum",
    price: "$48.00",
    rating: 4.8,
    reviews: 124,
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Hydra Moisturizer",
    category: "Moisturizer",
    price: "$42.00",
    rating: 4.7,
    reviews: 98,
    tag: null,
  },
  {
    id: 3,
    name: "Gentle Cleanser",
    category: "Cleanser",
    price: "$32.00",
    rating: 4.9,
    reviews: 156,
    tag: "New",
  },
  {
    id: 4,
    name: "Rose Face Oil",
    category: "Oil",
    price: "$55.00",
    rating: 4.6,
    reviews: 73,
    tag: null,
  },
  {
    id: 5,
    name: "Vitamin C Serum",
    category: "Serum",
    price: "$52.00",
    rating: 4.8,
    reviews: 201,
    tag: "Popular",
  },
  {
    id: 6,
    name: "Night Repair Cream",
    category: "Moisturizer",
    price: "$58.00",
    rating: 4.9,
    reviews: 87,
    tag: null,
  },
];

// Product image using nature-themed unsplash placeholders
const productImages = [
  "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=400&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=400&h=400&fit=crop&crop=centerh=400https://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=400&h=400&fit=crop&crop=centerfit=crophttps://images.unsplash.com/photo-1570194065650-d99fb4b38b17?w=400&h=400&fit=crop&crop=centercrop=center",
  "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=400&fit=crop&crop=center",
  "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=400&fit=crop&crop=center",
];

export default function ProductsSection() {
  return (
    <section className="bg-lavender-light py-20 lg:py-28 relative overflow-hidden">
      {/* Watermark */}
      <span className="watermark top-12 left-0 hidden xl:block opacity-50">
        RADIANCE
      </span>

      <div className="container relative z-10">
        {/* Section Header */}
        <AnimateOnScroll className="text-center mb-12">
          <span className="text-gold text-sm font-medium tracking-wider uppercase mb-3 block">
            Our Collection
          </span>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-purple mb-4">
            Skincare That Brings Out
            <br />
            <span className="italic text-purple/70">Your Natural Radiance</span>
          </h2>
          <p className="text-purple/60 text-base max-w-lg mx-auto">
            Discover our curated selection of botanical skincare essentials.
          </p>
        </AnimateOnScroll>

        {/* Product Carousel */}
        <AnimateOnScroll delay={0.2}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products.map((product, index) => (
                <CarouselItem key={product.id} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="group bg-cream rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    {/* Product Image */}
                    <div className="relative aspect-square bg-lavender-light/20 overflow-hidden">
                      <img
                        src={productImages[index]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {product.tag && (
                        <span className="absolute top-3 left-3 px-3 py-1 bg-purple text-cream text-xs font-medium rounded-full">
                          {product.tag}
                        </span>
                      )}
                      {/* Quick Add Button */}
                      <button className="absolute bottom-3 right-3 w-10 h-10 bg-cream rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-purple hover:text-cream btn-active">
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Product Info */}
                    <div className="p-4 lg:p-5">
                      <p className="text-xs text-purple/50 uppercase tracking-wider mb-1">
                        {product.category}
                      </p>
                      <h3 className="font-display text-lg font-semibold text-purple mb-1">
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-3 mt-8">
              <CarouselPrevious className="static translate-y-0 bg-purple text-cream border-none hover:bg-purple-light" />
              <CarouselNext className="static translate-y-0 bg-purple text-cream border-none hover:bg-purple-light" />
            </div>
          </Carousel>
        </AnimateOnScroll>

        {/* View All CTA */}
        <AnimateOnScroll delay={0.3} className="text-center mt-10">
          <Link href="/products">
            <button className="btn-active inline-flex items-center gap-2 px-7 py-3.5 bg-purple text-cream font-medium text-sm rounded-lg hover:bg-purple-light transition-all duration-300 shadow-lg shadow-purple/20">
              View All Products
            </button>
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
