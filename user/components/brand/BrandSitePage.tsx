import { BrandPageLayout } from "@/components/brand/BrandPageLayout";
import { getBrandBySlug, type BrandSlug } from "@/lib/brand/ecosystem";

interface BrandSitePageProps {
  slug: BrandSlug;
  relatedSlugs: BrandSlug[];
}

export function BrandSitePage({ slug, relatedSlugs }: BrandSitePageProps) {
  const brand = getBrandBySlug(slug);
  if (!brand) return null;

  return <BrandPageLayout brand={brand} relatedSlugs={relatedSlugs} />;
}
