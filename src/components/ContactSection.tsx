"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import ContactForm from "./ContactForm";
import { CALENDLY_PLACEHOLDER, ctaLinks } from "@/content/vertex";
import { useAnalytics } from "@/hooks/useAnalytics";

const PHONE = "+998990243225";
const contactLinks = [
  {
    href: `tel:${PHONE.replace(/\s/g, "")}`,
    icon: Phone,
    label: "Phone",
    value: PHONE,
  },
  {
    href: `https://wa.me/${PHONE.replace(/\D/g, "")}`,
    icon: MessageCircle,
    label: "WhatsApp",
    value: PHONE,
  },
];

const motionShort = { duration: 0.35 };

export default function ContactSection() {
  const { track } = useAnalytics();

  const handlePilotClick = () => track("cta_pilot_click");
  const handlePartnershipClick = () => track("cta_partnership_click");
  const handleStrategicCallClick = () => track("cta_enterprise_click");

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-40"
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={motionShort}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get in <span className="text-cyber-lime text-glow-lime">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Enterprise-ready contact options. Choose how you want to engage.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white mb-4">
              Contact Options
            </h3>
            <div className="flex flex-wrap gap-4 mb-8">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/10 text-gray-400 hover:text-electric-blue hover:border-electric-blue/30 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{link.label}</span>
                  </a>
                );
              })}
            </div>

            <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <a
                href={CALENDLY_PLACEHOLDER}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleStrategicCallClick}
                className="glass rounded-xl p-4 border border-electric-blue/20 hover:border-electric-blue/50 transition-colors text-center"
              >
                <span className="font-medium text-white text-sm block">
                  Book a Strategic Call
                </span>
              </a>
              <Link
                href={ctaLinks.pilot}
                onClick={handlePilotClick}
                className="glass rounded-xl p-4 border border-cyber-lime/20 hover:border-cyber-lime/50 transition-colors text-center"
              >
                <span className="font-medium text-white text-sm block">
                  Pilot Inquiry
                </span>
              </Link>
              <Link
                href={ctaLinks.partnership}
                onClick={handlePartnershipClick}
                className="glass rounded-xl p-4 border border-electric-blue/20 hover:border-electric-blue/50 transition-colors text-center"
              >
                <span className="font-medium text-white text-sm block">
                  Partnership Inquiry
                </span>
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white mb-4">
              Contact Us
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
