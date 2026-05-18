import { HomeFooter } from "@/components/home/HomeFooter";
import { HomeNav } from "@/components/home/HomeNav";
import "../home.css";

export default function VaneVictorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="home-page">
      <HomeNav />
      <main>{children}</main>
      <HomeFooter />
    </div>
  );
}
