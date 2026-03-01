"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { hero, proofStripItems, ctaLinks } from "@/content/vertex";
import { springTransition } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24 pb-16">
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-60"
        aria-hidden
      />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl"
        animate={{
          x: [0, 20, -10, 0],
          y: [0, -15, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-lime/5 rounded-full blur-3xl"
        animate={{
          x: [0, -15, 25, 0],
          y: [0, 20, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springTransition}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3"
            >
              <span className="text-glow-blue text-electric-blue">{hero.h1}</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.08 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium mb-4"
            >
              {hero.h2}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.12 }}
              className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed mb-8"
            >
              {hero.subtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.18 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6"
            >
              <motion.div whileTap={{ scale: 0.98 }}>
                <Link
                  href={ctaLinks.pilot}
                  className="cursor-pointer px-6 py-3 rounded-lg font-medium border border-electric-blue text-electric-blue bg-electric-blue/5 hover:bg-electric-blue/10 btn-neon focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-300 text-center block"
                >
                  Request Pilot
                </Link>
              </motion.div>
              <motion.div whileTap={{ scale: 0.98 }}>
                <Link
                  href={ctaLinks.partnership}
                  className="cursor-pointer px-6 py-3 rounded-lg font-medium border border-cyber-lime text-cyber-lime bg-cyber-lime/5 hover:bg-cyber-lime/10 btn-neon-lime focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-lime focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-300 text-center block"
                >
                  Strategic Partnership
                </Link>
              </motion.div>
              <motion.div whileTap={{ scale: 0.98 }}>
                <Link
                  href={ctaLinks.enterprise}
                  className="cursor-pointer px-6 py-3 rounded-lg font-medium text-gray-400 hover:text-electric-blue transition-colors duration-300 text-center text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black block"
                >
                  Enterprise Inquiry →
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...springTransition, delay: 0.25 }}
              className="text-xs text-gray-500"
            >
              {proofStripItems.join(" • ")}
            </motion.div>
        </div>
      </div>
    </section>
  );
}
