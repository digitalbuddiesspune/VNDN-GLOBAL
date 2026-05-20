import {
  IconAnalytics,
  IconBanner,
  IconDashboard,
  IconInquiries,
  IconProperties,
  IconReports,
  IconSettings,
  IconUsersNav,
} from "../components/icons";

export const navItems = [
  { path: "/", label: "Dashboard", icon: IconDashboard },
  { path: "/homepage-banners", label: "Homepage Banners", icon: IconBanner },
  { path: "/properties", label: "Properties", icon: IconProperties },
  { path: "/users", label: "Users", icon: IconUsersNav },
  { path: "/inquiries", label: "Inquiries", icon: IconInquiries },
  { path: "/analytics", label: "Analytics", icon: IconAnalytics },
  { path: "/reports", label: "Reports", icon: IconReports },
  { path: "/settings", label: "Settings", icon: IconSettings },
];

export const pageTitles = {
  "/": "Dashboard",
  "/homepage-banners": "Homepage Banners",
  "/properties": "Properties",
  "/users": "Users",
  "/inquiries": "Inquiries",
  "/analytics": "Analytics",
  "/reports": "Reports",
  "/settings": "Settings",
};
