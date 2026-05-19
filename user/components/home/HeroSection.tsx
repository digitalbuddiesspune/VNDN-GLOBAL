import { HeroInteractive } from "@/components/home/HeroInteractive";
import { HeroParallax } from "@/components/home/HeroParallax";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-20 pb-16">
      <HeroParallax />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-[var(--home-section-x)] text-center">
        <span
          className="home-eyebrow mb-6 inline-block rounded-full border border-[var(--home-border)] bg-black/30 px-4 py-2 backdrop-blur-sm"
          style={{ animation: "home-hero-fade-in 0.8s ease forwards" }}
        >
          Exclusive Luxury Real Estate
        </span>
        <h1
          className="font-display text-[clamp(2.75rem,7vw,4.75rem)] leading-[1.05] font-light tracking-tight text-[var(--home-cream)]"
          style={{ animation: "home-hero-fade-in 0.8s ease 0.1s both" }}
        >
          Where <em className="text-[var(--home-gold)] not-italic">Prestige</em>
          <br />
          Meets Property
        </h1>
        <p
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--home-muted)] md:text-lg"
          style={{ animation: "home-hero-fade-in 0.8s ease 0.2s both" }}
        >
          Curated residences across Dubai and Ahmedabad — buy, rent, and invest
          with a single trusted partner.
        </p>

        <div
          className="mt-10"
          style={{ animation: "home-hero-fade-in 0.8s ease 0.35s both" }}
        >
          <HeroInteractive />
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        aria-hidden
      >
        <span className="text-[10px] tracking-[0.2em] text-[var(--home-muted)] uppercase">
          Scroll
        </span>
        <div className="h-10 w-px bg-gradient-to-b from-[var(--home-gold)] to-transparent" />
      </div>
    </section>
  );
}
