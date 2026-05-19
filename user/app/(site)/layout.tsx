import { MarketingSiteLayout } from "@/components/layout/MarketingSiteLayout";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MarketingSiteLayout>{children}</MarketingSiteLayout>;
}
