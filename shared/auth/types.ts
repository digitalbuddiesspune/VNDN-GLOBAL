export type UserRole =
  | "admin"
  | "agent"
  | "investor"
  | "content_manager"
  | "user";

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
  twoFactorEnabled?: boolean;
  createdAt?: string;
}

export interface AuthResponse {
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
}

export interface LoginPayload {
  email: string;
  password: string;
  expectedRole?: UserRole;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  role?: "user" | "investor";
  phone?: string;
}
