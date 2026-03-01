"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { hero, proofStripItems, ctaLinks } from "@/content/vertex";
import { springTransition } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24 pb-16">
      <div
        className="absolute inset-0 bg-grid-pattern-subtle bg-grid opacity-40"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-chip-pattern bg-pattern opacity-30 pointer-events-none"
        aria-hidden
      />
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-blue/5 rounded-full blur-2xl"
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
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyber-lime/5 rounded-full blur-2xl"
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
      <motion.div
        className="absolute top-1/3 right-[15%] w-80 h-80 bg-electric-blue/8 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springTransition}
            className="block text-sm uppercase tracking-widest text-electric-blue/90 mb-2"
          >
            {hero.tagline}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.04 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-3"
          >
            <span className="text-glow-blue text-electric-blue">{hero.h1}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.08 }}
            className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed mb-8"
          >
            {hero.subtext}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.12 }}
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
            <Link
              href={ctaLinks.enterprise}
              className="cursor-pointer text-sm text-gray-500 hover:text-electric-blue transition-colors duration-300 self-center sm:ml-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
            >
              Enterprise Inquiry →
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...springTransition, delay: 0.18 }}
            className="text-xs text-gray-600"
          >
            {proofStripItems.join(" · ")}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...springTransition, delay: 0.2 }}
          className="hidden lg:flex flex-1 max-w-md xl:max-w-lg justify-center items-center"
        >
          <div className="relative glass rounded-2xl p-4 overflow-hidden shadow-[0_0_60px_rgba(0,212,255,0.15),0_0_120px_rgba(0,212,255,0.08)]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 z-10 pointer-events-none rounded-2xl" aria-hidden />
            <Image
              src="/hero-robot.png"
              alt="AGI8X Robot"
              width={512}
              height={512}
              className="object-contain relative z-0 saturate-[0.9] contrast-[1.05] drop-shadow-[0_0_30px_rgba(0,212,255,0.2)]"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
