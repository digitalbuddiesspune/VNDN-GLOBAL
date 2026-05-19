import Image from "next/image";
import Link from "next/link";
import { CITIES } from "@/lib/home/content";

export function CityShowcaseSection() {
  return (
    <section className="bg-[#0f0f0e] px-6 py-[100px] md:px-[60px]">
      <div className="mb-15 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <span className="mb-5 block text-[9px] tracking-[0.35em] text-[#c9a84c] uppercase">
            Our Markets
          </span>
          <h2 className="font-display text-[clamp(38px,5vw,64px)] leading-[1.1] font-light">
            Two Cities,
            <br />
            One <em className="text-[#c9a84c] not-italic">Standard</em>
          </h2>
        </div>
        <Link
          href="/projects"
          className="border-b border-[#c9a84c] pb-1 text-[10px] tracking-[0.2em] text-[#c9a84c] uppercase no-underline transition-opacity hover:opacity-60"
        >
          View All Properties
        </Link>
      </div>

      <div className="mt-[60px] grid gap-0.5 md:grid-cols-2">
        {CITIES.map((city) => (
          <Link
            key={city.slug}
            href={`/${city.slug}`}
            className="group relative block h-[400px] overflow-hidden md:h-[600px]"
          >
            <Image
              src={city.image}
              alt={city.name}
              fill
              className="object-cover brightness-50 transition-all duration-800 group-hover:scale-105 group-hover:brightness-60"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-[rgba(15,15,14,0.9)] to-transparent p-8 md:p-[50px]">
              <div className="mb-3.5 text-[8px] font-medium tracking-[0.4em] text-[#c9a84c] uppercase">
                {city.tag}
              </div>
              <div className="font-display mb-4 text-[clamp(36px,6vw,52px)] leading-none font-light">
                {city.name}
              </div>
              <div className="mb-8 flex gap-7">
                <div>
                  <span className="font-display block text-[28px] text-[#c9a84c]">
                    {city.properties}
                  </span>
                  <span className="text-[8px] tracking-[0.3em] text-[rgba(248,245,239,0.5)] uppercase">
                    Properties
                  </span>
                </div>
                <div>
                  <span className="font-display block text-[28px] text-[#c9a84c]">
                    {city.startingFrom}
                  </span>
                  <span className="text-[8px] tracking-[0.3em] text-[rgba(248,245,239,0.5)] uppercase">
                    Starting From
                  </span>
                </div>
              </div>
              <p className="mb-7 max-w-[360px] text-xs leading-[1.8] font-light tracking-[0.08em] text-[rgba(248,245,239,0.6)]">
                {city.description}
              </p>
              <span className="inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.2em] text-[#f8f5ef] uppercase transition-all duration-300 group-hover:gap-5">
                Explore {city.name}
                <span className="text-[#c9a84c]">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
