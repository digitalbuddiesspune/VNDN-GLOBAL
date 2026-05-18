import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/home/AnimateOnScroll";
import { WHY_ITEMS } from "@/lib/home/content";

export function WhySection() {
  return (
    <section id="about" className="bg-[#1c1c1a] px-6 py-[100px] md:px-[60px]">
      <span className="mb-5 block text-[9px] tracking-[0.35em] text-[#c9a84c] uppercase">
        The Vane & Victors Difference
      </span>
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <h2 className="font-display text-[clamp(38px,5vw,64px)] leading-[1.1] font-light">
          A Legacy of <em className="text-[#c9a84c] not-italic">Trust</em>
        </h2>
        <Link
          href="/vane-victor"
          className="shrink-0 border-b border-[#c9a84c] pb-1 text-[10px] tracking-[0.2em] text-[#c9a84c] uppercase no-underline transition-opacity hover:opacity-60"
        >
          About V&V Partners
        </Link>
      </div>

      <div className="mt-20 grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="relative h-[420px] md:h-[560px]">
          <Image
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
            alt="Luxury interior"
            width={600}
            height={420}
            className="absolute top-0 right-0 h-[280px] w-[75%] object-cover brightness-[0.85] md:h-[420px]"
          />
          <Image
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80"
            alt="Property"
            width={400}
            height={260}
            className="absolute bottom-0 left-0 h-[180px] w-[50%] border-4 border-[#1c1c1a] object-cover brightness-[0.85] md:h-[260px]"
          />
          <div className="absolute top-[30px] left-0 bg-[#c9a84c] px-6 py-5 text-[9px] font-semibold tracking-[0.25em] text-[#0f0f0e] uppercase [writing-mode:vertical-rl] rotate-180">
            Excellence Since 2012
          </div>
        </div>

        <div className="flex flex-col gap-9">
          {WHY_ITEMS.map((item) => (
            <AnimateOnScroll
              key={item.num}
              className="flex gap-6 border-b border-[rgba(201,168,76,0.2)] pb-9 last:border-b-0 last:pb-0"
            >
              <div className="font-display w-[50px] shrink-0 text-[40px] leading-none font-light text-[rgba(201,168,76,0.3)]">
                {item.num}
              </div>
              <div>
                <div className="font-display mb-2.5 text-[22px] font-normal text-[#f8f5ef]">
                  {item.title}
                </div>
                <p className="text-xs leading-8 font-light tracking-[0.06em] text-[#8a8a80]">
                  {item.text}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
