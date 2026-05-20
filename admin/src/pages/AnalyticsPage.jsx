import { PageHeader } from "../components/layout/PageHeader";

const metrics = [
  { label: "Page Views", value: "24.5K", change: "+18%" },
  { label: "Bounce Rate", value: "32%", change: "-4%" },
  { label: "Avg. Session", value: "4m 12s", change: "+9%" },
  { label: "Conversion", value: "3.2%", change: "+1.1%" },
];

export function AnalyticsPage() {
  return (
    <div>
      <PageHeader
        title="Analytics"
        description="Monitor traffic, engagement, and conversion metrics."
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm"
          >
            <p className="text-sm text-slate-500">{metric.label}</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{metric.value}</p>
            <p className="mt-1 text-xs font-medium text-emerald-600">{metric.change}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
        <h3 className="font-semibold text-slate-900">Traffic Overview</h3>
        <div className="mt-6 flex h-48 items-end justify-between gap-2">
          {[40, 65, 50, 80, 70, 90, 75, 95, 85, 100, 88, 92].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-indigo-500/80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
