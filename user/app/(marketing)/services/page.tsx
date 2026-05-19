import { LuxuryServicesSection } from "@/components/home/LuxuryServicesSection";
import { PageHero } from "@/components/home/PageHero";

export const metadata = {
  title: "Services | Vane & Victors",
  description: "Luxury real estate advisory and concierge services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Luxury Services"
        title={
          <>
            Beyond <em>Brokerage</em>
          </>
        }
        description="Advisory, portfolio strategy, and transaction support tailored for discerning buyers and investors."
      />
      <LuxuryServicesSection />
    </>
  );
}
