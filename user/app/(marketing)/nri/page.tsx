import { NriSection } from "@/components/home/NriSection";
import { ProcessTimelineSection } from "@/components/home/ProcessTimelineSection";
import { PageHero } from "@/components/home/PageHero";

export const metadata = {
  title: "NRI Investment | Vane & Victors",
  description: "NRI property investment guidance for Dubai and India.",
};

export default function NriPage() {
  return (
    <>
      <PageHero
        eyebrow="NRI Investment"
        title={
          <>
            Invest Across <em>Borders</em>
          </>
        }
        description="FEMA/NRE guidance, repatriation planning, and end-to-end support for non-resident investors."
      />
      <NriSection />
      <ProcessTimelineSection />
    </>
  );
}
