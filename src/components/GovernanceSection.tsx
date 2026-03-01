"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Activity,
  Lock,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";
import { governanceCards } from "@/content/vertex";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Activity,
  Lock,
  ClipboardList,
};

const motionShort = { duration: 0.35 };

export default function GovernanceSection() {
  return (
    <section
      id="governance"
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
            Operational <span className="text-electric-blue text-glow-blue">Governance & Safety</span> Layer
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Enterprise-grade controls for deployment, security, and compliance.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {governanceCards.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...motionShort, delay: index * 0.05 }}
                className="glass rounded-2xl p-6 border border-electric-blue/20 hover:border-electric-blue/40 transition-colors duration-300"
              >
                {Icon && (
                  <div className="inline-flex p-3 rounded-xl bg-electric-blue/10 mb-4">
                    <Icon className="w-6 h-6 text-electric-blue" />
                  </div>
                )}
                <h3 className="text-lg font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
