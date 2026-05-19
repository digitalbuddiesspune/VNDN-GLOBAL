import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vane & Victors — Luxury Real Estate",
  description:
    "Curated luxury residences across Dubai and Ahmedabad. Exclusive real estate by Vane & Victors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVariables} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
