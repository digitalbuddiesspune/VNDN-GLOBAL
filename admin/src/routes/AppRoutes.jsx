import { Navigate, Route, Routes } from "react-router-dom";
import { AdminLayout } from "../components/layout/AdminLayout";
import { AnalyticsPage } from "../pages/AnalyticsPage";
import { Dashboard } from "../pages/Dashboard";
import { HomepageBannersPage } from "../pages/HomepageBannersPage";
import { InquiriesPage } from "../pages/InquiriesPage";
import { PropertiesPage } from "../pages/PropertiesPage";
import { ReportsPage } from "../pages/ReportsPage";
import { SettingsPage } from "../pages/SettingsPage";
import { UsersPage } from "../pages/UsersPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="homepage-banners" element={<HomepageBannersPage />} />
        <Route path="properties" element={<PropertiesPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="inquiries" element={<InquiriesPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
