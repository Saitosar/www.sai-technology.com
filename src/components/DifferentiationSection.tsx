"use client";

import { motion } from "framer-motion";
import { differentiation } from "@/content/aurosy";
import { springTransition, staggerContainer, fadeUp } from "@/lib/motion";
import { useSectionInView } from "@/hooks/useActiveSectionOnScroll";

export default function DifferentiationSection() {
  const sectionRef = useSectionInView("differentiation");
  return (
    <section
      ref={sectionRef}
      id="differentiation"
      className="relative py-20 md:py-24 overflow-hidden border-t border-white/5"
    >
      <div
        className="absolute inset-0 bg-gear-pattern bg-pattern opacity-40 pointer-events-none"
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={springTransition}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            {differentiation.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            {differentiation.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {differentiation.items.map((item) => (
            <motion.div
              key={item.problem}
              variants={fadeUp}
              transition={springTransition}
              className="glass rounded-xl p-4 border border-electric-blue/20 hover:border-electric-blue/40 transition-colors duration-300"
            >
              <h3 className="text-sm font-bold text-electric-blue mb-1.5">
                {item.problem}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
