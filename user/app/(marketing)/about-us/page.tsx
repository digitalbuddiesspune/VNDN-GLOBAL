import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhySection } from "@/components/home/WhySection";
import { PageHero } from "@/components/home/PageHero";

export const metadata = {
  title: "Why Us | Vane & Victors",
  description: "Why clients choose Vane & Victor Partners.",
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Vane & Victors"
        title={
          <>
            The <em>Difference</em>
          </>
        }
        description="Discretion, local expertise, and white-glove service across every transaction."
      />
      <WhySection />
      <TestimonialsSection />
    </>
  );
}
