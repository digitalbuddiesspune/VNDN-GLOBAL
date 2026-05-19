export const MARQUEE_NEIGHBORHOODS = [
  "Palm Jumeirah",
  "Downtown Dubai",
  "Prahlad Nagar",
  "Business Bay",
  "SG Highway",
  "Dubai Hills",
  "Bodakdev",
  "JBR",
  "Satellite City",
  "DIFC",
  "Vastrapur",
  "Marina Gate",
] as const;

export type PropertyMode = "buy" | "rent" | "commercial";
export type CitySlug = "dubai" | "ahmedabad";

export const PROPERTY_MODES: { id: PropertyMode; label: string }[] = [
  { id: "buy", label: "Buy" },
  { id: "rent", label: "Rent" },
  { id: "commercial", label: "Commercial" },
];

export const COMMUNITY_SUGGESTIONS: {
  name: string;
  city: CitySlug;
}[] = [
  { name: "Palm Jumeirah", city: "dubai" },
  { name: "Downtown Dubai", city: "dubai" },
  { name: "Dubai Marina", city: "dubai" },
  { name: "Business Bay", city: "dubai" },
  { name: "Dubai Hills Estate", city: "dubai" },
  { name: "JBR", city: "dubai" },
  { name: "DIFC", city: "dubai" },
  { name: "Emirates Hills", city: "dubai" },
  { name: "Prahlad Nagar", city: "ahmedabad" },
  { name: "SG Highway", city: "ahmedabad" },
  { name: "Bodakdev", city: "ahmedabad" },
  { name: "Vastrapur", city: "ahmedabad" },
  { name: "Satellite", city: "ahmedabad" },
  { name: "Thaltej", city: "ahmedabad" },
  { name: "Ambli", city: "ahmedabad" },
];

export const STATS = [
  { number: 12, suffix: "+", label: "Years of Excellence", prefix: "" },
  { number: 80, suffix: "+", label: "Luxury Listings", prefix: "" },
  { number: 2, suffix: "", label: "Premier Cities", prefix: "" },
  { number: 1.2, suffix: "B+", label: "In Transactions", prefix: "₹" },
] as const;

export const CITIES = [
  {
    slug: "dubai" as const,
    name: "Dubai",
    tag: "United Arab Emirates",
    image:
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=1000&q=80",
    properties: "48",
    startingFrom: "AED 2M+",
    description:
      "From the glittering towers of Downtown to the serene shores of Palm Jumeirah — Dubai's most sought-after addresses await.",
    heroCount: "48 Properties",
  },
  {
    slug: "ahmedabad" as const,
    name: "Ahmedabad",
    tag: "Gujarat, India",
    image:
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=1000&q=80",
    properties: "32",
    startingFrom: "₹3Cr+",
    description:
      "Prahlad Nagar's elite enclaves, SG Highway's modern towers, and Bodakdev's prestigious bungalows — Gujarat's finest residences.",
    heroCount: "32 Properties",
  },
] as const;

export const LIFESTYLE_EDITORIAL = [
  {
    id: "1",
    title: "Penthouse Living",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    span: "large" as const,
  },
  {
    id: "2",
    title: "Marina Views",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&q=80",
    span: "small" as const,
  },
  {
    id: "3",
    title: "Desert Estate",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    span: "small" as const,
  },
  {
    id: "4",
    title: "Heritage Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    span: "medium" as const,
  },
] as const;

export const VIDEO_WALKTHROUGH = {
  title: "Experience Vane & Victors",
  subtitle: "A cinematic tour of our flagship listings",
  thumbnail:
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  videoUrl: "https://www.youtube.com/embed/LXb3EK8inQU",
};

export const FEATURED_PROJECTS = [
  {
    id: "marina-gate",
    name: "Marina Gate Residences",
    location: "Dubai Marina",
    city: "Dubai",
    status: "New Launch",
    price: "From AED 2.4M",
    handover: "Q4 2027",
    roi: "7.2% projected",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
  },
  {
    id: "palm-villas",
    name: "Palm Jumeirah Villas",
    location: "Palm Jumeirah",
    city: "Dubai",
    status: "Limited Release",
    price: "From AED 18M",
    handover: "Q2 2026",
    roi: "6.8% projected",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  {
    id: "prahlad-towers",
    name: "Prahlad Nagar Towers",
    location: "Prahlad Nagar",
    city: "Ahmedabad",
    status: "Pre-Launch",
    price: "From ₹3.2 Cr",
    handover: "Q1 2028",
    roi: "9.1% projected",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
] as const;

export const LUXURY_SERVICES = [
  {
    title: "Private Advisory",
    description:
      "Dedicated relationship managers for UHNW buyers, sellers, and institutional investors.",
    icon: "01",
  },
  {
    title: "Off-Plan Access",
    description:
      "First-access allocations to Dubai's most anticipated developer launches before public release.",
    icon: "02",
  },
  {
    title: "Portfolio Strategy",
    description:
      "Cross-border acquisition planning across Dubai and Ahmedabad with yield optimisation.",
    icon: "03",
  },
  {
    title: "Concierge Handover",
    description:
      "End-to-end move-in coordination through the VNDN ecosystem — interiors, finance, and corporate setup.",
    icon: "04",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery Consultation",
    description:
      "Understand your lifestyle, investment goals, and preferred markets in a private advisory session.",
  },
  {
    step: "02",
    title: "Curated Shortlist",
    description:
      "Receive a bespoke selection of on- and off-market properties aligned to your criteria.",
  },
  {
    step: "03",
    title: "Viewings & Due Diligence",
    description:
      "White-glove site visits, legal review, and developer verification across both cities.",
  },
  {
    step: "04",
    title: "Acquisition & Handover",
    description:
      "Negotiation, SPA execution, mortgage structuring via VNDN Capital, and seamless closing.",
  },
  {
    step: "05",
    title: "Move-In & Beyond",
    description:
      "Interiors by VNDN Ateliers, visa and business setup via VNDN Corporate, and ongoing portfolio care.",
  },
] as const;

export const NRI_GUIDANCE = [
  {
    title: "FEMA Compliance",
    description:
      "Guidance on Liberalised Remittance Scheme (LRS) limits and RBI regulations for Indian residents investing abroad.",
  },
  {
    title: "NRE / NRO Accounts",
    description:
      "Structuring repatriation-friendly accounts for rental income and capital gains from UAE property.",
  },
  {
    title: "Tax & Treaty Planning",
    description:
      "India–UAE DTAA considerations for rental yield, capital gains, and inheritance planning.",
  },
  {
    title: "Documentation Support",
    description:
      "PAN, Form 15CA/CB, and bank compliance documentation handled in coordination with your CA.",
  },
] as const;

export const WHY_ITEMS = [
  {
    num: "01",
    title: "Curated Exclusivity",
    text: "Every listing passes our stringent quality benchmark. We represent only properties that meet our exacting standards of luxury, location, and investment potential.",
  },
  {
    num: "02",
    title: "Dual-Market Expertise",
    text: "Deep local knowledge in both Dubai and Ahmedabad gives our clients a distinct advantage — whether buying, selling, or investing across borders.",
  },
  {
    num: "03",
    title: "White-Glove Service",
    text: "From the first viewing to the final signature, our dedicated advisors ensure every step of your journey is seamless, informed, and entirely personal.",
  },
  {
    num: "04",
    title: "Discreet Transactions",
    text: "Absolute confidentiality is our promise. Many of our finest properties never appear in public listings — accessible only through Vane & Victors.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Vane & Victors found us a Palm Jumeirah villa that wasn't even on the market yet. Their network and discretion are unmatched in Dubai's luxury sector.",
    initials: "AK",
    name: "Arjun Kapoor",
    location: "Dubai, UAE",
  },
  {
    quote:
      "The team's deep understanding of Ahmedabad's evolving premium market helped us identify a Prahlad Nagar penthouse at exceptional value. Truly insightful advisors.",
    initials: "PS",
    name: "Priya Shah",
    location: "Ahmedabad, India",
  },
  {
    quote:
      "As NRIs investing across both cities, having one trusted agency for Dubai and Ahmedabad is invaluable. Vane & Victors made the entire process effortless.",
    initials: "RM",
    name: "Rahul Mehta",
    location: "London, UK",
  },
] as const;

export const FOOTER_ECOSYSTEM_LINKS = [
  { label: "VNDN Global", href: "/" },
  { label: "Vane & Victor Partners", href: "/vane-victor" },
  { label: "VNDN Capital", href: "/capital" },
  { label: "VNDN Ateliers", href: "/ateliers" },
  { label: "VNDN Corporate", href: "/corporate" },
] as const;

export const FOOTER_DUBAI_LINKS = [
  { label: "Downtown Dubai", href: "/dubai#downtown" },
  { label: "Palm Jumeirah", href: "/dubai#palm" },
  { label: "Dubai Marina", href: "/dubai#marina" },
  { label: "Dubai Hills", href: "/dubai#hills" },
  { label: "DIFC", href: "/dubai#difc" },
  { label: "All Dubai Listings", href: "/dubai" },
] as const;

export const FOOTER_AHMEDABAD_LINKS = [
  { label: "Prahlad Nagar", href: "/ahmedabad#prahlad" },
  { label: "SG Highway", href: "/ahmedabad#sg" },
  { label: "Bodakdev", href: "/ahmedabad#bodakdev" },
  { label: "Vastrapur", href: "/ahmedabad#vastrapur" },
  { label: "Satellite", href: "/ahmedabad#satellite" },
  { label: "All Ahmedabad Listings", href: "/ahmedabad" },
] as const;

export const FOOTER_COMPANY_LINKS = [
  { label: "About Us", href: "/vane-victor" },
  { label: "Contact", href: "/contact" },
  { label: "NRI Investment", href: "/nri" },
  { label: "Our Advisors", href: "#" },
  { label: "Privacy Policy", href: "#" },
] as const;

export const OFFICES = [
  {
    label: "Dubai Headquarters",
    address: "DIFC, Gate Village, Dubai, UAE",
    phone: "+971 50 123 4567",
    email: "dubai@vanevictors.com",
  },
  {
    label: "India Office",
    address: "Prahlad Nagar, Ahmedabad, Gujarat, India",
    phone: "+91 79 0000 0000",
    email: "india@vanevictors.com",
  },
] as const;
