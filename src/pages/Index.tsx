import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import PortfolioSection from "@/components/landing/PortfolioSection";
import ClientsSection from "@/components/landing/ClientsSection";
import ServiceSection from "@/components/landing/ServiceSection";
import PackagesSection from "@/components/landing/PackagesSection";
import ProcessSection from "@/components/landing/ProcessSection";
import TargetSection from "@/components/landing/TargetSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PortfolioSection />
        <ServiceSection />
      {/*   <ClientsSection /> */}
       <PackagesSection />
        {/*    <ProcessSection />
        <TargetSection /> */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
