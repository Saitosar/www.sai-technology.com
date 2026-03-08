"use client";

import { motion } from "framer-motion";
import { springTransition, staggerContainer, fadeUp } from "@/lib/motion";
import { useSectionInView } from "@/hooks/useActiveSectionOnScroll";
import {
  ShieldCheck,
  Activity,
  Lock,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";
import { governanceCards } from "@/content/aurosy";

const iconMap: Record<string, LucideIcon> = {
  ShieldCheck,
  Activity,
  Lock,
  ClipboardList,
};

export default function GovernanceSection() {
  const sectionRef = useSectionInView("governance");
  return (
    <section
      ref={sectionRef}
      id="governance"
      className="relative py-20 md:py-24 overflow-hidden border-t border-white/5"
    >
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
            Operational <span className="text-electric-blue text-glow-blue">Governance & Safety</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Enterprise-grade controls for security and compliance.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {governanceCards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={card.title}
                variants={fadeUp}
                transition={springTransition}
                className="glass rounded-xl p-4 border border-electric-blue/20 hover:border-electric-blue/40 transition-colors duration-300"
              >
                {Icon && (
                  <div className="inline-flex p-2.5 rounded-lg bg-electric-blue/10 mb-3">
                    <Icon className="w-5 h-5 text-electric-blue" />
                  </div>
                )}
                <h3 className="text-base font-bold text-white mb-1.5">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
