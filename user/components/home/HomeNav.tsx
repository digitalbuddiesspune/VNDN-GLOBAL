"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MAIN_NAV_LINKS } from "@/lib/home/navigation";
import { cn } from "@/lib/utils/cn";

const NAV_LINKS = MAIN_NAV_LINKS.filter((link) => link.href !== "/");

export function HomeNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-[100] transition-all duration-300",
        scrolled
          ? "border-b border-[var(--home-border)] bg-[rgba(15,15,14,0.96)] shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-gradient-to-b from-[rgba(15,15,14,0.92)] to-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-[var(--home-section-x)] py-4 md:py-5">
        <Link
          href="/"
          className="font-display text-xl tracking-wide text-[var(--home-cream)] no-underline md:text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          Vane <span className="text-[var(--home-gold)]">&</span> Victors
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs font-medium tracking-[0.14em] text-[var(--home-muted)] uppercase no-underline transition-colors hover:text-[var(--home-cream)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link href="/inquire" className="home-btn-primary hidden sm:inline-flex">
            Enquire Now
          </Link>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[var(--home-border)] text-[var(--home-cream)] lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div
          className="fixed inset-0 top-[65px] z-[99] bg-black/50 lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden
        />
      ) : null}

      <div
        className={cn(
          "border-t border-[var(--home-border)] bg-[var(--home-charcoal)] lg:hidden",
          menuOpen ? "block" : "hidden"
        )}
      >
        <ul className="flex flex-col px-[var(--home-section-x)] py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-[var(--home-border)] py-4 text-sm font-medium tracking-wide text-[var(--home-cream)] no-underline last:border-0"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <Link
              href="/inquire"
              onClick={() => setMenuOpen(false)}
              className="home-btn-primary w-full"
            >
              Enquire Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
