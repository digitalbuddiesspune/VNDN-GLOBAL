interface PlaceholderPanelProps {
  message: string;
}

export function PlaceholderPanel({ message }: PlaceholderPanelProps) {
  return (
    <div className="rounded-xl border border-dashed border-vndn-border p-10 text-center text-vndn-muted">
      {message}
    </div>
  );
}
