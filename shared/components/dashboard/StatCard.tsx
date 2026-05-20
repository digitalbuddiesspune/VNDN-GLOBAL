interface StatCardProps {
  label: string;
  value: string;
  hint?: string;
}

export function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <div className="rounded-xl border border-vndn-border bg-vndn-surface/60 p-5">
      <p className="text-xs uppercase tracking-widest text-vndn-muted">{label}</p>
      <p className="mt-2 font-display text-3xl text-vndn-off-white">{value}</p>
      {hint ? <p className="mt-2 text-xs text-vndn-muted">{hint}</p> : null}
    </div>
  );
}
