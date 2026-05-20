interface PageHeaderProps {
  title: string;
  description?: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-8 border-b border-vndn-border pb-6">
      <h1 className="font-display text-3xl text-vndn-gold">{title}</h1>
      {description ? (
        <p className="mt-2 max-w-2xl text-sm text-vndn-muted">{description}</p>
      ) : null}
    </div>
  );
}
