import { LoginForm } from "@vndn/shared/components/auth/LoginForm";
import { appConfig } from "@/lib/app-config";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-vndn-bg px-4">
      <LoginForm
        expectedRole={appConfig.role}
        title="Investor Portal"
        subtitle="Sign in to your VNDN workspace"
        redirectTo={appConfig.dashboardPath}
      />
    </div>
  );
}
