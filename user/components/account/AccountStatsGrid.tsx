import { StatCard } from "@vndn/shared/components/dashboard/StatCard";

const DEFAULT_STATS = [
  { label: "Saved properties", value: "—" },
  { label: "Active inquiries", value: "—" },
  { label: "Viewings scheduled", value: "—" },
] as const;

export function AccountStatsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {DEFAULT_STATS.map((stat) => (
        <StatCard key={stat.label} label={stat.label} value={stat.value} />
      ))}
    </div>
  );
}
