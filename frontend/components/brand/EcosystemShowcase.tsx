import { SUBSIDIARY_BRANDS } from "@/lib/brand/ecosystem";
import { EcosystemCard } from "./EcosystemCard";

export function EcosystemShowcase() {
  return (
    <section className="border-b border-vndn-border bg-vndn-void py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-vndn-gold">
            The Ecosystem
          </p>
          <h2 className="mt-4 font-display text-3xl tracking-wide md:text-4xl">
            One holding company. Four specialized arms.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-vndn-off-white">
            From acquisition to financing, interiors, and corporate setup—VNDN
            Global delivers a seamless luxury journey across Dubai and India.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {SUBSIDIARY_BRANDS.map((brand) => (
            <EcosystemCard key={brand.slug} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
