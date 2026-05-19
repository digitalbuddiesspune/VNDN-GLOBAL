import { PageHeader } from "@vndn/shared/components/dashboard/PageHeader";
import { AccountStatsGrid } from "./AccountStatsGrid";

export function AccountOverview() {
  return (
    <div>
      <PageHeader
        title="My account"
        description="Saved properties, inquiries, and profile settings."
      />
      <AccountStatsGrid />
    </div>
  );
}
