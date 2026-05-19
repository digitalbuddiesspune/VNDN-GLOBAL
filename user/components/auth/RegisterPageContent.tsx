import Link from "next/link";
import { RegisterForm } from "@vndn/shared/components/auth/RegisterForm";
import { AuthPageShell } from "./AuthPageShell";

export function RegisterPageContent() {
  return (
    <AuthPageShell>
      <div className="space-y-6">
        <RegisterForm />
        <p className="text-center text-sm text-vndn-muted">
          Already have an account?{" "}
          <Link href="/login" className="text-vndn-gold hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </AuthPageShell>
  );
}
