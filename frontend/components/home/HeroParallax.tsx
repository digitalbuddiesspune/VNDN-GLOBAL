"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1800&q=80";

export function HeroParallax() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = Math.min(window.scrollY, window.innerHeight);
      setOffset(y * 0.35);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 scale-110 transition-transform duration-100 will-change-transform"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <Image
          src={HERO_IMAGE}
          alt="Dubai skyline"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,15,14,0.85)_0%,rgba(28,28,26,0.6)_50%,rgba(15,15,14,0.9)_100%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
