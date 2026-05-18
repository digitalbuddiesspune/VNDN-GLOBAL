import { contentManagerNav } from "@vndn/shared/config/navigation";
import type { UserRole } from "@vndn/shared/auth/types";

export const appConfig = {
  role: "content_manager" as UserRole,
  appName: "Content Studio",
  navItems: contentManagerNav,
  dashboardPath: "/dashboard",
};
