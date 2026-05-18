import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "border border-vndn-gold bg-vndn-gold text-vndn-bg hover:bg-vndn-gold-light hover:border-vndn-gold-light",
  outline:
    "border border-vndn-border bg-transparent text-vndn-white hover:border-vndn-gold hover:text-vndn-gold-light",
  ghost: "text-vndn-muted hover:text-vndn-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center px-6 py-3 text-xs font-medium tracking-[0.18em] uppercase transition-all duration-300",
        variants[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
