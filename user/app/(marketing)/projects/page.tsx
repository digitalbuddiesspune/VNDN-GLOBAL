import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { PageHero } from "@/components/home/PageHero";

export const metadata = {
  title: "Projects | Vane & Victors",
  description: "Featured luxury property launches in Dubai and Ahmedabad.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Featured Projects"
        title={
          <>
            New <em>Launches</em>
          </>
        }
        description="Curated off-plan and ready residences with projected ROI, handover timelines, and exclusive V&V access."
      />
      <FeaturedProjectsSection />
    </>
  );
}
