import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/home/AnimateOnScroll";
import { VANE_VICTOR_ABOUT } from "@/lib/brand/vane-victor-about";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80";

export function VaneVictorAboutPage() {
  const { title, subtitle, intro, philosophy, umbrella, why } = VANE_VICTOR_ABOUT;

  return (
    <div className="vv-about bg-[#0f0f0e] text-[#f8f5ef]">
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden pt-28 pb-20">
        <Image
          src={HERO_IMAGE}
          alt="Luxury property"
          fill
          priority
          className="object-cover brightness-[0.45]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0e] via-[rgba(15,15,14,0.7)] to-[rgba(15,15,14,0.4)]" />
        <div className="relative z-10 mx-auto w-full max-w-4xl px-6 md:px-[60px]">
          <span className="mb-5 inline-block text-[9px] tracking-[0.35em] text-[#c9a84c] uppercase">
            {title}
          </span>
          <h1 className="font-[family-name:var(--font-cormorant)] text-[clamp(36px,6vw,72px)] leading-[1.05] font-light tracking-wide">
            {subtitle}
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="border-b border-[rgba(201,168,76,0.15)] px-6 py-20 md:px-[60px]">
        <div className="mx-auto max-w-3xl">
          <p className="text-base leading-[2] font-light tracking-[0.04em] text-[rgba(248,245,239,0.85)] md:text-lg">
            {intro}
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-[#1c1c1a] px-6 py-[100px] md:px-[60px]">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
          <AnimateOnScroll>
            <span className="mb-5 block text-[9px] tracking-[0.35em] text-[#c9a84c] uppercase">
              {philosophy.heading}
            </span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(32px,4vw,48px)] leading-[1.1] font-light">
              The <em className="text-[#c9a84c] not-italic">V&V Standard</em>
            </h2>
            <p className="mt-6 text-sm leading-8 font-light tracking-[0.06em] text-[#8a8a80]">
              {philosophy.body}
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll className="space-y-4">
            {philosophy.pillars.map((pillar, i) => (
              <div
                key={pillar}
                className="flex items-start gap-5 border border-[rgba(201,168,76,0.2)] bg-[#0f0f0e] p-6"
              >
                <span className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[rgba(201,168,76,0.4)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-sm leading-7 font-light text-[#f8f5ef]">
                  {pillar}
                </p>
              </div>
            ))}
          </AnimateOnScroll>
        </div>
      </section>

      {/* Umbrella / Ecosystem */}
      <section className="px-6 py-[100px] md:px-[60px]">
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll className="max-w-3xl">
            <span className="mb-5 block text-[9px] tracking-[0.35em] text-[#c9a84c] uppercase">
              {umbrella.heading}
            </span>
            <p className="text-sm leading-8 font-light tracking-[0.06em] text-[#8a8a80]">
              {umbrella.intro}
            </p>
          </AnimateOnScroll>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {umbrella.verticals.map((v) => (
              <AnimateOnScroll key={v.name}>
                <Link
                  href={v.href}
                  className="group flex h-full flex-col border border-[rgba(201,168,76,0.2)] bg-[#1c1c1a] p-8 transition-all duration-400 hover:border-[rgba(201,168,76,0.5)] hover:bg-[rgba(201,168,76,0.05)]"
                >
                  <span className="text-[9px] tracking-[0.25em] text-[#c9a84c] uppercase">
                    VNDN Ecosystem
                  </span>
                  <h3 className="font-[family-name:var(--font-cormorant)] mt-3 text-2xl text-[#f8f5ef] transition-colors group-hover:text-[#c9a84c]">
                    {v.name}
                  </h3>
                  <p className="mt-4 flex-1 text-xs leading-8 font-light text-[#8a8a80]">
                    {v.description}
                  </p>
                  <span className="mt-6 text-[10px] tracking-[0.2em] text-[#f8f5ef] uppercase group-hover:text-[#c9a84c]">
                    Learn more →
                  </span>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="border-t border-[rgba(201,168,76,0.15)] bg-[#1c1c1a] px-6 py-[100px] md:px-[60px]">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateOnScroll>
            <span className="mb-5 block text-[9px] tracking-[0.35em] text-[#c9a84c] uppercase">
              {why.heading}
            </span>
            <p className="text-sm leading-8 font-light tracking-[0.06em] text-[#8a8a80]">
              {why.body}
            </p>
            <p className="font-[family-name:var(--font-cormorant)] mt-10 text-xl leading-[1.7] font-light text-[#f8f5ef] italic md:text-2xl">
              {why.closing}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center md:px-[60px]">
        <div className="mx-auto max-w-xl">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-light md:text-4xl">
            Begin Your <em className="text-[#c9a84c] not-italic">Journey</em>
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="bg-[#c9a84c] px-10 py-4 text-[10px] font-medium tracking-[0.25em] text-[#0f0f0e] uppercase no-underline transition-colors hover:bg-[#e8d49a]"
            >
              Explore Properties
            </Link>
            <Link
              href="/inquire"
              className="border border-[rgba(201,168,76,0.4)] px-10 py-4 text-[10px] font-medium tracking-[0.25em] text-[#f8f5ef] uppercase no-underline transition-colors hover:border-[#c9a84c]"
            >
              Request Consultation
            </Link>
          </div>
          <Link
            href="/"
            className="mt-8 inline-block text-[10px] tracking-[0.2em] text-[#8a8a80] uppercase no-underline transition-colors hover:text-[#c9a84c]"
          >
            ← VNDN Global
          </Link>
        </div>
      </section>
    </div>
  );
}
