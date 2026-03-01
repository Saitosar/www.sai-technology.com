"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export type SectionId =
  | "solutions"
  | "differentiation"
  | "why-us"
  | "deployment"
  | "governance"
  | "contact"
  | null;

const ActiveSectionContext = createContext<{
  activeSection: SectionId;
  setActiveSection: (id: SectionId) => void;
}>({
  activeSection: null,
  setActiveSection: () => {},
});

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionId>(null);
  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}
