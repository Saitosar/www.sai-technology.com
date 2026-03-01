"use client";

import { motion } from "framer-motion";
import { differentiation } from "@/content/vertex";

const motionShort = { duration: 0.35 };

export default function DifferentiationSection() {
  return (
    <section
      id="differentiation"
      className="relative py-24 md:py-32 overflow-hidden"
    >
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
            {differentiation.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {differentiation.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {differentiation.items.map((item, index) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...motionShort, delay: index * 0.05 }}
              className="glass rounded-2xl p-6 border border-electric-blue/20 hover:border-electric-blue/40 transition-colors duration-300"
            >
              <h3 className="text-base font-bold text-electric-blue mb-2">
                {item.problem}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
