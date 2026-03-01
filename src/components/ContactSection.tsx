"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Linkedin, Calendar } from "lucide-react";

const contactLinks = [
  {
    href: "mailto:contact@sai-technology.com",
    icon: Mail,
    label: "Email",
    value: "contact@sai-technology.com",
  },
  {
    href: "https://wa.me/",
    icon: MessageCircle,
    label: "WhatsApp",
    value: "WhatsApp",
  },
  {
    href: "tel:",
    icon: Phone,
    label: "Phone",
    value: "Phone",
  },
  {
    href: "https://linkedin.com/company/",
    icon: Linkedin,
    label: "LinkedIn",
    value: "Company LinkedIn",
  },
];

const ctaItems = [
  {
    title: "Book a Strategic Call",
    description: "Schedule a discovery call with our team",
    icon: Calendar,
    href: "#contact",
  },
  {
    title: "Pilot Inquiry Form",
    description: "Request a pilot consultation for your use case",
    icon: Mail,
    href: "#contact",
  },
  {
    title: "Partnership Inquiry",
    description: "Explore strategic partnership opportunities",
    icon: Linkedin,
    href: "#contact",
  },
];

export default function ContactSection() {
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
            <div className="flex flex-wrap gap-4">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass border border-white/10 text-gray-400 hover:text-electric-blue hover:border-electric-blue/30 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm">{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white mb-4">
              Quick Actions
            </h3>
            <div className="flex flex-col gap-4">
              {ctaItems.map((cta, index) => {
                const Icon = cta.icon;
                return (
                  <motion.a
                    key={cta.title}
                    href={cta.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass border border-electric-blue/20 hover:border-electric-blue/50 transition-all duration-300 group"
                  >
                    <div className="p-2 rounded-lg bg-electric-blue/10 group-hover:bg-electric-blue/20 transition-colors">
                      <Icon className="w-5 h-5 text-electric-blue" />
                    </div>
                    <div className="flex-1">
                      <span className="font-medium text-white block">
                        {cta.title}
                      </span>
                      <span className="text-sm text-gray-500">
                        {cta.description}
                      </span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
