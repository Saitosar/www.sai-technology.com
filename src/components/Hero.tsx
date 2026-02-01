"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-60"
        aria-hidden
      />
      {/* Gradient orbs for depth */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-lime/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
        >
          <span className="text-glow-blue text-electric-blue">
            Redefining Intelligence
          </span>
          <br />
          <span className="text-gray-100">through Ecosystems</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          A multi-disciplinary tech group building the next generation of
          AI-driven platforms.
        </motion.p>
      </div>
    </section>
  );
}
