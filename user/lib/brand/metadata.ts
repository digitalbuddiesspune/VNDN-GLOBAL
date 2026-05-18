import type { Metadata } from "next";
import { getBrandBySlug, SITE_CONFIG, type BrandSlug } from "./ecosystem";

export function createBrandMetadata(slug: BrandSlug): Metadata {
  const brand = getBrandBySlug(slug);
  if (!brand) {
    return { title: SITE_CONFIG.defaultTitle };
  }

  return {
    title: `${brand.name} | ${SITE_CONFIG.siteName}`,
    description: brand.description,
    openGraph: {
      title: `${brand.name} | ${SITE_CONFIG.siteName}`,
      description: brand.tagline,
      siteName: SITE_CONFIG.siteName,
      type: "website",
    },
  };
}
