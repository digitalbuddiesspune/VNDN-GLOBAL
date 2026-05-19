import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { MarqueeSection } from "@/components/home/MarqueeSection";
import { StatsSection } from "@/components/home/StatsSection";
import { HOME_EXPLORE_LINKS } from "@/lib/home/navigation";

export function HomeLandingPage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <StatsSection />

      <section className="home-section home-section--dark">
        <div className="mx-auto max-w-6xl">
          <span className="home-eyebrow">Explore</span>
          <h2 className="home-section-title mt-3">
            Discover <em>Vane & Victors</em>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--home-muted)] md:text-base">
            Browse dedicated pages for markets, projects, services, and investment
            guidance across the VNDN ecosystem.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_EXPLORE_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="home-card group rounded-xl p-6 no-underline transition-colors hover:border-[var(--home-gold)]/50"
              >
                <h3 className="font-display text-xl text-[var(--home-cream)] transition-colors group-hover:text-[var(--home-gold)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--home-muted)]">{item.description}</p>
                <span className="mt-4 inline-block text-xs font-medium tracking-wide text-[var(--home-gold)] uppercase">
                  View page →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
