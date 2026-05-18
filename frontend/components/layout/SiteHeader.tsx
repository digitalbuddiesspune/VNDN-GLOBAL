import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { EcosystemNav } from "@/components/brand/EcosystemNav";
import { VNDN_GLOBAL } from "@/lib/brand/ecosystem";
import { Button } from "@/components/ui/Button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-vndn-border/80 bg-vndn-void/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <BrandLogo brand={VNDN_GLOBAL} />

        <EcosystemNav className="hidden lg:flex" />

        <div className="flex items-center gap-4">
          <Link
            href="/vane-victor"
            className="hidden text-[11px] font-medium tracking-[0.14em] uppercase text-vndn-off-white transition-colors hover:text-vndn-white sm:inline"
          >
            Real Estate
          </Link>
          <Button
            href="/vane-victor"
            variant="primary"
            className="hidden sm:inline-flex"
          >
            Explore Properties
          </Button>
        </div>
      </div>

      <div className="border-t border-vndn-border/50 px-6 py-2 lg:hidden">
        <EcosystemNav className="overflow-x-auto" />
      </div>
    </header>
  );
}
