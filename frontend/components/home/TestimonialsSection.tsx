import { AnimateOnScroll } from "@/components/home/AnimateOnScroll";
import { TESTIMONIALS } from "@/lib/home/content";

export function TestimonialsSection() {
  return (
    <section className="bg-[#0f0f0e] px-6 py-[100px] md:px-[60px]">
      <div className="mx-auto max-w-[500px] text-center">
        <span className="mb-5 block text-[9px] tracking-[0.35em] text-[#c9a84c] uppercase">
          Client Stories
        </span>
        <h2 className="font-display text-[clamp(38px,5vw,64px)] leading-[1.1] font-light">
          Words of <em className="text-[#c9a84c] not-italic">Trust</em>
        </h2>
      </div>

      <div className="mt-15 grid gap-0.5 bg-[rgba(201,168,76,0.2)] md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <AnimateOnScroll
            key={t.name}
            className="bg-[#1c1c1a] px-8 py-12 md:px-10"
          >
            <span className="font-display mb-6 block text-[80px] leading-[0.8] font-light text-[rgba(201,168,76,0.15)]">
              &ldquo;
            </span>
            <p className="font-display mb-9 text-lg leading-[1.7] font-light text-[#f8f5ef] italic">
              {t.quote}
            </p>
            <div className="flex items-center gap-3.5">
              <div className="font-display flex h-[42px] w-[42px] items-center justify-center rounded-full border border-[rgba(201,168,76,0.2)] text-base text-[#c9a84c]">
                {t.initials}
              </div>
              <div>
                <div className="mb-1 text-xs font-medium tracking-[0.1em] text-[#f8f5ef]">
                  {t.name}
                </div>
                <div className="text-[10px] tracking-[0.15em] text-[#c9a84c] uppercase">
                  {t.location}
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
