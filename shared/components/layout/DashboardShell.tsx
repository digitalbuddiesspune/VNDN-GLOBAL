"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ROLE_LABELS } from "../../auth/roles";
import type { UserRole } from "../../auth/types";
import type { NavItem } from "../../config/navigation";
import { useAuth } from "../auth/AuthProvider";

interface DashboardShellProps {
  children: React.ReactNode;
  navItems: NavItem[];
  role: UserRole;
  appName: string;
}

function NavLinks({
  navItems,
  pathname,
  onNavigate,
  className = "",
}: {
  navItems: NavItem[];
  pathname: string;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <nav className={`space-y-1 ${className}`}>
      {navItems.map((item) => {
        const active =
          pathname === item.href ||
          (item.href !== "/dashboard" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={`block rounded-lg px-3 py-2 text-sm transition ${
              active
                ? "bg-vndn-gold/15 text-vndn-gold"
                : "text-vndn-muted hover:bg-vndn-border/40 hover:text-vndn-off-white"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function DashboardShell({
  children,
  navItems,
  role,
  appName,
}: DashboardShellProps) {
  const pathname = usePathname();
  const { user, logout, isLoading } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-vndn-bg text-vndn-muted">
        Loading workspace…
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-vndn-bg text-vndn-off-white lg:flex-row">
      <aside className="hidden w-64 shrink-0 border-r border-vndn-border bg-vndn-surface/50 p-6 lg:block">
        <p className="text-xs uppercase tracking-[0.3em] text-vndn-gold">VNDN</p>
        <h1 className="font-display text-2xl text-vndn-gold">{appName}</h1>
        <p className="mt-1 text-xs text-vndn-muted">{ROLE_LABELS[role]}</p>
        <div className="mt-10">
          <NavLinks navItems={navItems} pathname={pathname} />
        </div>
      </aside>

      {mobileOpen ? (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      ) : null}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 transform border-r border-vndn-border bg-vndn-surface p-6 transition-transform lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-vndn-gold">VNDN</p>
        <h1 className="font-display text-xl text-vndn-gold">{appName}</h1>
        <div className="mt-8">
          <NavLinks
            navItems={navItems}
            pathname={pathname}
            onNavigate={() => setMobileOpen(false)}
          />
        </div>
      </aside>

      <div className="flex min-h-screen flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b border-vndn-border bg-vndn-bg/95 px-4 py-3 backdrop-blur sm:px-6 sm:py-4">
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="rounded-lg border border-vndn-border px-3 py-2 text-sm text-vndn-muted lg:hidden"
            aria-label="Open menu"
          >
            Menu
          </button>
          <div className="min-w-0 flex-1 lg:flex-none">
            <p className="truncate text-xs uppercase tracking-widest text-vndn-muted lg:hidden">
              {appName}
            </p>
            <p className="hidden text-xs uppercase tracking-widest text-vndn-muted lg:block">
              Signed in as
            </p>
            <p className="truncate font-medium">{user?.name || "—"}</p>
          </div>
          <button
            type="button"
            onClick={() =>
              void logout().then(() => {
                window.location.href = "/login";
              })
            }
            className="shrink-0 rounded-lg border border-vndn-border px-3 py-2 text-sm text-vndn-muted transition hover:border-vndn-gold hover:text-vndn-gold sm:px-4"
          >
            Sign out
          </button>
        </header>
        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
