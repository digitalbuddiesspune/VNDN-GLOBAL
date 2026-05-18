import { BrandPageLayout } from "@/components/brand/BrandPageLayout";
import { createBrandMetadata } from "@/lib/brand/metadata";
import { getBrandBySlug } from "@/lib/brand/ecosystem";

export const metadata = createBrandMetadata("ateliers");

export default function AteliersPage() {
  const brand = getBrandBySlug("ateliers");
  if (!brand) return null;

  return (
    <BrandPageLayout
      brand={brand}
      relatedSlugs={["vane-victor", "capital", "corporate"]}
    />
  );
}
