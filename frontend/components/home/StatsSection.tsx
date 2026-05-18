import { AnimateOnScroll } from "@/components/home/AnimateOnScroll";
import { AnimatedStat } from "@/components/home/AnimatedStat";
import { STATS } from "@/lib/home/content";

export function StatsSection() {
  return (
    <div className="bg-[#1c1c1a] px-6 py-20 md:px-[60px]">
      <div className="mb-10 text-center md:mb-14">
        <span className="mb-4 block text-[9px] tracking-[0.35em] text-[#c9a84c] uppercase">
          By the Numbers
        </span>
        <h2 className="font-display text-[clamp(28px,4vw,42px)] font-light">
          Transaction <em className="text-[#c9a84c] not-italic">Metrics</em>
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-px border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.2)] lg:grid-cols-4">
        {STATS.map((stat) => (
          <AnimateOnScroll
            key={stat.label}
            className="group relative overflow-hidden bg-[#1c1c1a] px-6 py-12 text-center md:px-10 md:py-[50px]"
          >
            <AnimatedStat
              target={stat.number}
              prefix={stat.prefix}
              suffix={stat.suffix}
              decimals={stat.number % 1 !== 0 ? 1 : 0}
            />
            <div className="text-[9px] font-normal tracking-[0.3em] text-[#8a8a80] uppercase">
              {stat.label}
            </div>
            <span className="absolute bottom-0 left-1/2 h-0.5 w-10 -translate-x-1/2 bg-[#c9a84c] transition-all duration-400 group-hover:w-20" />
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}
