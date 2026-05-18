"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/cn";

export function HomeNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#cities", label: "Cities" },
    { href: "#featured", label: "Projects" },
    { href: "#ecosystem", label: "Ecosystem" },
    { href: "#nri", label: "NRI" },
    { href: "/vane-victor", label: "About" },
    { href: "#inquiry", label: "Inquire" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 right-0 left-0 z-[100] flex items-center justify-between px-6 transition-all duration-400 md:px-[60px]",
        scrolled
          ? "border-b border-[rgba(201,168,76,0.2)] bg-[rgba(15,15,14,0.97)] py-[18px]"
          : "bg-gradient-to-b from-[rgba(15,15,14,0.95)] to-transparent py-7"
      )}
    >
      <Link
        href="/"
        className="font-display text-[26px] font-normal tracking-[0.08em] text-[#f8f5ef] no-underline"
      >
        Vane <span className="text-[#c9a84c]">&</span> Victors
      </Link>

      <ul className="hidden items-center gap-11 lg:flex">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group relative pb-1 text-[10px] font-medium tracking-[0.22em] text-[#8a8a80] uppercase no-underline transition-colors hover:text-[#f8f5ef]"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#c9a84c] transition-all duration-350 group-hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#inquiry"
        className="bg-[#c9a84c] px-7 py-3 text-[10px] font-medium tracking-[0.2em] text-[#0f0f0e] uppercase no-underline transition-colors hover:bg-[#e8d49a]"
      >
        Enquire Now
      </Link>
    </nav>
  );
}
