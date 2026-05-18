import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import type { BrandEntity } from "@/lib/brand/ecosystem";

type BrandLogoProps = {
  brand?: Pick<BrandEntity, "name" | "shortName" | "href" | "isParent">;
  variant?: "full" | "compact";
  className?: string;
};

export function BrandLogo({
  brand,
  variant = "full",
  className,
}: BrandLogoProps) {
  const name = brand?.name ?? "VNDN Global";
  const href = brand?.href ?? "/";
  const isParent = brand?.isParent ?? true;

  return (
    <Link
      href={href}
      className={cn("group inline-flex flex-col leading-none", className)}
      aria-label={name}
    >
      {isParent ? (
        <>
          <span
            className={cn(
              "font-display tracking-[0.35em] text-vndn-gold uppercase transition-colors group-hover:text-vndn-gold-light",
              variant === "compact" ? "text-xs" : "text-sm"
            )}
          >
            VNDN
          </span>
          <span
            className={cn(
              "font-display tracking-[0.2em] text-vndn-white uppercase",
              variant === "compact" ? "text-[10px] mt-0.5" : "text-xs mt-1"
            )}
          >
            Global
          </span>
        </>
      ) : (
        <span
          className={cn(
            "font-display tracking-[0.12em] text-vndn-white uppercase transition-colors group-hover:text-vndn-gold-light",
            variant === "compact" ? "text-xs" : "text-sm"
          )}
        >
          {variant === "compact" ? (brand?.shortName ?? name) : name}
        </span>
      )}
    </Link>
  );
}
