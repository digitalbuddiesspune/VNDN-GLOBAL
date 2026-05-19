import Link from "next/link";
import { LoginForm } from "@vndn/shared/components/auth/LoginForm";
import { AuthPageShell } from "./AuthPageShell";

export function LoginPageContent() {
  return (
    <AuthPageShell>
      <div className="space-y-6">
        <LoginForm
          expectedRole="user"
          title="Welcome back"
          subtitle="Sign in to your VNDN account"
          redirectTo="/account"
        />
        <p className="text-center text-sm text-vndn-muted">
          New here?{" "}
          <Link href="/register" className="text-vndn-gold hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </AuthPageShell>
  );
}
