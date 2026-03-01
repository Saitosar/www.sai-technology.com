"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ArchitectureMiniDiagram from "./ArchitectureMiniDiagram";
import { hero, proofStripItems, ctaLinks } from "@/content/vertex";

const motionShort = { duration: 0.3 };

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24 pb-16">
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-60"
        aria-hidden
      />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-lime/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
          <div className="flex-1 max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={motionShort}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3"
            >
              <span className="text-glow-blue text-electric-blue">{hero.h1}</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...motionShort, delay: 0.05 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-medium mb-4"
            >
              {hero.h2}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...motionShort, delay: 0.1 }}
              className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed mb-8"
            >
              {hero.subtext}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...motionShort, delay: 0.15 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6"
            >
              <Link
                href={ctaLinks.pilot}
                className="px-6 py-3 rounded-lg font-medium border border-electric-blue text-electric-blue bg-electric-blue/5 hover:bg-electric-blue/10 btn-neon focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-300 text-center"
              >
                Request Pilot
              </Link>
              <Link
                href={ctaLinks.partnership}
                className="px-6 py-3 rounded-lg font-medium border border-cyber-lime text-cyber-lime bg-cyber-lime/5 hover:bg-cyber-lime/10 btn-neon-lime focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-lime focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-all duration-300 text-center"
              >
                Strategic Partnership
              </Link>
              <Link
                href={ctaLinks.enterprise}
                className="px-6 py-3 rounded-lg font-medium text-gray-400 hover:text-electric-blue transition-colors duration-300 text-center text-sm"
              >
                Enterprise Inquiry →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...motionShort, delay: 0.2 }}
              className="text-xs text-gray-500"
            >
              {proofStripItems.join(" • ")}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ...motionShort, delay: 0.2 }}
            className="flex-shrink-0 lg:w-80 flex justify-center lg:justify-end"
          >
            <ArchitectureMiniDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
