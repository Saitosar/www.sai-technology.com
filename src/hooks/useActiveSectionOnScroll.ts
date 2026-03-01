"use client";

import { useRef, useEffect } from "react";
import { useActiveSection } from "@/contexts/ActiveSectionContext";
import type { SectionId } from "@/contexts/ActiveSectionContext";

export function useSectionInView(id: SectionId) {
  const ref = useRef<HTMLElement>(null);
  const { setActiveSection } = useActiveSection();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveSection(id);
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [id, setActiveSection]);

  return ref;
}
