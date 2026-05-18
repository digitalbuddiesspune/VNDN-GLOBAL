import type { Metadata } from "next";
import { AuthProvider } from "@vndn/shared/components/auth/AuthProvider";
import { VndnRootLayout } from "@vndn/shared/components/layout/VndnRootLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Admin Console | VNDN Global",
  description: "VNDN Global Admin Console",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <VndnRootLayout>
      <AuthProvider>{children}</AuthProvider>
    </VndnRootLayout>
  );
}
