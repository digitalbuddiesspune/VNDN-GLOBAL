import Link from "next/link";
import { AnimateOnScroll } from "@/components/home/AnimateOnScroll";
import { SUBSIDIARY_BRANDS } from "@/lib/brand/ecosystem";

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="bg-[#1c1c1a] px-6 py-[100px] md:px-[60px]">
      <div className="mb-14 max-w-2xl">
        <span className="mb-5 block text-[9px] tracking-[0.35em] text-[#c9a84c] uppercase">
          VNDN Ecosystem
        </span>
        <h2 className="font-display text-[clamp(38px,5vw,64px)] leading-[1.1] font-light">
          One Journey, <em className="text-[#c9a84c] not-italic">Four Arms</em>
        </h2>
        <p className="mt-4 text-xs leading-8 font-light tracking-[0.1em] text-[#8a8a80]">
          Vane & Victors is the exclusive real estate arm of VNDN Global — with
          integrated capital, interiors, and corporate services for a seamless
          luxury experience.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {SUBSIDIARY_BRANDS.map((brand) => (
          <AnimateOnScroll key={brand.slug}>
            <Link
              href={brand.href}
              className="group flex flex-col border border-[rgba(201,168,76,0.2)] bg-[#0f0f0e] p-8 transition-all duration-400 hover:border-[rgba(201,168,76,0.5)] hover:bg-[rgba(201,168,76,0.05)]"
            >
              <span className="text-[9px] tracking-[0.25em] text-[#c9a84c] uppercase">
                {brand.role}
              </span>
              <h3 className="font-display mt-3 text-2xl text-[#f8f5ef] transition-colors group-hover:text-[#c9a84c]">
                {brand.name}
              </h3>
              <p className="mt-1 text-[11px] tracking-[0.12em] text-[#c9a84c] uppercase">
                {brand.tagline}
              </p>
              <p className="mt-4 flex-1 text-xs leading-8 font-light text-[#8a8a80]">
                {brand.description}
              </p>
              <span className="mt-6 text-[10px] tracking-[0.2em] text-[#f8f5ef] uppercase transition-colors group-hover:text-[#c9a84c]">
                Explore →
              </span>
            </Link>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
