"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: "talaix",
    name: "Talaix",
    tagline: "Next-Gen AI Recruitment",
    description:
      "Smart ecosystem connecting top talent with innovative companies through advanced matching algorithms.",
    href: "https://hrtech-talaix.vercel.app/",
    accent: "blue" as const,
  },
  {
    id: "aicv",
    name: "AICV",
    tagline: "AI Resume Engineering Lab",
    description:
      "Experimental platform for building high-impact, ATS-optimized professional resumes using Computer Vision and AI.",
    href: "https://aicv.sarkhan.dev/",
    accent: "lime" as const,
  },
  {
    id: "sarkhan",
    name: "Sarkhan.dev",
    tagline: "IT Business Analysis Hub",
    description:
      "Comprehensive suite of AI-powered tools and strategic resources designed for modern IT Business & Systems Analysts.",
    href: "https://sarkhan.dev/en",
    accent: "blue" as const,
  },
];

export default function ProductShowcase() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section id="products" className="relative py-24 md:py-32 overflow-hidden">
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
            Our <span className="text-electric-blue text-glow-blue">Products</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            AI-driven platforms powering the future of work and talent.
          </p>
        </motion.div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
          {products.map((product, index) => {
            const isActive = activeId === product.id;
            const isBlue = product.accent === "blue";

            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setActiveId(product.id)}
                onMouseLeave={() => setActiveId(null)}
                className="relative group"
              >
                {/* Animated glow behind active card */}
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`absolute -inset-1 rounded-2xl blur-xl opacity-60 ${
                      isBlue ? "bg-electric-blue/30" : "bg-cyber-lime/30"
                    }`}
                    transition={{ duration: 0.3 }}
                  />
                )}

                <div
                  className={`relative glass rounded-2xl p-6 md:p-8 h-full flex flex-col border transition-all duration-300 ${
                    isActive
                      ? isBlue
                        ? "border-electric-blue/50 shadow-glow-blue"
                        : "border-cyber-lime/50 shadow-glow-lime"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <Sparkles
                      className={`w-6 h-6 ${
                        isBlue ? "text-electric-blue" : "text-cyber-lime"
                      }`}
                    />
                    <span
                      className={`text-xs font-medium tracking-wider uppercase ${
                        isBlue ? "text-electric-blue" : "text-cyber-lime"
                      }`}
                    >
                      {product.tagline}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-6">
                    {product.description}
                  </p>

                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm border transition-all duration-300 btn-neon ${
                      isBlue
                        ? "border-electric-blue text-electric-blue bg-electric-blue/5 hover:bg-electric-blue/10"
                        : "border-cyber-lime text-cyber-lime bg-cyber-lime/5 hover:bg-cyber-lime/10 btn-neon-lime"
                    }`}
                  >
                    Visit
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
