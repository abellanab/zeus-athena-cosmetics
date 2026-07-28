"use client";

import { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import EyebrowPill from "@/components/EyebrowPill";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

/*
 * CONTACT PAGE — Zeus and Athena House of Cosmetics Corp.
 * Palette: white background, deep purple text, lavender accents
 * Clean minimal form
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
    <div className="pt-16 bg-white min-h-screen">
      {/* Page Header */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <AnimateOnScroll>
            <EyebrowPill>Get in Touch</EyebrowPill>
            <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-[#4A2D6B] mb-3">
              Let's <span className="text-[#4A2D6B]/70">Connect</span>
            </h1>
            <p className="text-[#9B85C4] text-base lg:text-lg max-w-xl leading-relaxed">
              We'd love to hear from you. Whether you need skincare guidance or have questions — our team is here.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Content */}
      <div className="container pb-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left Column — Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <AnimateOnScroll>
              <h3 className="font-display text-xl font-semibold text-[#4A2D6B] mb-6">
                Ways to Reach Us
              </h3>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.08}>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#EFE9F5] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#4A2D6B]" />
                </div>
                <div>
                  <p className="text-xs text-[#9B85C4] uppercase tracking-wider mb-0.5">Email</p>
                  <p className="font-medium text-[#4A2D6B] text-sm">contact@zeusathena.com</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.14}>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#EFE9F5] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#4A2D6B]" />
                </div>
                <div>
                  <p className="text-xs text-[#9B85C4] uppercase tracking-wider mb-0.5">Phone</p>
                  <p className="font-medium text-[#4A2D6B] text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.2}>
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#EFE9F5] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#4A2D6B]" />
                </div>
                <div>
                  <p className="text-xs text-[#9B85C4] uppercase tracking-wider mb-0.5">Visit</p>
                  <p className="font-medium text-[#4A2D6B] text-sm">123 Botanical Lane, Manila, PH</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.26}>
              <div className="bg-[#EFE9F5] rounded-2xl p-6 border border-[#B8A8D4]/30">
                <h4 className="font-display text-base font-semibold text-[#4A2D6B] mb-4">
                  Our Hours
                </h4>
                <div className="space-y-2.5 text-sm text-[#9B85C4]">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-[#4A2D6B]">9 AM - 6 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-[#4A2D6B]">10 AM - 4 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-[#4A2D6B]/40">Closed</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column — Contact Form */}
          <div className="lg:col-span-3">
            <AnimateOnScroll delay={0.15}>
              <form onSubmit={handleSubmit} className="bg-[#EFE9F5] rounded-2xl p-6 lg:p-8 border border-[#B8A8D4]/30">
                <h3 className="font-display text-xl font-semibold text-[#4A2D6B] mb-2">
                  Send Us a Message
                </h3>
                <p className="text-[#9B85C4] text-sm mb-6">
                  Fill in the details below and we'll respond within 24 hours.
                </p>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-xs font-medium text-[#4A2D6B]/70 mb-1.5 uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-white rounded-lg border border-[#B8A8D4]/40 text-sm text-[#4A2D6B] placeholder:text-[#9B85C4] focus:outline-none focus:border-[#9B85C4] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#4A2D6B]/70 mb-1.5 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-white rounded-lg border border-[#B8A8D4]/40 text-sm text-[#4A2D6B] placeholder:text-[#9B85C4] focus:outline-none focus:border-[#9B85C4] transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-xs font-medium text-[#4A2D6B]/70 mb-1.5 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="What can we help with?"
                    className="w-full px-4 py-3 bg-white rounded-lg border border-[#B8A8D4]/40 text-sm text-[#4A2D6B] placeholder:text-[#9B85C4] focus:outline-none focus:border-[#9B85C4] transition-colors"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-medium text-[#4A2D6B]/70 mb-1.5 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-4 py-3 bg-white rounded-lg border border-[#B8A8D4]/40 text-sm text-[#4A2D6B] placeholder:text-[#9B85C4] focus:outline-none focus:border-[#9B85C4] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-active inline-flex items-center gap-2 px-7 py-3.5 bg-[#4A2D6B] text-white font-medium text-sm rounded-full hover:bg-[#5B3A7A] transition-all duration-300"
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
