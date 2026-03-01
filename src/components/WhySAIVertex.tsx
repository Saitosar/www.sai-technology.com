"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Handshake,
  Cpu,
  Code2,
  Wrench,
} from "lucide-react";

const whyItems = [
  {
    icon: Globe,
    title: "Regional Center of Embodied Intelligence",
    color: "blue" as const,
  },
  {
    icon: Handshake,
    title: "Strategic Partnership with Global Robotics Manufacturer",
    color: "lime" as const,
  },
  {
    icon: Cpu,
    title: "Enterprise Integration Expertise",
    color: "blue" as const,
  },
  {
    icon: Code2,
    title: "AI Middleware Development Capability",
    color: "lime" as const,
  },
  {
    icon: Wrench,
    title: "Local Service & Deployment Team",
    color: "blue" as const,
  },
];

export default function WhySAIVertex() {
  return (
    <section id="why-us" className="relative py-24 md:py-32 overflow-hidden">
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
            Why <span className="text-electric-blue text-glow-blue">SAI Vertex</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Strategic positioning as a serious regional player.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyItems.map((item, index) => {
            const Icon = item.icon;
            const isLime = item.color === "lime";

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  scale: 1.01,
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
                <h3 className="text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
