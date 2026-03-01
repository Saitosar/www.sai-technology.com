import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DifferentiationSection from "@/components/DifferentiationSection";
import SolutionsByIndustry from "@/components/SolutionsByIndustry";
import WhySAIVertex from "@/components/WhySAIVertex";
import DeploymentModel from "@/components/DeploymentModel";
import GovernanceSection from "@/components/GovernanceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <SolutionsByIndustry />
      <DifferentiationSection />
      <WhySAIVertex />
      <DeploymentModel />
      <GovernanceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
