import type { Metadata } from "next";
import { AuthProvider } from "@vndn/shared/components/auth/AuthProvider";
import { VndnRootLayout } from "@vndn/shared/components/layout/VndnRootLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Content Studio | VNDN Global",
  description: "VNDN Global Content Studio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <VndnRootLayout>
      <AuthProvider>{children}</AuthProvider>
    </VndnRootLayout>
  );
}
