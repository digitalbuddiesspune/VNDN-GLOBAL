import Image from "next/image";
import Link from "next/link";
import { AnimateOnScroll } from "@/components/home/AnimateOnScroll";
import { FEATURED_PROJECTS } from "@/lib/home/content";

export function FeaturedProjectsSection() {
  return (
    <section id="featured" className="bg-[#1c1c1a] px-6 py-[100px] md:px-[60px]">
      <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="mb-5 block text-[9px] tracking-[0.35em] text-[#c9a84c] uppercase">
            Featured Projects
          </span>
          <h2 className="font-display text-[clamp(38px,5vw,64px)] leading-[1.1] font-light">
            New <em className="text-[#c9a84c] not-italic">Launches</em>
          </h2>
        </div>
        <Link
          href="/vane-victor"
          className="border-b border-[#c9a84c] pb-1 text-[10px] tracking-[0.2em] text-[#c9a84c] uppercase no-underline transition-opacity hover:opacity-60"
        >
          All Projects
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {FEATURED_PROJECTS.map((project) => (
          <AnimateOnScroll
            key={project.id}
            className="group border border-[rgba(201,168,76,0.2)] bg-[#0f0f0e] transition-colors hover:border-[rgba(201,168,76,0.45)]"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span className="absolute top-4 left-4 bg-[#c9a84c] px-3 py-1 text-[8px] font-medium tracking-[0.2em] text-[#0f0f0e] uppercase">
                {project.status}
              </span>
            </div>
            <div className="p-6">
              <p className="text-[9px] tracking-[0.25em] text-[#8a8a80] uppercase">
                {project.location} · {project.city}
              </p>
              <h3 className="font-display mt-2 text-2xl text-[#f8f5ef]">
                {project.name}
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-4 border-t border-[rgba(201,168,76,0.15)] pt-5">
                <div>
                  <p className="text-[8px] tracking-[0.25em] text-[#8a8a80] uppercase">
                    Pricing
                  </p>
                  <p className="mt-1 text-sm text-[#c9a84c]">{project.price}</p>
                </div>
                <div>
                  <p className="text-[8px] tracking-[0.25em] text-[#8a8a80] uppercase">
                    Handover
                  </p>
                  <p className="mt-1 text-sm text-[#f8f5ef]">{project.handover}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[8px] tracking-[0.25em] text-[#8a8a80] uppercase">
                    Projected ROI
                  </p>
                  <p className="mt-1 text-sm text-[#f8f5ef]">{project.roi}</p>
                </div>
              </div>
              <Link
                href={`/vane-victor#${project.id}`}
                className="mt-6 inline-block text-[10px] tracking-[0.2em] text-[#c9a84c] uppercase no-underline transition-opacity hover:opacity-70"
              >
                Request Brochure →
              </Link>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
