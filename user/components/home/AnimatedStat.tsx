"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedStatProps = {
  target: number;
  prefix?: string;
  suffix: string;
  decimals?: number;
};

export function AnimatedStat({
  target,
  prefix = "",
  suffix,
  decimals = 0,
}: AnimatedStatProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return;
        hasRun.current = true;

        const duration = 1800;
        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(target * eased);
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  const display =
    decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString();

  return (
    <div ref={ref} className="font-display mb-2.5 text-[clamp(40px,6vw,60px)] leading-none font-light text-[#f8f5ef]">
      {prefix}
      {display}
      <span className="text-[#c9a84c]">{suffix}</span>
    </div>
  );
}
