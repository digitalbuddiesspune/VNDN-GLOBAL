import { investorNav } from "@vndn/shared/config/navigation";
import type { UserRole } from "@vndn/shared/auth/types";

export const appConfig = {
  role: "investor" as UserRole,
  appName: "Investor Portal",
  navItems: investorNav,
  dashboardPath: "/dashboard",
};
