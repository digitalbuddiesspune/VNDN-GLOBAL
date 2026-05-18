import { CityShowcaseSection } from "@/components/home/CityShowcaseSection";
import { ContactSection } from "@/components/home/ContactSection";
import { CustomCursor } from "@/components/home/CustomCursor";
import { EcosystemSection } from "@/components/home/EcosystemSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeFooter } from "@/components/home/HomeFooter";
import { HomeNav } from "@/components/home/HomeNav";
import { InquirySection } from "@/components/home/InquirySection";
import { LifestyleSection } from "@/components/home/LifestyleSection";
import { LuxuryServicesSection } from "@/components/home/LuxuryServicesSection";
import { MarqueeSection } from "@/components/home/MarqueeSection";
import { NriSection } from "@/components/home/NriSection";
import { ProcessTimelineSection } from "@/components/home/ProcessTimelineSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhySection } from "@/components/home/WhySection";
import "./home.css";

export default function HomePage() {
  return (
    <div className="home-page cursor-none">
      <CustomCursor />
      <HomeNav />
      <HeroSection />
      <MarqueeSection />
      <StatsSection />
      <CityShowcaseSection />
      <LifestyleSection />
      <FeaturedProjectsSection />
      <LuxuryServicesSection />
      <EcosystemSection />
      <ProcessTimelineSection />
      <NriSection />
      <WhySection />
      <TestimonialsSection />
      <InquirySection />
      <ContactSection />
      <HomeFooter />
    </div>
  );
}
