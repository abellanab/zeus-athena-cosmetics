import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Mail, Phone, MapPin, Send, Facebook, Instagram } from "lucide-react";
import { toast } from "sonner";

/*
 * CONTACT PAGE — Zeus and Athena House of Cosmetics Corp.
 * Design: Botanical Editorial
 * - Asymmetric layout with offset columns
 * - Editorial typography and generous spacing
 * - Botanical texture in background
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="pt-24 pb-16">
      {/* Page Header — Asymmetric */}
      <section className="bg-sage py-16 lg:py-24 relative overflow-hidden">
        <span className="watermark top-6 right-8 hidden lg:block">CONNECT</span>
        <div className="container relative z-10">
          <div className="max-w-2xl lg:ml-4">
            <AnimateOnScroll>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-forest mb-3">
                Let's <span className="italic text-forest/70">Connect</span>
              </h1>
              <p className="text-forest/60 text-base lg:text-lg leading-relaxed">
                We'd love to hear from you. Whether you need skincare guidance, have questions about our ingredients, or simply want to share your experience — our team is here with care.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Content — Asymmetric grid */}
      <div className="container py-10 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column — Contact Info (narrower) */}
          <div className="lg:col-span-4 space-y-8">
            <AnimateOnScroll>
              <h3 className="font-display text-xl font-semibold text-forest mb-6">
                Ways to Reach Us
              </h3>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.08}>
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-sage/40 flex items-center justify-center flex-shrink-0 group-hover:bg-sage transition-colors duration-300">
                  <Mail className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <p className="text-xs text-forest/50 uppercase tracking-wider mb-0.5">Email</p>
                  <p className="font-medium text-forest text-sm">contact@zeusathena.com</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.14}>
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-sage/40 flex items-center justify-center flex-shrink-0 group-hover:bg-sage transition-colors duration-300">
                  <Phone className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <p className="text-xs text-forest/50 uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="font-medium text-forest text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="flex items-start gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-sage/40 flex items-center justify-center flex-shrink-0 group-hover:bg-sage transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <p className="text-xs text-forest/50 uppercase tracking-wider mb-0.5">Visit</p>
                  <p className="font-medium text-forest text-sm">123 Botanical Lane, Manila, PH</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.26}>
              <div className="bg-sage/15 rounded-2xl p-6 border border-sage/20">
                <h4 className="font-display text-base font-semibold text-forest mb-4">
                  Our Hours
                </h4>
                <div className="space-y-2.5 text-sm text-forest/60">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-forest">9 AM - 6 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-forest">10 AM - 4 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-forest/40">Closed</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.32}>
              <div className="flex items-center gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-sage/30 flex items-center justify-center hover:bg-forest hover:text-ivory transition-all duration-300 text-forest/70" aria-label="Facebook">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-sage/30 flex items-center justify-center hover:bg-forest hover:text-ivory transition-all duration-300 text-forest/70" aria-label="Instagram">
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column — Contact Form (wider) */}
          <div className="lg:col-span-8">
            <AnimateOnScroll delay={0.15}>
              <form onSubmit={handleSubmit} className="space-y-5 bg-ivory rounded-2xl p-6 lg:p-8 shadow-sm border border-sage/15">
                <h3 className="font-display text-xl font-semibold text-forest mb-2">
                  Send Us a Message
                </h3>
                <p className="text-forest/50 text-sm mb-4">
                  Fill in the details below and we'll respond within 24 hours.
                </p>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-forest mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-sage/10 rounded-xl border border-sage/20 text-sm text-forest placeholder:text-forest/35 focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-forest mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-sage/10 rounded-xl border border-sage/20 text-sm text-forest placeholder:text-forest/35 focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-forest mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What can we help with?"
                    className="w-full px-4 py-3 bg-sage/10 rounded-xl border border-sage/20 text-sm text-forest placeholder:text-forest/35 focus:outline-none focus:border-gold/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-forest mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-4 py-3 bg-sage/10 rounded-xl border border-sage/20 text-sm text-forest placeholder:text-forest/35 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-active inline-flex items-center gap-2 px-7 py-3.5 bg-forest text-ivory font-medium text-sm rounded-lg hover:bg-forest-light transition-all duration-300 shadow-lg shadow-forest/20"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
