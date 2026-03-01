"use client";

import { motion } from "framer-motion";

const COLS = 12;
const ROWS = 16;

export default function DotGrid() {
  return (
    <div
      className="grid gap-2 sm:gap-3"
      style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
    >
      {Array.from({ length: COLS * ROWS }).map((_, i) => (
        <motion.div
          key={i}
          className="aspect-square rounded-full bg-electric-blue/30"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: 1,
          }}
          transition={{
            duration: 2 + (i % 5) * 0.3,
            delay: (i % 12) * 0.05,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
