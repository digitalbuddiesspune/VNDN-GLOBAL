const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

const portals = [
  {
    folder: "admin",
    name: "vndn-admin",
    port: 3001,
    role: "admin",
    appName: "Admin Console",
    navImport: "adminNav",
    dashboardPath: "/dashboard",
  },
  {
    folder: "agent",
    name: "vndn-agent",
    port: 3002,
    role: "agent",
    appName: "Agent Workspace",
    navImport: "agentNav",
    dashboardPath: "/dashboard",
  },
  {
    folder: "investor",
    name: "vndn-investor",
    port: 3003,
    role: "investor",
    appName: "Investor Portal",
    navImport: "investorNav",
    dashboardPath: "/dashboard",
  },
  {
    folder: "contentManager",
    name: "vndn-content-manager",
    port: 3004,
    role: "content_manager",
    appName: "Content Studio",
    navImport: "contentManagerNav",
    dashboardPath: "/dashboard",
  },
];

const userTsconfig = JSON.parse(
  fs.readFileSync(path.join(root, "user", "tsconfig.json"), "utf8")
);
userTsconfig.compilerOptions.paths = {
  "@/*": ["./*"],
  "@vndn/shared/*": ["../shared/*"],
};

const postcss = fs.readFileSync(path.join(root, "user", "postcss.config.mjs"), "utf8");
const eslint = fs.readFileSync(path.join(root, "user", "eslint.config.mjs"), "utf8");
const nextConfig = `import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default nextConfig;
`;

const globalsCss = `@import "tailwindcss";
@source "../../shared";

@import "../../shared/styles/portal.css";
`;

function writePortal(portal) {
  const dir = path.join(root, portal.folder);
  fs.mkdirSync(dir, { recursive: true });

  const packageJson = {
    name: portal.name,
    version: "0.1.0",
    private: true,
    scripts: {
      dev: `next dev -p ${portal.port}`,
      build: "next build",
      start: `next start -p ${portal.port}`,
      lint: "eslint",
    },
    dependencies: {
      next: "16.2.6",
      react: "19.2.4",
      "react-dom": "19.2.4",
    },
    devDependencies: {
      "@tailwindcss/postcss": "^4",
      "@types/node": "^20",
      "@types/react": "^19",
      "@types/react-dom": "^19",
      eslint: "^9",
      "eslint-config-next": "16.2.6",
      tailwindcss: "^4",
      typescript: "^5",
    },
  };

  fs.writeFileSync(path.join(dir, "package.json"), JSON.stringify(packageJson, null, 2));
  fs.writeFileSync(path.join(dir, "tsconfig.json"), JSON.stringify(userTsconfig, null, 2));
  fs.writeFileSync(path.join(dir, "postcss.config.mjs"), postcss);
  fs.writeFileSync(path.join(dir, "eslint.config.mjs"), eslint);
  fs.writeFileSync(path.join(dir, "next.config.ts"), nextConfig);
  fs.writeFileSync(
    path.join(dir, ".env.local"),
    `NEXT_PUBLIC_API_URL=http://localhost:5000/api\nNEXT_PUBLIC_APP_ROLE=${portal.role}\n`
  );
  fs.writeFileSync(path.join(dir, ".gitignore"), "node_modules\n.next\n.env.local\n");

  fs.mkdirSync(path.join(dir, "app", "(auth)", "login"), { recursive: true });
  fs.mkdirSync(path.join(dir, "app", "(dashboard)", "dashboard"), { recursive: true });
  fs.mkdirSync(path.join(dir, "lib"), { recursive: true });
  fs.mkdirSync(path.join(dir, "public"), { recursive: true });

  fs.writeFileSync(path.join(dir, "app", "globals.css"), globalsCss);

  fs.writeFileSync(
    path.join(dir, "lib", "app-config.ts"),
    `import { ${portal.navImport} } from "@vndn/shared/config/navigation";
import type { UserRole } from "@vndn/shared/auth/types";

export const appConfig = {
  role: "${portal.role}" as UserRole,
  appName: "${portal.appName}",
  navItems: ${portal.navImport},
  dashboardPath: "${portal.dashboardPath}",
};
`
  );

  fs.writeFileSync(
    path.join(dir, "middleware.ts"),
    `import { createRoleMiddleware, roleMiddlewareConfig } from "@vndn/shared/middleware/roleMiddleware";

export const middleware = createRoleMiddleware("${portal.role}", "/dashboard");
export const config = roleMiddlewareConfig;
`
  );

  fs.writeFileSync(
    path.join(dir, "app", "layout.tsx"),
    `import type { Metadata } from "next";
import { AuthProvider } from "@vndn/shared/components/auth/AuthProvider";
import { VndnRootLayout } from "@vndn/shared/components/layout/VndnRootLayout";
import "./globals.css";

export const metadata: Metadata = {
  title: "${portal.appName} | VNDN Global",
  description: "VNDN Global ${portal.appName}",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <VndnRootLayout>
      <AuthProvider>{children}</AuthProvider>
    </VndnRootLayout>
  );
}
`
  );

  fs.writeFileSync(
    path.join(dir, "app", "page.tsx"),
    `import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/dashboard");
}
`
  );

  fs.writeFileSync(
    path.join(dir, "app", "(auth)", "login", "page.tsx"),
    `import { LoginForm } from "@vndn/shared/components/auth/LoginForm";
import { appConfig } from "@/lib/app-config";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-vndn-bg px-4">
      <LoginForm
        expectedRole={appConfig.role}
        title="${portal.appName}"
        subtitle="Sign in to your VNDN workspace"
        redirectTo={appConfig.dashboardPath}
      />
    </div>
  );
}
`
  );

  fs.writeFileSync(
    path.join(dir, "app", "(dashboard)", "layout.tsx"),
    `import { DashboardShell } from "@vndn/shared/components/layout/DashboardShell";
import { appConfig } from "@/lib/app-config";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardShell
      navItems={appConfig.navItems}
      role={appConfig.role}
      appName={appConfig.appName}
    >
      {children}
    </DashboardShell>
  );
}
`
  );

  const navMap = {
    adminNav: [
      ["/dashboard", "Overview"],
      ["/dashboard/properties", "Properties"],
      ["/dashboard/leads", "Leads & CRM"],
      ["/dashboard/users", "Users"],
      ["/dashboard/analytics", "Analytics"],
      ["/dashboard/media", "Media"],
      ["/dashboard/seo", "SEO & Blog"],
    ],
    agentNav: [
      ["/dashboard", "Overview"],
      ["/dashboard/leads", "My Leads"],
      ["/dashboard/properties", "Properties"],
      ["/dashboard/inquiries", "Inquiries"],
      ["/dashboard/messages", "Messages"],
    ],
    investorNav: [
      ["/dashboard", "Portfolio"],
      ["/dashboard/roi", "ROI Reports"],
      ["/dashboard/documents", "Documents"],
      ["/dashboard/transactions", "Transactions"],
      ["/dashboard/security", "Security"],
    ],
    contentManagerNav: [
      ["/dashboard", "Overview"],
      ["/dashboard/blog", "Blog Posts"],
      ["/dashboard/seo", "SEO Pages"],
      ["/dashboard/media", "Media Library"],
      ["/dashboard/communities", "Communities"],
    ],
  };

  const pages = navMap[portal.navImport] || [["/dashboard", "Overview"]];

  for (const [href, title] of pages) {
    const segments = href.split("/").filter(Boolean);
    const pageDir = path.join(dir, "app", "(dashboard)", ...segments);
    fs.mkdirSync(pageDir, { recursive: true });
    const isOverview = href === "/dashboard";
    fs.writeFileSync(
      path.join(pageDir, "page.tsx"),
      `import { PageHeader } from "@vndn/shared/components/dashboard/PageHeader";
${isOverview ? 'import { StatCard } from "@vndn/shared/components/dashboard/StatCard";' : ""}

export default function Page() {
  return (
    <div>
      <PageHeader
        title="${title}"
        description="Module scaffold — connect to shared backend API at /api."
      />
${
  isOverview
    ? `      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Active records" value="—" hint="Live data from MongoDB" />
        <StatCard label="This week" value="—" />
        <StatCard label="Conversion" value="—" />
        <StatCard label="Pending" value="—" />
      </div>`
    : `      <div className="rounded-xl border border-dashed border-vndn-border p-10 text-center text-vndn-muted">
        <p>${title} module ready for API integration.</p>
      </div>`
}
    </div>
  );
}
`
    );
  }

  console.log(`Scaffolded ${portal.folder} on port ${portal.port}`);
}

for (const portal of portals) {
  writePortal(portal);
}

console.log("Done.");
