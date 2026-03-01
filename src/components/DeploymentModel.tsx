"use client";

import { motion } from "framer-motion";
import { deploymentSteps } from "@/content/vertex";
import { springTransition, staggerContainer, fadeUp } from "@/lib/motion";
import { useSectionInView } from "@/hooks/useActiveSectionOnScroll";

export default function DeploymentModel() {
  const sectionRef = useSectionInView("deployment");
  return (
    <section ref={sectionRef} id="deployment" className="relative py-20 md:py-24 overflow-hidden border-t border-white/5">
      <div
        className="absolute inset-0 bg-chip-pattern bg-pattern opacity-40 pointer-events-none"
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
            Deployment <span className="text-cyber-lime text-glow-lime">Model</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            5-step process to reduce enterprise risk.
          </p>
        </motion.div>

        <motion.div
          className="relative"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-4">
            {deploymentSteps.map((step, index) => (
              <motion.div
                key={step}
                variants={fadeUp}
                transition={springTransition}
                className="flex-1 relative"
              >
                <div className="glass rounded-xl p-4 border border-electric-blue/20 h-full flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-electric-blue/20 flex items-center justify-center mb-3">
                    <span className="text-electric-blue font-bold text-base">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white">{step}</h3>
                </div>
                {index < deploymentSteps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-electric-blue/30 -translate-y-1/2 z-10"
                    aria-hidden
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
