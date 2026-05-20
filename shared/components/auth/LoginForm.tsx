"use client";

import { useState } from "react";
import { getPortalUrl } from "../../auth/roles";
import type { UserRole } from "../../auth/types";
import { useAuth } from "./AuthProvider";

interface LoginFormProps {
  expectedRole: UserRole;
  title: string;
  subtitle?: string;
  redirectTo?: string;
}

export function LoginForm({
  expectedRole,
  title,
  subtitle,
  redirectTo = "/dashboard",
}: LoginFormProps) {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const user = await login({ email, password, expectedRole });

      if (user.role !== expectedRole) {
        window.location.href = getPortalUrl(user.role);
        return;
      }

      window.location.href = redirectTo;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-5 rounded-2xl border border-vndn-border bg-vndn-surface/80 p-8 shadow-2xl backdrop-blur"
    >
      <div className="space-y-2 text-center">
        <h1 className="font-display text-3xl text-vndn-gold">{title}</h1>
        {subtitle ? <p className="text-sm text-vndn-muted">{subtitle}</p> : null}
      </div>
      {error ? (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-200">
          {error}
        </p>
      ) : null}
      <label className="block space-y-2">
        <span className="text-xs uppercase tracking-widest text-vndn-muted">
          Email
        </span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-vndn-border bg-vndn-bg px-4 py-3 text-vndn-off-white outline-none focus:border-vndn-gold"
        />
      </label>
      <label className="block space-y-2">
        <span className="text-xs uppercase tracking-widest text-vndn-muted">
          Password
        </span>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-vndn-border bg-vndn-bg px-4 py-3 text-vndn-off-white outline-none focus:border-vndn-gold"
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-vndn-gold px-4 py-3 font-medium text-vndn-bg transition hover:bg-vndn-gold-light disabled:opacity-60"
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
