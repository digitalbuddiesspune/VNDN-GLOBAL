import { AnimateOnScroll } from "@/components/home/AnimateOnScroll";
import { AnimatedStat } from "@/components/home/AnimatedStat";
import { SectionHeader } from "@/components/home/SectionHeader";
import { STATS } from "@/lib/home/content";

export function StatsSection() {
  return (
    <section className="home-section home-section--charcoal">
      <SectionHeader
        align="center"
        eyebrow="By the Numbers"
        title={
          <>
            Transaction <em>Metrics</em>
          </>
        }
      />
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px border border-[var(--home-border)] bg-[var(--home-border)] lg:grid-cols-4">
        {STATS.map((stat) => (
          <AnimateOnScroll
            key={stat.label}
            className="group bg-[var(--home-charcoal)] px-5 py-10 text-center md:px-8 md:py-12"
          >
            <AnimatedStat
              target={stat.number}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.number % 1 !== 0 ? 1 : 0}
            />
            <p className="mt-3 text-xs tracking-wide text-[var(--home-muted)] uppercase">
              {stat.label}
            </p>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
