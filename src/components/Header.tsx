"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useActiveSection } from "@/contexts/ActiveSectionContext";

const navLinks = [
  { hash: "why-us", label: "Why Us" },
  { hash: "solutions", label: "Solutions" },
  { hash: "deployment", label: "Deployment" },
  { hash: "governance", label: "Governance" },
  { hash: "contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { activeSection } = useActiveSection();
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  const getHref = (hash: string) =>
    isContactPage ? `/#${hash}` : `#${hash}`;

  const { scrollY } = useScroll();
  const headerBlur = useTransform(scrollY, [0, 50], [12, 24]);
  const blurStyle = useTransform(headerBlur, (v) => `blur(${v}px)`);
  const headerBorder = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.2)"]
  );

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      style={{
        backdropFilter: blurStyle,
        WebkitBackdropFilter: blurStyle,
        borderBottomColor: headerBorder,
      }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link href="/" className="cursor-pointer flex items-center gap-3">
            <Image
              src="/sai-vertex-logo.png"
              alt=""
              width={180}
              height={48}
              priority
              className="h-10 w-auto md:h-12"
            />
            <span className="font-heading text-xl font-semibold tracking-wider text-white">
              SAI Vertex
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.hash;
              return (
                <Link
                  key={link.hash}
                  href={getHref(link.hash)}
                  className={`font-heading cursor-pointer text-sm transition-colors duration-300 tracking-wider focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded ${
                    isActive ? "text-electric-blue" : "text-gray-400 hover:text-electric-blue"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            className="cursor-pointer md:hidden p-2 text-gray-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-white/10 flex flex-col gap-4"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.hash;
              return (
                <Link
                  key={link.hash}
                  href={getHref(link.hash)}
                  className={`font-heading cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded ${
                    isActive ? "text-electric-blue" : "text-gray-400 hover:text-electric-blue"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
