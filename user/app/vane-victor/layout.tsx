import { PublicSiteLayout } from "@/components/layout/PublicSiteLayout";
import "../home.css";

export default function VaneVictorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PublicSiteLayout>{children}</PublicSiteLayout>;
}
