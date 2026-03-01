"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
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
    useCases: [
      "Reception & guided tours",
      "Cleaning automation",
      "Security patrol",
      "Warehouse assistance",
    ],
    accent: "blue",
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Industrial & Logistics",
    useCases: [
      "Sorting pilots",
      "Transport automation",
      "Data collection",
      "Structured manufacturing pilots",
    ],
    accent: "lime",
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    title: "Healthcare",
    useCases: [
      "Reception assistance",
      "Internal logistics",
      "Data & monitoring support",
    ],
    accent: "blue",
  },
  {
    id: "education",
    icon: GraduationCap,
    title: "Education & Research",
    useCases: ["Robotics labs", "AI demonstration platforms"],
    accent: "lime",
  },
];

export default function SolutionsByIndustry() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
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
    <section id="solutions" className="relative py-24 md:py-32 overflow-hidden">
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
            Solutions by <span className="text-cyber-lime text-glow-lime">Industry</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Industry-specific robotics integration and deployment.
          </p>
        </motion.div>

        <div className="relative">
          <div
            className="overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-xl"
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
                      className={`glass rounded-2xl p-6 md:p-8 h-full border transition-all duration-300 ${
                        isBlue
                          ? "border-electric-blue/20 hover:border-electric-blue/50 hover:shadow-glow-blue"
                          : "border-cyber-lime/20 hover:border-cyber-lime/50 hover:shadow-glow-lime"
                      }`}
                    >
                      <div
                        className={`inline-flex p-3 rounded-xl mb-4 ${
                          isBlue ? "bg-electric-blue/10" : "bg-cyber-lime/10"
                        }`}
                      >
                        <Icon
                          className={`w-8 h-8 ${
                            isBlue ? "text-electric-blue" : "text-cyber-lime"
                          }`}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">
                        {industry.title}
                      </h3>
                      <ul className="space-y-2 mb-6">
                        {industry.useCases.map((useCase) => (
                          <li
                            key={useCase}
                            className="flex items-center gap-2 text-gray-400 text-sm"
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
                        className={`inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg font-medium text-sm border transition-all duration-300 ${
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
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="p-2 rounded-lg border border-white/20 text-gray-400 hover:text-white hover:border-electric-blue/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Carousel dots">
              {industries.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={index === selectedIndex}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => scrollTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                    index === selectedIndex
                      ? "bg-electric-blue scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next slide"
              className="p-2 rounded-lg border border-white/20 text-gray-400 hover:text-white hover:border-electric-blue/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-blue transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
