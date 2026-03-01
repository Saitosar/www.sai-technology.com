"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import {
  Store,
  Factory,
  HeartPulse,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { springTransition } from "@/lib/motion";
import { useSectionInView } from "@/hooks/useActiveSectionOnScroll";

const industries: {
  id: string;
  icon: LucideIcon;
  title: string;
  useCases: string[];
  accent: "blue" | "lime";
}[] = [
  {
    id: "retail",
    icon: Store,
    title: "Retail & Shopping Malls",
    useCases: ["Reception & tours", "Cleaning automation", "Security patrol"],
    accent: "blue",
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Industrial & Logistics",
    useCases: ["Sorting pilots", "Transport automation", "Data collection"],
    accent: "lime",
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    title: "Healthcare",
    useCases: ["Reception", "Internal logistics", "Monitoring support"],
    accent: "blue",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education & Research",
    useCases: ["Robotics labs", "AI platforms"],
    accent: "lime",
  },
];

export default function SolutionsByIndustry() {
  const sectionRef = useSectionInView("solutions");
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      duration: 25,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnMouseEnter: true,
      }),
    ]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    },
    [scrollPrev, scrollNext]
  );

  return (
    <section ref={sectionRef} id="solutions" className="relative py-20 md:py-24 overflow-hidden border-t border-white/5">
      <div
        className="absolute inset-0 bg-gear-pattern bg-pattern opacity-40 pointer-events-none"
        aria-hidden
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springTransition}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Solutions by <span className="text-cyber-lime text-glow-lime">Industry</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Industry-specific robotics integration.
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-xl cursor-grab active:cursor-grabbing"
            ref={emblaRef}
            tabIndex={0}
            role="region"
            aria-label="Industry solutions carousel"
            onKeyDown={handleKeyDown}
          >
            <div className="flex touch-pan-y -ml-4">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                const isBlue = industry.accent === "blue";

                return (
                  <div
                    key={industry.id}
                    className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ ...springTransition, delay: index * 0.05 }}
                      className={`glass rounded-2xl p-4 md:p-6 h-full border transition-colors duration-300 ${
                        isBlue
                          ? "border-electric-blue/20 hover:border-electric-blue/50 hover:shadow-glow-blue"
                          : "border-cyber-lime/20 hover:border-cyber-lime/50 hover:shadow-glow-lime"
                      }`}
                    >
                      <div
                        className={`inline-flex p-2.5 rounded-lg mb-3 ${
                          isBlue ? "bg-electric-blue/10" : "bg-cyber-lime/10"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 ${
                            isBlue ? "text-electric-blue" : "text-cyber-lime"
                          }`}
                        />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">
                        {industry.title}
                      </h3>
                      <ul className="space-y-1.5 mb-4">
                        {industry.useCases.map((useCase) => (
                          <li
                            key={useCase}
                            className="flex items-center gap-2 text-gray-400 text-xs"
                          >
                            <span
                              className={
                                isBlue ? "text-electric-blue" : "text-cyber-lime"
                              }
                            >
                              •
                            </span>
                            {useCase}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#contact"
                        className={`cursor-pointer inline-flex items-center justify-center w-full px-3 py-2 rounded-lg font-medium text-xs border transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                          isBlue
                            ? "border-electric-blue text-electric-blue bg-electric-blue/5 hover:bg-electric-blue/10 btn-neon"
                            : "border-cyber-lime text-cyber-lime bg-cyber-lime/5 hover:bg-cyber-lime/10 btn-neon-lime"
                        }`}
                      >
                        Request Industry Proposal
                      </a>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous slide"
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer p-2 rounded-lg border border-white/20 text-gray-400 hover:text-white hover:border-electric-blue/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <div className="flex gap-2" role="tablist" aria-label="Carousel dots">
              {industries.map((_, index) => (
                <motion.button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === selectedIndex}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => scrollTo(index)}
                  whileTap={{ scale: 0.98 }}
                  className={`cursor-pointer w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                    index === selectedIndex
                      ? "bg-electric-blue scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <motion.button
              type="button"
              onClick={scrollNext}
              aria-label="Next slide"
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer p-2 rounded-lg border border-white/20 text-gray-400 hover:text-white hover:border-electric-blue/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
