function Sparkline({ color, points }) {
  const path = points
    .map((y, i) => {
      const x = (i / (points.length - 1)) * 100;
      return `${i === 0 ? "M" : "L"}${x},${40 - y * 0.35}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 100 40" className="mt-4 h-10 w-full" preserveAspectRatio="none">
      <path d={path} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function StatCard({ title, value, change, trend, icon: Icon, iconBg, sparkColor, sparkPoints }) {
  const isUp = trend === "up";

  return (
    <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-2 text-2xl font-bold text-slate-900">{value}</p>
          <p className={`mt-1 text-xs font-medium ${isUp ? "text-emerald-600" : "text-red-500"}`}>
            {isUp ? "↑" : "↓"} {change}
          </p>
        </div>
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconBg}`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>
      <Sparkline color={sparkColor} points={sparkPoints} />
    </div>
  );
}
