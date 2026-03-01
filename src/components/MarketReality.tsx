"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";

const marketProblems = [
  "Lack of localization",
  "Poor integration with enterprise systems",
  "No structured deployment strategy",
  "No middleware control layer",
];

const ourSolutions = [
  "Regional integration & deployment",
  "Enterprise-grade middleware",
  "Local technical support",
  "Phased pilot strategy",
  "Industry-specific customization",
];

export default function MarketReality() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
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
            The Market <span className="text-electric-blue text-glow-blue">Reality</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Robotics hardware is advancing rapidly. But most deployments fail because of:
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 md:p-8 border border-electric-blue/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex p-3 rounded-xl bg-electric-blue/10">
                <AlertTriangle className="w-6 h-6 text-electric-blue" />
              </div>
              <h3 className="text-xl font-bold text-white">Market Challenges</h3>
            </div>
            <ul className="space-y-3">
              {marketProblems.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-gray-400"
                >
                  <span className="text-electric-blue mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 md:p-8 border border-cyber-lime/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex p-3 rounded-xl bg-cyber-lime/10">
                <CheckCircle className="w-6 h-6 text-cyber-lime" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Solution</h3>
            </div>
            <p className="text-gray-400 mb-4">SAI Vertex provides:</p>
            <ul className="space-y-3">
              {ourSolutions.map((item, index) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-gray-300"
                >
                  <CheckCircle className="w-5 h-5 text-cyber-lime shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
