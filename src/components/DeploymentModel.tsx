"use client";

import { motion } from "framer-motion";

const steps = [
  "Feasibility Assessment",
  "Controlled Pilot",
  "Localization & Integration",
  "Operational Deployment",
  "Scaling & Optimization",
];

export default function DeploymentModel() {
  return (
    <section id="deployment" className="relative py-24 md:py-32 overflow-hidden">
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
            Deployment <span className="text-cyber-lime text-glow-lime">Model</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            A structured 5-step process that reduces enterprise risk.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex-1 relative"
              >
                <div className="glass rounded-2xl p-6 border border-electric-blue/20 h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-electric-blue/20 flex items-center justify-center mb-4">
                    <span className="text-electric-blue font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{step}</h3>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-electric-blue/30 -translate-y-1/2 z-10"
                    aria-hidden
                  />
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
