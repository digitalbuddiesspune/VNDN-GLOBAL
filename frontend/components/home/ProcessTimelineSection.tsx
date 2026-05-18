import { AnimateOnScroll } from "@/components/home/AnimateOnScroll";
import { PROCESS_STEPS } from "@/lib/home/content";

export function ProcessTimelineSection() {
  return (
    <section className="bg-[#0f0f0e] px-6 py-[100px] md:px-[60px]">
      <div className="mb-16 text-center">
        <span className="mb-5 block text-[9px] tracking-[0.35em] text-[#c9a84c] uppercase">
          Your Investment Journey
        </span>
        <h2 className="font-display text-[clamp(38px,5vw,64px)] leading-[1.1] font-light">
          The V&V <em className="text-[#c9a84c] not-italic">Process</em>
        </h2>
      </div>

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute top-0 bottom-0 left-6 w-px bg-[rgba(201,168,76,0.2)] md:left-1/2 md:-translate-x-px" />

        {PROCESS_STEPS.map((step, index) => (
          <AnimateOnScroll
            key={step.step}
            className={`relative mb-12 flex gap-8 last:mb-0 md:mb-16 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="hidden w-[calc(50%-2rem)] md:block" />
            <div
              className={`z-10 flex flex-1 flex-col md:max-w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
              }`}
            >
              <span className="font-display text-5xl font-light text-[rgba(201,168,76,0.25)]">
                {step.step}
              </span>
              <h3 className="font-display mt-2 text-2xl text-[#f8f5ef]">
                {step.title}
              </h3>
              <p className="mt-3 text-xs leading-8 font-light tracking-[0.06em] text-[#8a8a80]">
                {step.description}
              </p>
            </div>
            <div className="absolute left-6 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#c9a84c] bg-[#0f0f0e] md:left-1/2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c9a84c]" />
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
