import { agentNav } from "@vndn/shared/config/navigation";
import type { UserRole } from "@vndn/shared/auth/types";

export const appConfig = {
  role: "agent" as UserRole,
  appName: "Agent Workspace",
  navItems: agentNav,
  dashboardPath: "/dashboard",
};
