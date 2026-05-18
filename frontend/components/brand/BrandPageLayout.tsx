import Link from "next/link";
import { BrandHero } from "@/components/brand/BrandHero";
import { Button } from "@/components/ui/Button";
import type { BrandEntity } from "@/lib/brand/ecosystem";
import { SUBSIDIARY_BRANDS, VNDN_GLOBAL } from "@/lib/brand/ecosystem";

type BrandPageLayoutProps = {
  brand: BrandEntity;
  relatedSlugs?: string[];
};

export function BrandPageLayout({ brand, relatedSlugs }: BrandPageLayoutProps) {
  const related = SUBSIDIARY_BRANDS.filter(
    (b) =>
      b.slug !== brand.slug &&
      (!relatedSlugs || relatedSlugs.includes(b.slug))
  ).slice(0, 3);

  return (
    <>
      <BrandHero brand={brand}>
        {brand.isPrimaryRealEstate && (
          <div className="flex flex-wrap gap-4">
            <Button href="/vane-victor">View Properties</Button>
            <Button href="/" variant="outline">
              VNDN Global
            </Button>
          </div>
        )}
        {!brand.isParent && !brand.isPrimaryRealEstate && (
          <Button href="/vane-victor" variant="outline">
            Explore Real Estate
          </Button>
        )}
      </BrandHero>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-vndn-gold">
            {brand.role}
          </p>
          <h2 className="mt-4 font-display text-2xl tracking-wide md:text-3xl">
            Integrated within the VNDN ecosystem
          </h2>
          <p className="mt-4 text-base leading-relaxed text-vndn-off-white">
            {brand.name} works in concert with{" "}
            {brand.isPrimaryRealEstate
              ? "VNDN Capital, VNDN Ateliers, and VNDN Corporate"
              : "Vane & Victor Partners and sister companies"}{" "}
            to deliver a unified luxury experience—from property discovery through
            move-in and long-term investment support.
          </p>
        </div>

        {related.length > 0 && (
          <div className="mt-20 border-t border-vndn-border pt-16">
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-vndn-muted">
              Explore the ecosystem
            </p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((relatedBrand) => (
                <li key={relatedBrand.slug}>
                  <Link
                    href={relatedBrand.href}
                    className="group block border border-vndn-border p-6 transition-colors hover:border-vndn-gold/40"
                  >
                    <span className="text-xs tracking-[0.14em] uppercase text-vndn-gold">
                      {relatedBrand.shortName}
                    </span>
                    <p className="mt-2 font-display text-lg transition-opacity group-hover:opacity-90">
                      {relatedBrand.name}
                    </p>
                    <p className="mt-1 text-sm text-vndn-off-white">
                      {relatedBrand.tagline}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href={VNDN_GLOBAL.href}
                className="text-xs tracking-[0.18em] uppercase text-vndn-muted transition-colors hover:text-vndn-gold"
              >
                ← Back to {VNDN_GLOBAL.name}
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
