import type { UserRole } from "./types";

export const ROLES = {
  ADMIN: "admin",
  AGENT: "agent",
  INVESTOR: "investor",
  CONTENT_MANAGER: "content_manager",
  USER: "user",
} as const satisfies Record<string, UserRole>;

export const ROLE_LABELS: Record<UserRole, string> = {
  admin: "Administrator",
  agent: "Agent",
  investor: "Investor",
  content_manager: "Content Manager",
  user: "User",
};

export const ROLE_APP_URLS: Record<UserRole, string> = {
  admin: "http://localhost:3001",
  agent: "http://localhost:3002",
  investor: "http://localhost:3003",
  content_manager: "http://localhost:3004",
  user: "http://localhost:3000",
};

export const ROLE_LOGIN_PATHS: Record<UserRole, string> = {
  admin: "/login",
  agent: "/login",
  investor: "/login",
  content_manager: "/login",
  user: "/login",
};

export function getPortalUrl(role: UserRole): string {
  return ROLE_APP_URLS[role];
}
