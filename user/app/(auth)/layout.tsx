import { AuthLayoutProvider } from "@/components/auth/AuthLayoutProvider";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <AuthLayoutProvider>{children}</AuthLayoutProvider>;
}
