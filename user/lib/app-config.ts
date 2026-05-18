import { userPortalNav } from "@vndn/shared/config/navigation";
import type { UserRole } from "@vndn/shared/auth/types";

export const appConfig = {
  role: "user" as UserRole,
  appName: "My Account",
  navItems: userPortalNav,
  accountPath: "/account",
};
