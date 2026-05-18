import Link from "next/link";
import { LoginForm } from "@vndn/shared/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-vndn-bg px-4">
      <div className="w-full max-w-md space-y-6">
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
    </div>
  );
}
