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

  return (
    <div className="w-full max-w-[720px]">
      {/* City ticker tabs */}
      <div className="mb-6 flex justify-center gap-0.5">
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
              "relative px-8 py-3 text-[9px] font-medium tracking-[0.3em] uppercase transition-all duration-300",
              activeCity === city.slug
                ? "bg-[rgba(201,168,76,0.15)] text-[#c9a84c] border border-[rgba(201,168,76,0.5)]"
                : "border border-[rgba(201,168,76,0.15)] text-[#8a8a80] hover:text-[#f8f5ef] hover:border-[rgba(201,168,76,0.3)]"
            )}
          >
            {city.name}
            {activeCity === city.slug && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c9a84c]" />
            )}
          </button>
        ))}
      </div>

      {/* Smart search */}
      <div className="relative border border-[rgba(201,168,76,0.3)] bg-[rgba(15,15,14,0.75)] backdrop-blur-md">
        <div className="flex border-b border-[rgba(201,168,76,0.2)]">
          {PROPERTY_MODES.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setMode(m.id)}
              className={cn(
                "flex-1 py-3.5 text-[9px] font-medium tracking-[0.25em] uppercase transition-colors",
                mode === m.id
                  ? "bg-[#c9a84c] text-[#0f0f0e]"
                  : "text-[#8a8a80] hover:text-[#f8f5ef]"
              )}
            >
              {m.label}
            </button>
          ))}
        </div>

        <div className="relative flex items-center gap-3 px-5 py-4">
          <svg
            className="h-4 w-4 shrink-0 text-[#c9a84c]"
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
            placeholder={`Search communities in ${activeCity === "dubai" ? "Dubai" : "Ahmedabad"}…`}
            className="flex-1 bg-transparent text-sm font-light tracking-wide text-[#f8f5ef] outline-none placeholder:text-[#8a8a80]"
            autoComplete="off"
          />
          <Link
            href={`/${activeCity}?mode=${mode}${query ? `&q=${encodeURIComponent(query)}` : ""}`}
            className="shrink-0 bg-[#c9a84c] px-5 py-2.5 text-[9px] font-medium tracking-[0.2em] text-[#0f0f0e] uppercase no-underline transition-colors hover:bg-[#e8d49a]"
          >
            Search
          </Link>
        </div>

        {open && suggestions.length > 0 && (
          <ul className="absolute left-0 right-0 top-full z-20 max-h-48 overflow-y-auto border border-t-0 border-[rgba(201,168,76,0.3)] bg-[#1c1c1a] shadow-xl">
            {suggestions.map((s) => (
              <li key={s.name}>
                <button
                  type="button"
                  onMouseDown={() => handleSelect(s.name)}
                  className="flex w-full items-center justify-between px-5 py-3 text-left text-xs font-light text-[#f8f5ef] transition-colors hover:bg-[rgba(201,168,76,0.08)]"
                >
                  <span>{s.name}</span>
                  <span className="text-[9px] tracking-[0.2em] text-[#8a8a80] uppercase">
                    {s.city}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* City explore cards */}
      <div id="cities" className="mt-8 flex justify-center gap-0.5">
        {CITIES.map((city) => (
          <Link
            key={city.slug}
            href={`/${city.slug}`}
            className={cn(
              "group relative flex flex-col items-center gap-2.5 overflow-hidden border px-10 py-6 backdrop-blur-[10px] transition-all duration-400 md:px-[52px] md:py-7",
              activeCity === city.slug
                ? "border-[rgba(201,168,76,0.5)] bg-[rgba(201,168,76,0.08)]"
                : "border-[rgba(201,168,76,0.2)] bg-[rgba(15,15,14,0.5)] hover:border-[rgba(201,168,76,0.5)] hover:bg-[rgba(201,168,76,0.08)]"
            )}
          >
            <span className="absolute right-0 bottom-0 left-0 h-0.5 origin-left scale-x-0 bg-[#c9a84c] transition-transform duration-400 group-hover:scale-x-100" />
            <span className="text-[8px] font-medium tracking-[0.3em] text-[#c9a84c] uppercase">
              Explore
            </span>
            <span className="font-display text-2xl tracking-[0.04em] text-[#f8f5ef] md:text-[28px]">
              {city.name}
            </span>
            <span className="text-[10px] font-light tracking-[0.2em] text-[#8a8a80]">
              {city.heroCount}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
