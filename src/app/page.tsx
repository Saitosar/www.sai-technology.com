import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MarketReality from "@/components/MarketReality";
import SolutionsByIndustry from "@/components/SolutionsByIndustry";
import WhySAIVertex from "@/components/WhySAIVertex";
import DeploymentModel from "@/components/DeploymentModel";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <MarketReality />
      <SolutionsByIndustry />
      <WhySAIVertex />
      <DeploymentModel />
      <TrustSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
