"use client";

import { useState } from "react";
import { MARQUEE_NEIGHBORHOODS } from "@/lib/home/content";

export function MarqueeSection() {
  const [paused, setPaused] = useState(false);
  const items = [...MARQUEE_NEIGHBORHOODS, ...MARQUEE_NEIGHBORHOODS];

  return (
    <div
      className="overflow-hidden border-y border-[rgba(201,168,76,0.2)] bg-[#1c1c1a] py-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex w-max whitespace-nowrap"
        style={{
          animation: "home-marquee 25s linear infinite",
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {items.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="inline-flex shrink-0 items-center gap-5 px-10 py-5 text-xs tracking-[0.2em] text-[var(--home-muted)] uppercase transition-colors hover:text-[var(--home-gold)]"
          >
            <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-[#c9a84c]" />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
