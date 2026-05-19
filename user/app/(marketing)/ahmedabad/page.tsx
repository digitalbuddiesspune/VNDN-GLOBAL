import Link from "next/link";
import { PageHero } from "@/components/home/PageHero";
import { CITIES } from "@/lib/home/content";

const ahmedabad = CITIES.find((c) => c.slug === "ahmedabad")!;

export const metadata = {
  title: "Ahmedabad | Vane & Victors",
  description: ahmedabad.description,
};

export default function AhmedabadPage() {
  return (
    <>
      <PageHero
        eyebrow={ahmedabad.tag}
        title={ahmedabad.name}
        description={ahmedabad.description}
      />
      <section className="home-section home-section--dark">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-[var(--home-muted)]">
            {ahmedabad.properties} luxury listings · Starting from {ahmedabad.startingFrom}
          </p>
          <Link href="/inquire" className="home-btn-primary mt-8 inline-flex">
            Enquire about Ahmedabad
          </Link>
          <Link
            href="/cities"
            className="mt-4 block text-sm text-[var(--home-gold)] no-underline hover:underline"
          >
            ← All cities
          </Link>
        </div>
      </section>
    </>
  );
}
