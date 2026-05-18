import Link from "next/link";
import type { BrandEntity } from "@/lib/brand/ecosystem";
import { cn } from "@/lib/utils/cn";

const accentBorder: Record<BrandEntity["accent"], string> = {
  gold: "group-hover:border-vndn-gold/50",
  champagne: "group-hover:border-vndn-champagne/50",
  pearl: "group-hover:border-vndn-pearl/50",
  bronze: "group-hover:border-vndn-bronze/50",
  ivory: "group-hover:border-vndn-ivory/50",
};

const accentText: Record<BrandEntity["accent"], string> = {
  gold: "text-vndn-gold",
  champagne: "text-vndn-champagne",
  pearl: "text-vndn-pearl",
  bronze: "text-vndn-bronze",
  ivory: "text-vndn-ivory",
};

type EcosystemCardProps = {
  brand: BrandEntity;
  className?: string;
};

export function EcosystemCard({ brand, className }: EcosystemCardProps) {
  if (brand.isParent) return null;

  return (
    <Link
      href={brand.href}
      className={cn(
        "group relative flex flex-col border border-vndn-border bg-vndn-surface/40 p-8 transition-all duration-500 hover:bg-vndn-surface/80",
        accentBorder[brand.accent],
        className
      )}
    >
      <span
        className={cn(
          "text-[10px] font-medium tracking-[0.2em] uppercase",
          accentText[brand.accent]
        )}
      >
        {brand.role}
      </span>
      <h3 className="mt-4 font-display text-2xl tracking-wide">
        {brand.name}
      </h3>
      <p className={cn("mt-1 text-sm tracking-wide", accentText[brand.accent])}>
        {brand.tagline}
      </p>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-vndn-off-white">
        {brand.description}
      </p>
      <span className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-vndn-white transition-colors group-hover:text-vndn-gold-light">
        Explore
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
