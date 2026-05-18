import { DashboardShell } from "@vndn/shared/components/layout/DashboardShell";
import { appConfig } from "@/lib/app-config";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell
      navItems={appConfig.navItems}
      role={appConfig.role}
      appName={appConfig.appName}
    >
      {children}
    </DashboardShell>
  );
}
