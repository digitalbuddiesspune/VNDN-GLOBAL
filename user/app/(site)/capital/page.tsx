import { BrandSitePage } from "@/components/brand/BrandSitePage";
import { createBrandMetadata } from "@/lib/brand/metadata";

export const metadata = createBrandMetadata("capital");

export default function CapitalPage() {
  return (
    <BrandSitePage
      slug="capital"
      relatedSlugs={["vane-victor", "ateliers", "corporate"]}
    />
  );
}
