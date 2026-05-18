import { PageHeader } from "@vndn/shared/components/dashboard/PageHeader";
import { StatCard } from "@vndn/shared/components/dashboard/StatCard";

export default function Page() {
  return (
    <div>
      <PageHeader
        title="Portfolio"
        description="Module scaffold — connect to shared backend API at /api."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Active records" value="—" hint="Live data from MongoDB" />
        <StatCard label="This week" value="—" />
        <StatCard label="Conversion" value="—" />
        <StatCard label="Pending" value="—" />
      </div>
    </div>
  );
}
