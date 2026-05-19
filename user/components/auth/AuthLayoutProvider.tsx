"use client";

import { AuthProvider } from "@vndn/shared/components/auth/AuthProvider";

export function AuthLayoutProvider({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
