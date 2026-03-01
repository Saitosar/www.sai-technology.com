"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { CALENDLY_PLACEHOLDER } from "@/content/vertex";
import { useAnalytics } from "@/hooks/useAnalytics";
import { motion } from "framer-motion";
import type { InquiryType } from "@/components/ContactForm";

function ContactContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const urlType =
    typeParam === "pilot" || typeParam === "partnership" || typeParam === "enterprise"
      ? (typeParam as InquiryType)
      : undefined;

  const [inquiryTypeOverride, setInquiryTypeOverride] = useState<InquiryType | undefined>(urlType);

  useEffect(() => {
    if (urlType) setInquiryTypeOverride(urlType);
  }, [urlType]);

  const { track } = useAnalytics();

  const handlePilotClick = () => {
    track("cta_pilot_click");
    setInquiryTypeOverride("pilot");
    setTimeout(() => {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handlePartnershipClick = () => {
    track("cta_partnership_click");
    setInquiryTypeOverride("partnership");
    setTimeout(() => {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handleStrategicCallClick = () => {
    track("cta_enterprise_click");
    window.open(CALENDLY_PLACEHOLDER, "_blank");
  };

  return (
    <main className="min-h-screen bg-black">
      <Header />
      <section id="contact" className="relative pt-24 pb-24 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-grid-pattern bg-grid opacity-40"
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get in <span className="text-cyber-lime text-glow-lime">Touch</span>
            </h1>
            <p className="text-gray-400">
              Enterprise-ready contact options. Choose how you want to engage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="grid gap-4 sm:grid-cols-3 mb-12"
          >
            <a
              href={CALENDLY_PLACEHOLDER}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleStrategicCallClick}
              className="glass rounded-xl p-6 border border-electric-blue/20 hover:border-electric-blue/50 transition-colors text-center"
            >
              <h3 className="font-bold text-white mb-1">Book a Strategic Call</h3>
              <p className="text-sm text-gray-400">Schedule directly</p>
            </a>
            <button
              type="button"
              onClick={handlePilotClick}
              className="glass rounded-xl p-6 border border-cyber-lime/20 hover:border-cyber-lime/50 transition-colors text-center"
            >
              <h3 className="font-bold text-white mb-1">Pilot Inquiry</h3>
              <p className="text-sm text-gray-400">Fill the form below</p>
            </button>
            <button
              type="button"
              onClick={handlePartnershipClick}
              className="glass rounded-xl p-6 border border-electric-blue/20 hover:border-electric-blue/50 transition-colors text-center"
            >
              <h3 className="font-bold text-white mb-1">Partnership Inquiry</h3>
              <p className="text-sm text-gray-400">Fill the form below</p>
            </button>
          </motion.div>

          <motion.div
            id="contact-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h2 className="text-lg font-bold text-white mb-4">Contact Us</h2>
            <ContactForm initialInquiryType={inquiryTypeOverride} />
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black" />}>
      <ContactContent />
    </Suspense>
  );
}
