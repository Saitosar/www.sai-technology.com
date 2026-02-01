"use client";

import { motion } from "framer-motion";
import {
  LayoutGrid,
  Brain,
  TrendingUp,
} from "lucide-react";

const expertiseItems = [
  {
    icon: LayoutGrid,
    title: "Enterprise Architecture",
    description:
      "Designing scalable, resilient systems that align technology with business strategy.",
    color: "blue" as const,
  },
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Embedding intelligence into workflows with cutting-edge ML and automation.",
    color: "lime" as const,
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    description:
      "Guiding organizations through technology-led change and innovation.",
    color: "blue" as const,
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-24 md:py-32 overflow-hidden">
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
            Our <span className="text-cyber-lime text-glow-lime">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Core capabilities that power our ecosystem approach.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {expertiseItems.map((item, index) => {
            const Icon = item.icon;
            const isLime = item.color === "lime";

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className={`glass rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:border-opacity-50 ${
                  isLime
                    ? "border-cyber-lime/20 hover:border-cyber-lime/50 hover:shadow-glow-lime"
                    : "border-electric-blue/20 hover:border-electric-blue/50 hover:shadow-glow-blue"
                }`}
              >
                <div
                  className={`inline-flex p-3 rounded-xl mb-4 ${
                    isLime ? "bg-cyber-lime/10" : "bg-electric-blue/10"
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 ${
                      isLime ? "text-cyber-lime" : "text-electric-blue"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
