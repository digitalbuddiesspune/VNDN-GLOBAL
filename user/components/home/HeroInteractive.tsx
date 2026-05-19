"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import {
  CITIES,
  COMMUNITY_SUGGESTIONS,
  PROPERTY_MODES,
  type CitySlug,
  type PropertyMode,
} from "@/lib/home/content";
import { cn } from "@/lib/utils/cn";

export function HeroInteractive() {
  const [activeCity, setActiveCity] = useState<CitySlug>("dubai");
  const [mode, setMode] = useState<PropertyMode>("buy");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COMMUNITY_SUGGESTIONS.filter((c) => c.city === activeCity)
      .filter((c) => !q || c.name.toLowerCase().includes(q))
      .slice(0, 6);
  }, [query, activeCity]);

  const handleSelect = (name: string) => {
    setQuery(name);
    setOpen(false);
  };

  const cityLabel = activeCity === "dubai" ? "Dubai" : "Ahmedabad";

  return (
    <div className="mx-auto w-full max-w-2xl text-left">
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        {CITIES.map((city) => (
          <button
            key={city.slug}
            type="button"
            onClick={() => {
              setActiveCity(city.slug);
              setQuery("");
              setOpen(false);
            }}
            className={cn(
              "rounded-full px-5 py-2.5 text-xs font-medium tracking-wide uppercase transition-colors",
              activeCity === city.slug
                ? "bg-[var(--home-gold)] text-[var(--home-dark)]"
                : "border border-[var(--home-border)] bg-black/40 text-[var(--home-muted)] hover:border-[var(--home-gold)] hover:text-[var(--home-cream)]"
            )}
          >
            {city.name}
          </button>
        ))}
      </div>

      <div className="home-card overflow-hidden rounded-xl shadow-2xl shadow-black/40">
        <div className="flex border-b border-[var(--home-border)]">
          {PROPERTY_MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMode(m.id)}
              className={cn(
                "flex-1 py-3.5 text-xs font-semibold tracking-wide uppercase transition-colors",
                mode === m.id
                  ? "bg-[var(--home-gold)] text-[var(--home-dark)]"
                  : "text-[var(--home-muted)] hover:bg-white/5 hover:text-[var(--home-cream)]"
              )}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div className="relative flex flex-col gap-3 p-4 sm:flex-row sm:items-center">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <svg
              className="h-5 w-5 shrink-0 text-[var(--home-gold)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-5.2-5.2M11 18a7 7 0 100-14 7 7 0 000 14z"
              />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setOpen(true);
              }}
              onFocus={() => setOpen(true)}
              onBlur={() => setTimeout(() => setOpen(false), 150)}
              placeholder={`Search communities in ${cityLabel}…`}
              className="w-full bg-transparent text-sm text-[var(--home-cream)] outline-none placeholder:text-[var(--home-muted)]"
              autoComplete="off"
            />
          </div>
          <Link
            href={`/${activeCity}?mode=${mode}${query ? `&q=${encodeURIComponent(query)}` : ""}`}
            className="home-btn-primary shrink-0 sm:px-8"
          >
            Search
          </Link>
        </div>

        {open && suggestions.length > 0 ? (
          <ul className="max-h-48 overflow-y-auto border-t border-[var(--home-border)]">
            {suggestions.map((s) => (
              <li key={s.name}>
                <button
                  type="button"
                  onMouseDown={() => handleSelect(s.name)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-[var(--home-cream)] transition-colors hover:bg-white/5"
                >
                  <span>{s.name}</span>
                  <span className="text-xs text-[var(--home-muted)] uppercase">{s.city}</span>
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {CITIES.map((city) => (
          <Link
            key={city.slug}
            href={`/${city.slug}`}
            className={cn(
              "group rounded-lg border p-5 text-center transition-all",
              activeCity === city.slug
                ? "border-[var(--home-gold)] bg-[var(--home-gold)]/10"
                : "border-[var(--home-border)] bg-black/30 hover:border-[var(--home-gold)]/60"
            )}
          >
            <span className="home-eyebrow text-[10px]">Explore</span>
            <span className="font-display mt-2 block text-2xl text-[var(--home-cream)]">
              {city.name}
            </span>
            <span className="mt-1 block text-xs text-[var(--home-muted)]">{city.heroCount}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

