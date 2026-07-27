import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";

/*
 * FAQ PAGE — Zeus and Athena House of Cosmetics Corp.
 * Design: Botanical Editorial
 * - Asymmetric layout with offset text blocks
 * - Watermark typography as decorative element
 * - Organic feel with generous spacing
 */

const faqCategories = [
  {
    category: "Products & Ingredients",
    items: [
      {
        question: "What makes your products different from other skincare brands?",
        answer: "Our products are crafted with 100% natural, sustainably sourced botanical ingredients. We never use parabens, sulfates, or synthetic fragrances. Every formula is developed in small batches to ensure maximum freshness and potency.",
      },
      {
        question: "Are your products suitable for sensitive skin?",
        answer: "Yes! All our products are dermatologically tested and formulated to be gentle on sensitive skin. However, we always recommend doing a patch test before full application, especially if you have known allergies.",
      },
      {
        question: "How long does it take to see results?",
        answer: "Most customers notice visible improvements within 2-4 weeks of consistent use. For best results, we recommend following a complete skincare routine using our products daily — both morning and evening.",
      },
      {
        question: "Do you offer products for acne-prone skin?",
        answer: "Yes, we have specific formulations designed for acne-prone skin. Our Gentle Cleanser and Botanical Serum contain tea tree oil and niacinamide, which are known to help balance oil production and reduce breakouts without harsh chemicals.",
      },
    ],
  },
  {
    category: "Orders & Shipping",
    items: [
      {
        question: "Do you ship internationally?",
        answer: "Yes, we ship worldwide! Domestic orders are delivered within 3-5 business days. International shipping typically takes 7-14 business days depending on your location. Free shipping is available on orders over $75.",
      },
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, you can return the product within 30 days for a full refund. We believe in our products and want you to love them too.",
      },
      {
        question: "How can I track my order?",
        answer: "Once your order ships, you'll receive a confirmation email with a tracking number. You can use this number on our website or directly on the carrier's website to track your package in real-time.",
      },
      {
        question: "Do you offer gift wrapping?",
        answer: "Yes! We offer premium gift wrapping for all orders. Simply select the gift wrapping option at checkout, and your products will be beautifully packaged in our signature sage and gold wrapping with a handwritten note.",
      },
    ],
  },
  {
    category: "Brand & Company",
    items: [
      {
        question: "Where are your products made?",
        answer: "All Zeus and Athena products are handcrafted in our facility using sustainably sourced ingredients from trusted suppliers around the world. We maintain strict quality control at every step of the process.",
      },
      {
        question: "Are your products cruelty-free and vegan?",
        answer: "Yes, absolutely. We are proud to be 100% cruelty-free and the majority of our products are fully vegan. We never test on animals and work only with suppliers who share our ethical values.",
      },
      {
        question: "How can I contact customer support?",
        answer: "You can reach our customer support team through our Contact page, via email at contact@zeusathena.com, or by reaching out on our social media channels. We typically respond within 24 hours.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header — Asymmetric */}
      <section className="bg-sage py-16 lg:py-24 relative overflow-hidden">
        <span className="watermark top-6 right-8 hidden lg:block">KNOW</span>
        <div className="container relative z-10">
          <div className="max-w-xl lg:ml-8">
            <AnimateOnScroll>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-forest mb-3">
                Questions &<br /><span className="italic text-forest/70"> Answers</span>
              </h1>
              <p className="text-forest/60 text-base lg:text-lg leading-relaxed">
                Everything you need to know about our formulations, our process, and our promise. Can't find what you're looking for? We're just a message away.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ Content — Asymmetric two-column layout */}
      <div className="py-10 lg:py-16 bg-ivory">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left sidebar — sticky labels */}
            <div className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-28 space-y-6">
                {faqCategories.map((section) => (
                  <a
                    key={section.category}
                    href={`#${section.category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="block text-sm font-medium text-forest/50 hover:text-forest transition-colors"
                  >
                    {section.category}
                  </a>
                ))}
              </div>
            </div>

            {/* Right content — accordion */}
            <div className="lg:col-span-9 space-y-14">
              {faqCategories.map((section) => (
                <div key={section.category} id={section.category.toLowerCase().replace(/\s+/g, "-")}>
                  <AnimateOnScroll>
                    <h2 className="font-display text-2xl lg:text-3xl font-bold text-forest mb-6">
                      {section.category}
                    </h2>
                  </AnimateOnScroll>

                  <Accordion type="single" collapsible className="space-y-3">
                    {section.items.map((faq) => (
                      <AnimateOnScroll key={faq.question} delay={0.05}>
                        <AccordionItem
                          value={faq.question}
                          className="bg-sage/10 rounded-xl px-5 border border-sage/20"
                        >
                          <AccordionTrigger className="text-left font-display text-base font-semibold text-forest hover:text-gold py-4 no-underline">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-forest/60 text-sm leading-relaxed pb-4">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      </AnimateOnScroll>
                    ))}
                  </Accordion>
                </div>
              ))}

              {/* Contact CTA — Editorial style */}
              <AnimateOnScroll>
                <div className="bg-forest rounded-2xl p-8 lg:p-12 text-center relative overflow-hidden">
                  <span className="watermark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block" style={{ color: "oklch(0.98 0.005 85 / 0.05)" }}>
                    HELP
                  </span>
                  <div className="relative z-10">
                    <h3 className="font-display text-xl lg:text-2xl font-semibold text-ivory mb-2">
                      Still Seeking Clarity?
                    </h3>
                    <p className="text-ivory/60 text-sm mb-6 max-w-md mx-auto">
                      Our team is here to guide you. Reach out and we'll respond within 24 hours with care.
                    </p>
                    <Link href="/contact">
                      <button className="btn-active inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-ivory font-medium text-sm rounded-lg hover:bg-gold-light transition-all duration-300">
                        Reach Our Team
                      </button>
                    </Link>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
