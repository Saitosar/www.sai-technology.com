"use client";

import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 tracking-[0.2em] uppercase"
          >
            SAI Vertex
          </motion.p>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a
              href="https://www.sai-technology.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-electric-blue transition-colors"
            >
              www.sai-technology.com
            </a>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-xs text-gray-600"
        >
          © {new Date().getFullYear()} SAI Vertex. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
