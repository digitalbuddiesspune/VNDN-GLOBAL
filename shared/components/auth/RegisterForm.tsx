"use client";

import Link from "next/link";
import { useState } from "react";
import { getPortalUrl } from "../../auth/roles";
import { useAuth } from "./AuthProvider";

export function RegisterForm() {
  const { register } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"user" | "investor">("user");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const user = await register({ name, email, password, role });
      window.location.href = getPortalUrl(user.role);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
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
        <h1 className="font-display text-3xl text-vndn-gold">Create account</h1>
        <p className="text-sm text-vndn-muted">Join VNDN Global</p>
      </div>
      {error ? (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-200">
          {error}
        </p>
      ) : null}
      <label className="block space-y-2">
        <span className="text-xs uppercase tracking-widest text-vndn-muted">Full name</span>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-vndn-border bg-vndn-bg px-4 py-3 outline-none focus:border-vndn-gold"
        />
      </label>
      <label className="block space-y-2">
        <span className="text-xs uppercase tracking-widest text-vndn-muted">Email</span>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-vndn-border bg-vndn-bg px-4 py-3 outline-none focus:border-vndn-gold"
        />
      </label>
      <label className="block space-y-2">
        <span className="text-xs uppercase tracking-widest text-vndn-muted">Password</span>
        <input
          type="password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-vndn-border bg-vndn-bg px-4 py-3 outline-none focus:border-vndn-gold"
        />
      </label>
      <label className="block space-y-2">
        <span className="text-xs uppercase tracking-widest text-vndn-muted">Account type</span>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as "user" | "investor")}
          className="w-full rounded-lg border border-vndn-border bg-vndn-bg px-4 py-3 outline-none focus:border-vndn-gold"
        >
          <option value="user">Buyer / Renter</option>
          <option value="investor">Investor</option>
        </select>
      </label>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-vndn-gold px-4 py-3 font-medium text-vndn-bg hover:bg-vndn-gold-light disabled:opacity-60"
      >
        {loading ? "Creating…" : "Register"}
      </button>
      <p className="text-center text-sm text-vndn-muted">
        Already have an account?{" "}
        <Link href="/login" className="text-vndn-gold hover:underline">
          Sign in
        </Link>
      </p>
    </form>
  );
}
