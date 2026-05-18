"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ECOSYSTEM_BRANDS } from "@/lib/brand/ecosystem";
import { cn } from "@/lib/utils/cn";

export function EcosystemNav({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav
      className={cn("flex items-center gap-1", className)}
      aria-label="VNDN ecosystem"
    >
      {ECOSYSTEM_BRANDS.map((brand) => {
        const isActive =
          brand.href === "/"
            ? pathname === "/"
            : pathname.startsWith(brand.href);

        return (
          <Link
            key={brand.slug}
            href={brand.href}
            className={cn(
              "relative px-3 py-2 text-[11px] font-medium tracking-[0.14em] uppercase transition-colors",
              isActive
                ? "text-vndn-gold"
                : "text-vndn-muted hover:text-vndn-white"
            )}
          >
            {brand.isParent ? "Global" : brand.shortName}
            {isActive && (
              <span className="absolute bottom-0 left-3 right-3 h-px bg-vndn-gold" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
