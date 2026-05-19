import { BrandSitePage } from "@/components/brand/BrandSitePage";
import { createBrandMetadata } from "@/lib/brand/metadata";

export const metadata = createBrandMetadata("ateliers");

export default function AteliersPage() {
  return (
    <BrandSitePage
      slug="ateliers"
      relatedSlugs={["vane-victor", "capital", "corporate"]}
    />
  );
}
