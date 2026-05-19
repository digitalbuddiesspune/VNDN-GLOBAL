import { CityShowcaseSection } from "@/components/home/CityShowcaseSection";
import { LifestyleSection } from "@/components/home/LifestyleSection";
import { PageHero } from "@/components/home/PageHero";

export const metadata = {
  title: "Cities | Vane & Victors",
  description: "Luxury real estate in Dubai and Ahmedabad.",
};

export default function CitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Markets"
        title={
          <>
            Two Cities, One <em>Standard</em>
          </>
        }
        description="Explore premium communities across Dubai and Ahmedabad with local expertise and white-glove advisory."
      />
      <CityShowcaseSection />
      <LifestyleSection />
    </>
  );
}
