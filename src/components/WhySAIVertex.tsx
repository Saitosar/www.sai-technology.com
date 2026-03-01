"use client";

import { motion } from "framer-motion";
import { springTransition, staggerContainer, fadeScale } from "@/lib/motion";
import { useSectionInView } from "@/hooks/useActiveSectionOnScroll";
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
    description: "Strategic hub across Central Asia & MENA.",
    color: "blue" as const,
  },
  {
    icon: Handshake,
    title: "Strategic Partnership with Global Manufacturer",
    description: "Direct access to leading hardware.",
    color: "lime" as const,
  },
  {
    icon: Cpu,
    title: "Enterprise Integration Expertise",
    description: "ERP, WMS, MES—we build the layer.",
    color: "blue" as const,
  },
  {
    icon: Code2,
    title: "AI Middleware Development",
    description: "Custom control and orchestration.",
    color: "lime" as const,
  },
  {
    icon: Wrench,
    title: "Local Service & Deployment Team",
    description: "Regional presence, defined SLAs.",
    color: "blue" as const,
  },
];

export default function WhySAIVertex() {
  const sectionRef = useSectionInView("why-us");
  return (
    <section ref={sectionRef} id="why-us" className="relative py-20 md:py-24 overflow-hidden border-t border-white/5">
      <div
        className="absolute inset-0 bg-chip-pattern bg-pattern opacity-40 pointer-events-none"
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={springTransition}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Why <span className="text-electric-blue text-glow-blue">SAI Vertex</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Strategic regional player.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {whyItems.map((item) => {
            const Icon = item.icon;
            const isLime = item.color === "lime";

            return (
              <motion.div
                key={item.title}
                variants={fadeScale}
                transition={springTransition}
                className={`glass rounded-xl p-4 md:p-5 border transition-colors duration-300 hover:border-opacity-50 ${
                  isLime
                    ? "border-cyber-lime/20 hover:border-cyber-lime/50 hover:shadow-glow-lime"
                    : "border-electric-blue/20 hover:border-electric-blue/50 hover:shadow-glow-blue"
                }`}
              >
                <div
                  className={`inline-flex p-2.5 rounded-lg mb-3 ${
                    isLime ? "bg-cyber-lime/10" : "bg-electric-blue/10"
                  }`}
                >
                  <Icon
                    className={`w-6 h-6 ${
                      isLime ? "text-cyber-lime" : "text-electric-blue"
                    }`}
                  />
                </div>
                <h3 className="text-base font-bold text-white leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
