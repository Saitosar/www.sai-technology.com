"use client";

import { motion } from "framer-motion";
import { Shield, GitBranch, FileCheck, Map } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Strategic partnership model",
  },
  {
    icon: GitBranch,
    title: "Channel alignment",
  },
  {
    icon: FileCheck,
    title: "Compliance readiness",
  },
  {
    icon: Map,
    title: "Long-term roadmap",
  },
];

export default function TrustSection() {
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
            Enterprise <span className="text-electric-blue text-glow-blue">Trust</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Built for enterprise-grade engagement and compliance.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 glass rounded-xl p-6 border border-white/10"
              >
                <div className="inline-flex p-2 rounded-lg bg-electric-blue/10 shrink-0">
                  <Icon className="w-6 h-6 text-electric-blue" />
                </div>
                <span className="text-white font-medium">{item.title}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
