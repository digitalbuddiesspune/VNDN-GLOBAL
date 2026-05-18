import { BrandPageLayout } from "@/components/brand/BrandPageLayout";
import { createBrandMetadata } from "@/lib/brand/metadata";
import { getBrandBySlug } from "@/lib/brand/ecosystem";

export const metadata = createBrandMetadata("capital");

export default function CapitalPage() {
  const brand = getBrandBySlug("capital");
  if (!brand) return null;

  return (
    <BrandPageLayout
      brand={brand}
      relatedSlugs={["vane-victor", "ateliers", "corporate"]}
    />
  );
}
