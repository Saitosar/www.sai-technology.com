/** Spring transition for natural-feeling animations */
export const springTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20,
};

/** Stagger config for grid children */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

/** Varied initial states for visual diversity (for use with staggerContainer) */
export const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
export const fadeScale = { hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1 } };
export const fadeLeft = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } };
