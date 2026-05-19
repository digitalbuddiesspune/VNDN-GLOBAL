import Link from "next/link";

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  action?: { href: string; label: string };
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 flex flex-col gap-6 md:mb-16 ${
        isCenter
          ? "items-center text-center"
          : "items-start md:flex-row md:items-end md:justify-between"
      }`}
    >
      <div className={isCenter ? "max-w-2xl" : "max-w-xl"}>
        <span className="home-eyebrow">{eyebrow}</span>
        <h2 className="home-section-title mt-3">{title}</h2>
        {description ? (
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--home-muted)]">
            {description}
          </p>
        ) : null}
      </div>
      {action ? (
        <Link href={action.href} className="home-link-action shrink-0">
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}
