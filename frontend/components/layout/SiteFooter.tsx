import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { ECOSYSTEM_BRANDS, SITE_CONFIG, VNDN_GLOBAL } from "@/lib/brand/ecosystem";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-vndn-border bg-vndn-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <BrandLogo brand={VNDN_GLOBAL} />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-vndn-off-white">
              {SITE_CONFIG.defaultDescription}
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-vndn-gold">
              Ecosystem
            </h3>
            <ul className="mt-4 space-y-3">
              {ECOSYSTEM_BRANDS.filter((b) => !b.isParent).map((brand) => (
                <li key={brand.slug}>
                  <Link
                    href={brand.href}
                    className="text-sm text-vndn-off-white transition-colors hover:text-vndn-white"
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-vndn-gold">
              Offices
            </h3>
            <ul className="mt-4 space-y-3">
              {SITE_CONFIG.offices.map((office) => (
                <li key={office.city} className="text-sm text-vndn-off-white">
                  <span className="block text-vndn-white">{office.label}</span>
                  {office.city}, {office.country}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-medium tracking-[0.2em] uppercase text-vndn-gold">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-vndn-off-white">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="transition-colors hover:text-vndn-white"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-vndn-white"
                >
                  {SITE_CONFIG.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-vndn-border pt-8 md:flex-row">
          <p className="text-xs tracking-wide text-vndn-muted">
            © {year} {SITE_CONFIG.siteName}. All rights reserved.
          </p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-vndn-muted/70">
            Luxury Real Estate Operating System
          </p>
        </div>
      </div>
    </footer>
  );
}
