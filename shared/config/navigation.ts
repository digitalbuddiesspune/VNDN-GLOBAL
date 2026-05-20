export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const adminNav: NavItem[] = [
  { label: "Overview", href: "/dashboard", description: "Platform metrics" },
  { label: "Properties", href: "/dashboard/properties" },
  { label: "Leads & CRM", href: "/dashboard/leads" },
  { label: "Users", href: "/dashboard/users" },
  { label: "Analytics", href: "/dashboard/analytics" },
  { label: "Media", href: "/dashboard/media" },
  { label: "SEO & Blog", href: "/dashboard/seo" },
];

export const agentNav: NavItem[] = [
  { label: "Overview", href: "/dashboard" },
  { label: "My Leads", href: "/dashboard/leads" },
  { label: "Properties", href: "/dashboard/properties" },
  { label: "Inquiries", href: "/dashboard/inquiries" },
  { label: "Messages", href: "/dashboard/messages" },
];

export const investorNav: NavItem[] = [
  { label: "Portfolio", href: "/dashboard" },
  { label: "ROI Reports", href: "/dashboard/roi" },
  { label: "Documents", href: "/dashboard/documents" },
  { label: "Transactions", href: "/dashboard/transactions" },
  { label: "Security", href: "/dashboard/security", description: "2FA settings" },
];

export const contentManagerNav: NavItem[] = [
  { label: "Overview", href: "/dashboard" },
  { label: "Blog Posts", href: "/dashboard/blog" },
  { label: "SEO Pages", href: "/dashboard/seo" },
  { label: "Media Library", href: "/dashboard/media" },
  { label: "Communities", href: "/dashboard/communities" },
];

export const userPortalNav: NavItem[] = [
  { label: "Overview", href: "/account" },
  { label: "Saved Properties", href: "/account/saved" },
  { label: "Inquiries", href: "/account/inquiries" },
  { label: "Profile", href: "/account/profile" },
];
