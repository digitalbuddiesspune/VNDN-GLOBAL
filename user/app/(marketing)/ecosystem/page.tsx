import { EcosystemSection } from "@/components/home/EcosystemSection";
import { PageHero } from "@/components/home/PageHero";

export const metadata = {
  title: "Ecosystem | VNDN Global",
  description: "VNDN Capital, Ateliers, Corporate, and Vane & Victor Partners.",
};

export default function EcosystemPage() {
  return (
    <>
      <PageHero
        eyebrow="VNDN Ecosystem"
        title={
          <>
            Integrated <em>Luxury</em>
          </>
        }
        description="Mortgages, interiors, corporate services, and real estate — unified under VNDN Global."
      />
      <EcosystemSection />
    </>
  );
}
