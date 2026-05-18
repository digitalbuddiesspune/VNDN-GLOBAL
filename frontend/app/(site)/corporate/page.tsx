import { BrandPageLayout } from "@/components/brand/BrandPageLayout";
import { createBrandMetadata } from "@/lib/brand/metadata";
import { getBrandBySlug } from "@/lib/brand/ecosystem";

export const metadata = createBrandMetadata("corporate");

export default function CorporatePage() {
  const brand = getBrandBySlug("corporate");
  if (!brand) return null;

  return (
    <BrandPageLayout
      brand={brand}
      relatedSlugs={["vane-victor", "capital", "ateliers"]}
    />
  );
}
