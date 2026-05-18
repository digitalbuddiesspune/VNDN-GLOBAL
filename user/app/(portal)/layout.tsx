import { AuthProvider } from "@vndn/shared/components/auth/AuthProvider";
import { DashboardShell } from "@vndn/shared/components/layout/DashboardShell";
import { appConfig } from "@/lib/app-config";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <DashboardShell
        navItems={appConfig.navItems}
        role={appConfig.role}
        appName={appConfig.appName}
      >
        {children}
      </DashboardShell>
    </AuthProvider>
  );
}
