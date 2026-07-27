import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/*
 * FAQ SECTION — "Answers to Your Skincare Questions"
 * Design: Brand Purple/Lavender/Marble
 * - Accordion-style FAQ with smooth expand/collapse
 */

const faqs = [
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
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide! Domestic orders are delivered within 3-5 business days. International shipping typically takes 7-14 business days depending on your location. Free shipping is available on orders over $75.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, you can return the product within 30 days for a full refund. We believe in our products and want you to love them too.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-lavender-light py-20 lg:py-28 relative overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column - Header */}
          <div className="lg:col-span-2">
            <AnimateOnScroll>
              <span className="text-gold text-sm font-medium tracking-wider uppercase mb-3 block">
                FAQ
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-purple mb-4 leading-tight">
                Answers to Your
                <br />
                <span className="italic text-purple/70">Skincare Questions</span>
              </h2>
              <p className="text-purple/60 text-base leading-relaxed mb-6">
                Can't find what you're looking for? Feel free to reach out to our team for personalized assistance.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-3">
            <AnimateOnScroll delay={0.15}>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq) => (
                  <AccordionItem
                    key={faq.question}
                    value={faq.question}
                    className="bg-cream rounded-xl px-5 border border-lavender-light/30"
                  >
                    <AccordionTrigger className="text-left font-display text-base font-semibold text-purple hover:text-gold py-4 no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-purple/60 text-sm leading-relaxed pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
