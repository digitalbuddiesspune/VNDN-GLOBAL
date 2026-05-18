"use client";

import Image from "next/image";
import { useState } from "react";
import { LIFESTYLE_EDITORIAL, VIDEO_WALKTHROUGH } from "@/lib/home/content";

export function LifestyleSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className="bg-[#0f0f0e] px-6 py-[100px] md:px-[60px]">
      <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="mb-5 block text-[9px] tracking-[0.35em] text-[#c9a84c] uppercase">
            Lifestyle Editorial
          </span>
          <h2 className="font-display text-[clamp(38px,5vw,64px)] leading-[1.1] font-light">
            Curated <em className="text-[#c9a84c] not-italic">Living</em>
          </h2>
        </div>
        <button
          type="button"
          onClick={() => setVideoOpen(true)}
          className="flex items-center gap-3 border border-[rgba(201,168,76,0.4)] px-6 py-3 text-[10px] tracking-[0.2em] text-[#f8f5ef] uppercase transition-colors hover:border-[#c9a84c] hover:bg-[rgba(201,168,76,0.05)]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c9a84c] text-[#c9a84c]">
            ▶
          </span>
          Watch Walkthrough
        </button>
      </div>

      <div className="grid auto-rows-[200px] grid-cols-2 gap-2 md:grid-cols-4 md:auto-rows-[220px]">
        {LIFESTYLE_EDITORIAL.map((item, i) => (
          <div
            key={item.id}
            className={`group relative overflow-hidden ${
              item.span === "large"
                ? "col-span-2 row-span-2"
                : item.span === "medium"
                  ? "col-span-2"
                  : ""
            } ${i === 0 ? "" : ""}`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,15,14,0.85)] to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
            <div className="absolute bottom-0 left-0 p-5">
              <span className="text-[9px] tracking-[0.3em] text-[#c9a84c] uppercase">
                Editorial
              </span>
              <p className="font-display mt-1 text-xl text-[#f8f5ef]">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {videoOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[rgba(15,15,14,0.95)] p-6"
          role="dialog"
          aria-modal
          aria-label="Video walkthrough"
        >
          <button
            type="button"
            onClick={() => setVideoOpen(false)}
            className="absolute top-6 right-6 text-2xl text-[#f8f5ef] transition-colors hover:text-[#c9a84c]"
            aria-label="Close video"
          >
            ×
          </button>
          <div className="w-full max-w-4xl">
            <p className="mb-2 text-[9px] tracking-[0.35em] text-[#c9a84c] uppercase">
              {VIDEO_WALKTHROUGH.subtitle}
            </p>
            <h3 className="font-display mb-6 text-3xl text-[#f8f5ef]">
              {VIDEO_WALKTHROUGH.title}
            </h3>
            <div className="relative aspect-video w-full overflow-hidden border border-[rgba(201,168,76,0.3)]">
              <iframe
                src={`${VIDEO_WALKTHROUGH.videoUrl}?autoplay=1`}
                title={VIDEO_WALKTHROUGH.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
