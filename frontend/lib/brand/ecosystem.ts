export type BrandSlug =
  | "global"
  | "vane-victor"
  | "capital"
  | "ateliers"
  | "corporate";

export type BrandEntity = {
  slug: BrandSlug;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  role: string;
  href: string;
  accent: "gold" | "champagne" | "pearl" | "bronze" | "ivory";
  isParent?: boolean;
  isPrimaryRealEstate?: boolean;
};

export const VNDN_GLOBAL: BrandEntity = {
  slug: "global",
  name: "VNDN Global",
  shortName: "VNDN",
  tagline: "The Luxury Ecosystem",
  description:
    "VNDN Global is the parent holding company uniting premium real estate, capital, interiors, and corporate services across Dubai and India.",
  role: "Parent ecosystem & holding company",
  href: "/",
  accent: "gold",
  isParent: true,
};

export const ECOSYSTEM_BRANDS: BrandEntity[] = [
  VNDN_GLOBAL,
  {
    slug: "vane-victor",
    name: "Vane & Victor Partners",
    shortName: "V&V",
    tagline: "Exclusive Real Estate",
    description:
      "Premier real estate advisory and the exclusive arm of VNDN Global—strategic acquisition, high-yield investment management, and The V&V Standard across Dubai and India.",
    role: "Exclusive real estate arm",
    href: "/vane-victor",
    accent: "champagne",
    isPrimaryRealEstate: true,
  },
  {
    slug: "capital",
    name: "VNDN Capital",
    shortName: "Capital",
    tagline: "Mortgages & Financial Services",
    description:
      "Tailored mortgage solutions, NRI financing guidance, and investment structuring for discerning buyers across the VNDN portfolio.",
    role: "Mortgages & financial services",
    href: "/capital",
    accent: "pearl",
  },
  {
    slug: "ateliers",
    name: "VNDN Ateliers",
    shortName: "Ateliers",
    tagline: "Luxury Interiors & Furnishing",
    description:
      "Bespoke interior design and turnkey furnishing for move-in ready luxury homes—seamlessly integrated with your property journey.",
    role: "Luxury interiors & furnishing",
    href: "/ateliers",
    accent: "bronze",
  },
  {
    slug: "corporate",
    name: "VNDN Corporate",
    shortName: "Corporate",
    tagline: "Business Setup & Advisory",
    description:
      "Company formation, visa consultancy, and digital marketing for investors establishing presence in the UAE and beyond.",
    role: "Business setup, visa & digital marketing",
    href: "/corporate",
    accent: "ivory",
  },
];

export const SUBSIDIARY_BRANDS = ECOSYSTEM_BRANDS.filter((b) => !b.isParent);

export function getBrandBySlug(slug: BrandSlug): BrandEntity | undefined {
  return ECOSYSTEM_BRANDS.find((b) => b.slug === slug);
}

export const SITE_CONFIG = {
  siteName: "VNDN Global",
  defaultTitle: "VNDN Global | The Luxury Ecosystem",
  defaultDescription:
    "VNDN Global unites Vane & Victor Partners, VNDN Capital, VNDN Ateliers, and VNDN Corporate—delivering end-to-end luxury real estate and lifestyle services across Dubai and India.",
  locale: "en",
  offices: [
    {
      city: "Dubai",
      country: "UAE",
      label: "Dubai Headquarters",
    },
    {
      city: "Ahmedabad",
      country: "India",
      label: "India Office",
    },
  ],
  contact: {
    email: "hello@vndnglobal.com",
    phone: "+971 4 000 0000",
  },
} as const;
