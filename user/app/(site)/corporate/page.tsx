import { BrandSitePage } from "@/components/brand/BrandSitePage";
import { createBrandMetadata } from "@/lib/brand/metadata";

export const metadata = createBrandMetadata("corporate");

export default function CorporatePage() {
  return (
    <BrandSitePage
      slug="corporate"
      relatedSlugs={["vane-victor", "capital", "ateliers"]}
    />
  );
}
