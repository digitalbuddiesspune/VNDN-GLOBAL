import { HomeFooter } from "@/components/home/HomeFooter";
import { HomeNav } from "@/components/home/HomeNav";

export function PublicSiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="home-page">
      <HomeNav />
      <main>{children}</main>
      <HomeFooter />
    </div>
  );
}
