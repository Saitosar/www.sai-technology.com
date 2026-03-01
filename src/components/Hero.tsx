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
          transition={{ duration: 0.35, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
        >
          <span className="text-glow-blue text-electric-blue">
            SAI Vertex
          </span>
          <span className="text-gray-100"> — Enterprise Robotics Integration Partner for Central Asia & MENA</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10"
        >
          We transform intelligent robots into enterprise-ready business assets through localization, integration, and middleware solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg font-medium border border-electric-blue text-electric-blue bg-electric-blue/5 hover:bg-electric-blue/10 btn-neon focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-300"
          >
            Request Pilot Consultation
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg font-medium border border-cyber-lime text-cyber-lime bg-cyber-lime/5 hover:bg-cyber-lime/10 btn-neon-lime focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-lime focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-300"
          >
            Become Strategic Partner
          </a>
        </motion.div>
      </div>
    </section>
  );
}
