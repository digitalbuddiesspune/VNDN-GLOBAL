import { AuthProvider } from "@vndn/shared/components/auth/AuthProvider";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
