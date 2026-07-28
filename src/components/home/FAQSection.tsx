"use client";

import AnimateOnScroll from "@/components/AnimateOnScroll";
import EyebrowPill from "@/components/EyebrowPill";
import { Headphones, Plus } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/*
 * FAQ SECTION — "Answers To Your Skincare Questions"
 * Palette: white background, deep purple text, lavender accents
 * - Left: Large product jar image with "24/7 We're Here to Help You" badge
 * - Right: Header + accordion with + icons, thin dividers, expand on click
 */

const faqs = [
  {
    question: "What makes your products different from other skincare brands?",
    answer: "Our products are crafted with 100% natural, sustainably sourced botanical ingredients. We never use parabens, sulfates, or synthetic fragrances. Every formula is developed in small batches.",
  },
  {
    question: "Are your products suitable for sensitive skin?",
    answer: "Yes! All our products are dermatologically tested and formulated to be gentle on sensitive skin. We always recommend doing a patch test before full application.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Most customers notice visible improvements within 2-4 weeks of consistent use. For best results, follow a complete skincare routine daily.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide! Domestic orders arrive in 3-5 business days. International shipping takes 7-14 business days. Free shipping on orders over $75.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day satisfaction guarantee. Return any product within 30 days for a full refund.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#B8A8D4]/40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-display text-sm lg:text-base font-semibold text-[#4A2D6B] group-hover:text-[#9B85C4] transition-colors pr-4">
          {question}
        </span>
        <div className={`w-7 h-7 rounded-full border border-[#B8A8D4] flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? "bg-[#4A2D6B] border-[#4A2D6B]" : ""}`}>
          <Plus className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-45 text-white" : "text-[#4A2D6B]"}`} />
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
            <p className="text-sm text-[#9B85C4] leading-relaxed pb-5 pr-12">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Column — Image + Help Badge */}
          <div className="relative hidden lg:block">
            <AnimateOnScroll direction="left">
              <img
                src="/Product photos/FAQ.jpg"
                alt="Premium skincare product"
                className="w-full rounded-2xl object-cover shadow-lg"
                style={{ aspectRatio: "4/5", maxHeight: "500px" }}
              />
      
            </AnimateOnScroll>
          </div>

          {/* Right Column — Header + Accordion */}
          <div>
            <AnimateOnScroll delay={0.1}>
              <EyebrowPill>Frequently Asked Question</EyebrowPill>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-[#4A2D6B] mb-2 leading-tight">
                Answers To Your
                <br />
                <span className="text-[#4A2D6B]/70">Skincare Questions</span>
              </h2>
              <p className="text-[#9B85C4] text-sm mb-10 max-w-md">
                Can't find what you're looking for? Feel free to reach out to our team.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div>
                {faqs.map((faq) => (
                  <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
