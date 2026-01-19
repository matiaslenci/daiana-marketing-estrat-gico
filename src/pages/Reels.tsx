import ReelsHeader from "@/components/reels/ReelsHeader";
import ReelsHeroSection from "@/components/reels/ReelsHeroSection";
import ReelsProblemSection from "@/components/reels/ReelsProblemSection";
import ReelsSolutionSection from "@/components/reels/ReelsSolutionSection";
import ReelsProcessSection from "@/components/reels/ReelsProcessSection";
import ReelsServiceSection from "@/components/reels/ReelsServiceSection";
import ReelsPackagesSection from "@/components/reels/ReelsPackagesSection";
import ReelsTargetSection from "@/components/reels/ReelsTargetSection";
import ReelsResultsSection from "@/components/reels/ReelsResultsSection";
import ReelsFAQSection from "@/components/reels/ReelsFAQSection";
import ReelsCTASection from "@/components/reels/ReelsCTASection";
import Footer from "@/components/landing/Footer";

const Reels = () => {
  return (
    <div className="min-h-screen bg-background">
      <ReelsHeader />
      <main>
        <ReelsHeroSection />
        <ReelsProblemSection />
        <ReelsSolutionSection />
        <ReelsProcessSection />
        <ReelsServiceSection />
        <ReelsPackagesSection />
        <ReelsTargetSection />
        <ReelsResultsSection />
        <ReelsFAQSection />
        <ReelsCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Reels;
