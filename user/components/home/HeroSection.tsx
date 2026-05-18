import { HeroInteractive } from "@/components/home/HeroInteractive";
import { HeroParallax } from "@/components/home/HeroParallax";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
      <HeroParallax />

      <div
        className="relative z-10 w-full max-w-[900px] px-[30px] text-center"
        style={{ animation: "home-hero-fade-in 1.4s ease forwards" }}
      >
        <div
          className="mb-9 inline-block border border-[rgba(201,168,76,0.4)] px-6 py-2 text-[9px] tracking-[0.35em] text-[#c9a84c] uppercase opacity-0"
          style={{ animation: "home-hero-fade-in 1.2s ease 0.2s forwards" }}
        >
          Exclusive Luxury Real Estate
        </div>
        <h1
          className="font-display mb-7 text-[clamp(52px,8vw,96px)] leading-none font-light tracking-[0.02em] opacity-0"
          style={{ animation: "home-hero-fade-in 1.2s ease 0.4s forwards" }}
        >
          Where <em className="text-[#c9a84c] not-italic">Prestige</em>
          <br />
          Meets Property
        </h1>
        <p
          className="mb-10 text-[13px] leading-8 font-light tracking-[0.12em] text-[rgba(248,245,239,0.6)] opacity-0"
          style={{ animation: "home-hero-fade-in 1.2s ease 0.55s forwards" }}
        >
          Curated residences across the world&apos;s most coveted addresses
        </p>

        <div
          className="mx-auto opacity-0"
          style={{ animation: "home-hero-fade-in 1.2s ease 0.7s forwards" }}
        >
          <HeroInteractive />
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 z-10 flex flex-col items-center gap-2.5"
        style={{ animation: "home-bounce 2s infinite" }}
      >
        <span className="text-[8px] tracking-[0.3em] text-[#8a8a80] uppercase">
          Scroll
        </span>
        <div className="h-[50px] w-px bg-gradient-to-b from-[#c9a84c] to-transparent" />
      </div>
    </section>
  );
}
