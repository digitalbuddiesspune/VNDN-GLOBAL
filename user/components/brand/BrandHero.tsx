import type { BrandEntity } from "@/lib/brand/ecosystem";
import { cn } from "@/lib/utils/cn";

const accentGradient: Record<BrandEntity["accent"], string> = {
  gold: "from-vndn-gold/20 via-transparent to-transparent",
  champagne: "from-vndn-champagne/15 via-transparent to-transparent",
  pearl: "from-vndn-pearl/15 via-transparent to-transparent",
  bronze: "from-vndn-bronze/15 via-transparent to-transparent",
  ivory: "from-vndn-ivory/10 via-transparent to-transparent",
};

type BrandHeroProps = {
  brand: BrandEntity;
  children?: React.ReactNode;
};

export function BrandHero({ brand, children }: BrandHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-vndn-border">
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b",
          accentGradient[brand.accent]
        )}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(201,169,98,0.08)_0%,_transparent_55%)]" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,transparent_0%,#c9a962_50%,transparent_100%)] bg-[length:200%_100%] animate-shimmer" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8">
        <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-vndn-muted">
          {brand.isParent ? "VNDN Ecosystem" : "Part of VNDN Global"}
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-tight tracking-wide md:text-5xl lg:text-6xl">
          {brand.name}
        </h1>
        <p className="mt-4 text-lg tracking-[0.12em] uppercase text-vndn-gold-light md:text-xl">
          {brand.tagline}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-vndn-off-white md:text-lg">
          {brand.description}
        </p>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}
