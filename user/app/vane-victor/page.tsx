import type { Metadata } from "next";
import { VaneVictorAboutPage } from "@/components/vane-victor/AboutPage";
import { VANE_VICTOR_ABOUT } from "@/lib/brand/vane-victor-about";

export const metadata: Metadata = {
  title: "About | Vane & Victor Partners",
  description: VANE_VICTOR_ABOUT.subtitle,
  openGraph: {
    title: `${VANE_VICTOR_ABOUT.title} | VNDN Global`,
    description: VANE_VICTOR_ABOUT.intro.slice(0, 160),
    type: "website",
  },
};

export default function VaneVictorPage() {
  return <VaneVictorAboutPage />;
}
