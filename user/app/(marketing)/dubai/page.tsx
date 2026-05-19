import Link from "next/link";
import { PageHero } from "@/components/home/PageHero";
import { CITIES } from "@/lib/home/content";

const dubai = CITIES.find((c) => c.slug === "dubai")!;

export const metadata = {
  title: "Dubai | Vane & Victors",
  description: dubai.description,
};

export default function DubaiPage() {
  return (
    <>
      <PageHero
        eyebrow={dubai.tag}
        title={dubai.name}
        description={dubai.description}
      />
      <section className="home-section home-section--dark">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-[var(--home-muted)]">
            {dubai.properties} luxury listings · Starting from {dubai.startingFrom}
          </p>
          <Link href="/inquire" className="home-btn-primary mt-8 inline-flex">
            Enquire about Dubai
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
