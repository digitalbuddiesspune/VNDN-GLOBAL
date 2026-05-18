import { AnimateOnScroll } from "@/components/home/AnimateOnScroll";
import { LUXURY_SERVICES } from "@/lib/home/content";

export function LuxuryServicesSection() {
  return (
    <section className="bg-[#0f0f0e] px-6 py-[100px] md:px-[60px]">
      <div className="mb-14 text-center">
        <span className="mb-5 block text-[9px] tracking-[0.35em] text-[#c9a84c] uppercase">
          Luxury Services
        </span>
        <h2 className="font-display text-[clamp(38px,5vw,64px)] leading-[1.1] font-light">
          Beyond <em className="text-[#c9a84c] not-italic">Brokerage</em>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-xs leading-8 font-light tracking-[0.1em] text-[#8a8a80]">
          White-glove advisory for the world&apos;s most discerning property
          investors.
        </p>
      </div>

      <div className="grid gap-px border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.2)] md:grid-cols-2 lg:grid-cols-4">
        {LUXURY_SERVICES.map((service) => (
          <AnimateOnScroll
            key={service.icon}
            className="group bg-[#0f0f0e] p-8 transition-colors hover:bg-[#1c1c1a]"
          >
            <span className="font-display text-4xl font-light text-[rgba(201,168,76,0.25)] transition-colors group-hover:text-[rgba(201,168,76,0.5)]">
              {service.icon}
            </span>
            <h3 className="font-display mt-6 text-xl text-[#f8f5ef]">
              {service.title}
            </h3>
            <p className="mt-3 text-xs leading-8 font-light tracking-[0.06em] text-[#8a8a80]">
              {service.description}
            </p>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
