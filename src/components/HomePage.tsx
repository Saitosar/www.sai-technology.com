"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DifferentiationSection from "@/components/DifferentiationSection";
import SolutionsByIndustry from "@/components/SolutionsByIndustry";
import WhySAIVertex from "@/components/WhySAIVertex";
import DeploymentModel from "@/components/DeploymentModel";
import GovernanceSection from "@/components/GovernanceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ActiveSectionProvider } from "@/contexts/ActiveSectionContext";

export default function HomePage() {
  return (
    <ActiveSectionProvider>
      <main className="min-h-screen bg-black bg-grid-pattern bg-grid">
        <Header />
        <Hero />
        <WhySAIVertex />
        <SolutionsByIndustry />
        <DifferentiationSection />
        <DeploymentModel />
        <GovernanceSection />
        <ContactSection />
        <Footer />
      </main>
    </ActiveSectionProvider>
  );
}
