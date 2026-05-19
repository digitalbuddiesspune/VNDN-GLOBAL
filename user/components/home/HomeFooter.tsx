import Link from "next/link";
import {
  FOOTER_AHMEDABAD_LINKS,
  FOOTER_COMPANY_LINKS,
  FOOTER_DUBAI_LINKS,
  FOOTER_ECOSYSTEM_LINKS,
  OFFICES,
} from "@/lib/home/content";

export function HomeFooter() {
  return (
    <footer className="border-t border-[rgba(201,168,76,0.2)] bg-[#0f0f0e] px-6 pt-20 pb-10 md:px-[60px]">
      <div className="mb-15 grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <div className="xl:col-span-2">
          <Link
            href="/"
            className="font-display mb-5 block text-[28px] tracking-[0.08em] text-[#f8f5ef] no-underline"
          >
            Vane <span className="text-[#c9a84c]">&</span> Victors
          </Link>
          <p className="max-w-[300px] text-[11px] leading-[1.9] font-light tracking-[0.1em] text-[#8a8a80]">
            Part of the VNDN Global ecosystem — boutique luxury real estate
            across Dubai and Ahmedabad.
          </p>
          <div className="mt-8 space-y-4">
            {OFFICES.map((office) => (
              <div key={office.label}>
                <p className="text-[9px] tracking-[0.25em] text-[#c9a84c] uppercase">
                  {office.label}
                </p>
                <p className="mt-1 text-xs font-light text-[#8a8a80]">
                  {office.address}
                </p>
                <a
                  href={`tel:${office.phone.replace(/\s/g, "")}`}
                  className="mt-1 block text-xs text-[#f8f5ef] no-underline hover:text-[#c9a84c]"
                >
                  {office.phone}
                </a>
                <a
                  href={`mailto:${office.email}`}
                  className="block text-xs text-[#8a8a80] no-underline hover:text-[#c9a84c]"
                >
                  {office.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        <FooterColumn title="VNDN Ecosystem" links={FOOTER_ECOSYSTEM_LINKS} />
        <FooterColumn title="Dubai" links={FOOTER_DUBAI_LINKS} />
        <FooterColumn title="Ahmedabad" links={FOOTER_AHMEDABAD_LINKS} />
        <FooterColumn title="Company" links={FOOTER_COMPANY_LINKS} />
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-[rgba(201,168,76,0.2)] pt-10 md:flex-row">
        <p className="text-[10px] font-light tracking-[0.12em] text-[#8a8a80]">
          © 2025 Vane & Victors · VNDN Global. All Rights Reserved.
        </p>
        <div className="flex gap-5">
          {["Instagram", "LinkedIn", "WhatsApp"].map((social) => (
            <span
              key={social}
              className="text-[10px] tracking-[0.2em] text-[#8a8a80] uppercase"
            >
              {social}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  const className =
    "text-xs font-light tracking-[0.08em] text-[#8a8a80] no-underline transition-colors hover:text-[#f8f5ef]";

  if (href === "#" || href === "") {
    return <span className={`${className} cursor-default opacity-70`}>{label}</span>;
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="mb-6 text-[9px] font-medium tracking-[0.35em] text-[#c9a84c] uppercase">
        {title}
      </div>
      <ul className="list-none space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLink href={link.href} label={link.label} />
          </li>
        ))}
      </ul>
    </div>
  );
}
