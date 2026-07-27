import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Plus } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
 * FAQ PAGE — Zeus and Athena House of Cosmetics Corp.
 * Matches video style: same #EDF1E8 background, clean accordion with + icons
 */

const faqCategories = [
  {
    category: "Products & Ingredients",
    items: [
      {
        question: "What makes your products different from other skincare brands?",
        answer: "Our products are crafted with 100% natural, sustainably sourced botanical ingredients. We never use parabens, sulfates, or synthetic fragrances.",
      },
      {
        question: "Are your products suitable for sensitive skin?",
        answer: "Yes! All our products are dermatologically tested and formulated to be gentle on sensitive skin. We recommend doing a patch test before full application.",
      },
      {
        question: "How long does it take to see results?",
        answer: "Most customers notice visible improvements within 2-4 weeks of consistent use.",
      },
      {
        question: "Do you offer products for acne-prone skin?",
        answer: "Yes, we have specific formulations designed for acne-prone skin. Our Gentle Cleanser and Botanical Serum contain tea tree oil and niacinamide.",
      },
    ],
  },
  {
    category: "Orders & Shipping",
    items: [
      {
        question: "Do you ship internationally?",
        answer: "Yes, we ship worldwide! Domestic orders arrive in 3-5 business days. International shipping takes 7-14 business days.",
      },
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day satisfaction guarantee. Return any product within 30 days for a full refund.",
      },
      {
        question: "How can I track my order?",
        answer: "Once your order ships, you'll receive a confirmation email with a tracking number.",
      },
      {
        question: "Do you offer gift wrapping?",
        answer: "Yes! We offer premium gift wrapping for all orders.",
      },
    ],
  },
  {
    category: "Brand & Company",
    items: [
      {
        question: "Where are your products made?",
        answer: "All Zeus and Athena products are handcrafted in our facility using sustainably sourced ingredients.",
      },
      {
        question: "Are your products cruelty-free and vegan?",
        answer: "Yes, absolutely. We are proud to be 100% cruelty-free and the majority of our products are fully vegan.",
      },
      {
        question: "How can I contact customer support?",
        answer: "You can reach our team through our Contact page or via email at contact@zeusathena.com.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#1A1A1A]/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-display text-sm lg:text-base font-semibold text-[#1A1A1A] group-hover:text-[#1A1A1A]/70 transition-colors pr-4">
          {question}
        </span>
        <div className={`w-7 h-7 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? "bg-[#1A1A1A] border-[#1A1A1A]" : ""}`}>
          <Plus className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-45 text-white" : "text-[#1A1A1A]"}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-[#1A1A1A]/50 leading-relaxed pb-5 pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="pt-16 bg-[#EDF1E8] min-h-screen">
      {/* Page Header */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <AnimateOnScroll>
            <p className="text-xs text-[#1A1A1A]/40 uppercase tracking-widest mb-3">
              Help Center
            </p>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1A1A1A] mb-3">
              Questions & <span className="text-[#1A1A1A]/70">Answers</span>
            </h1>
            <p className="text-[#1A1A1A]/60 text-base lg:text-lg max-w-xl leading-relaxed">
              Everything you need to know about our formulations, our process, and our promise.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ Content */}
      <div className="pb-20">
        <div className="container max-w-4xl">
          {faqCategories.map((section) => (
            <div key={section.category} className="mb-12">
              <AnimateOnScroll>
                <h2 className="font-display text-xl lg:text-2xl font-bold text-[#1A1A1A] mb-6">
                  {section.category}
                </h2>
              </AnimateOnScroll>

              <div>
                {section.items.map((faq) => (
                  <AnimateOnScroll key={faq.question} delay={0.05}>
                    <FAQItem question={faq.question} answer={faq.answer} />
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <AnimateOnScroll>
            <div className="bg-white/60 rounded-2xl p-8 lg:p-12 text-center border border-[#1A1A1A]/5">
              <h3 className="font-display text-xl lg:text-2xl font-semibold text-[#1A1A1A] mb-2">
                Still Seeking Clarity?
              </h3>
              <p className="text-[#1A1A1A]/50 text-sm mb-6 max-w-md mx-auto">
                Our team is here to guide you. Reach out and we'll respond within 24 hours.
              </p>
              <Link href="/contact">
                <button className="btn-active inline-flex items-center gap-2 px-7 py-3.5 bg-[#1A1A1A] text-white font-medium text-sm rounded-full hover:bg-[#1A1A1A]/90 transition-all duration-300">
                  Reach Our Team
                </button>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}
