"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { useState } from "react";

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

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Failed to send message");
    }
  }

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
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white mb-4">
              Send a Message
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Name / Company name"
                className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/30 transition-colors"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email address"
                className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/30 transition-colors"
              />
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Your message"
                className="w-full px-4 py-3 rounded-lg glass border border-white/10 bg-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-electric-blue/50 focus:ring-1 focus:ring-electric-blue/30 transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 rounded-lg font-medium border border-electric-blue text-electric-blue bg-electric-blue/5 hover:bg-electric-blue/10 btn-neon focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending…" : "Send"}
              </button>
              {status === "success" && (
                <p className="text-sm text-cyber-lime">Message sent successfully.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
