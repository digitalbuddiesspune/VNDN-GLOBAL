"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { authApi } from "../../auth/api";
import {
  clearSession,
  getAccessToken,
  getRefreshToken,
  getStoredUser,
  persistSession,
} from "../../auth/session";
import type { AuthUser, LoginPayload, RegisterPayload } from "../../auth/types";

interface AuthContextValue {
  user: AuthUser | null;
  isLoading: boolean;
  login: (payload: LoginPayload) => Promise<AuthUser>;
  register: (payload: RegisterPayload) => Promise<AuthUser>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const hydrate = useCallback(async () => {
    const storedUser = getStoredUser();
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();

    if (!storedUser || !accessToken) {
      setIsLoading(false);
      return;
    }

    try {
      const { user: currentUser } = await authApi.me(accessToken);
      setUser(currentUser);
    } catch {
      if (refreshToken) {
        try {
          const session = await authApi.refresh(refreshToken);
          persistSession(session.user, session.accessToken, session.refreshToken);
          setUser(session.user);
          setIsLoading(false);
          return;
        } catch {
          clearSession();
        }
      }
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void hydrate();
  }, [hydrate]);

  const login = useCallback(async (payload: LoginPayload) => {
    const session = await authApi.login(payload);
    persistSession(session.user, session.accessToken, session.refreshToken);
    setUser(session.user);
    return session.user;
  }, []);

  const register = useCallback(async (payload: RegisterPayload) => {
    const session = await authApi.register(payload);
    persistSession(session.user, session.accessToken, session.refreshToken);
    setUser(session.user);
    return session.user;
  }, []);

  const logout = useCallback(async () => {
    const token = getAccessToken();
    if (token) {
      try {
        await authApi.logout(token);
      } catch {
        /* ignore */
      }
    }
    clearSession();
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, isLoading, login, register, logout }),
    [user, isLoading, login, register, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
