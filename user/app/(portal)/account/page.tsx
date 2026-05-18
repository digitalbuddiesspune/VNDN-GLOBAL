import { PageHeader } from "@vndn/shared/components/dashboard/PageHeader";
import { StatCard } from "@vndn/shared/components/dashboard/StatCard";

export default function AccountOverviewPage() {
  return (
    <div>
      <PageHeader
        title="My account"
        description="Saved properties, inquiries, and profile settings."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <StatCard label="Saved properties" value="—" />
        <StatCard label="Active inquiries" value="—" />
        <StatCard label="Viewings scheduled" value="—" />
      </div>
    </div>
  );
}
