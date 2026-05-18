import { adminNav } from "@vndn/shared/config/navigation";
import type { UserRole } from "@vndn/shared/auth/types";

export const appConfig = {
  role: "admin" as UserRole,
  appName: "Admin Console",
  navItems: adminNav,
  dashboardPath: "/dashboard",
};
