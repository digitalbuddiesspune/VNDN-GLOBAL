import Link from "next/link";
import { AnimateOnScroll } from "@/components/home/AnimateOnScroll";
import { NRI_GUIDANCE } from "@/lib/home/content";

export function NriSection() {
  return (
    <section id="nri" className="bg-[#1c1c1a] px-6 py-[100px] md:px-[60px]">
      <div className="grid items-start gap-16 lg:grid-cols-2">
        <div>
          <span className="mb-5 block text-[9px] tracking-[0.35em] text-[#c9a84c] uppercase">
            NRI Investment
          </span>
          <h2 className="font-display text-[clamp(38px,5vw,64px)] leading-[1.1] font-light">
            Cross-Border <em className="text-[#c9a84c] not-italic">Clarity</em>
          </h2>
          <p className="mt-6 text-xs leading-8 font-light tracking-[0.1em] text-[#8a8a80]">
            Navigate FEMA regulations, NRE/NRO structuring, and India–UAE tax
            treaties with advisors who specialise in NRI luxury real estate
            across Dubai and Ahmedabad.
          </p>
          <Link
            href="#inquiry"
            className="mt-8 inline-block bg-[#c9a84c] px-8 py-4 text-[10px] font-medium tracking-[0.2em] text-[#0f0f0e] uppercase no-underline transition-colors hover:bg-[#e8d49a]"
          >
            Speak to an NRI Advisor
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {NRI_GUIDANCE.map((item) => (
            <AnimateOnScroll
              key={item.title}
              className="border border-[rgba(201,168,76,0.2)] bg-[#0f0f0e] p-6"
            >
              <h3 className="font-display text-lg text-[#f8f5ef]">
                {item.title}
              </h3>
              <p className="mt-3 text-xs leading-8 font-light text-[#8a8a80]">
                {item.description}
              </p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
