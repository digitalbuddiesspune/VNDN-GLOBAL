"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils/cn";

type AnimateOnScrollProps = {
  children: React.ReactNode;
  className?: string;
};

export function AnimateOnScroll({ children, className }: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("home-animate-in", className)}>
      {children}
    </div>
  );
}
