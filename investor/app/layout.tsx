import type { Metadata } from "next";
import { AuthProvider } from "@vndn/shared/components/auth/AuthProvider";
import { VndnRootLayout } from "@vndn/shared/components/layout/VndnRootLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Investor Portal | VNDN Global",
  description: "VNDN Global Investor Portal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <VndnRootLayout>
      <AuthProvider>{children}</AuthProvider>
    </VndnRootLayout>
  );
}
