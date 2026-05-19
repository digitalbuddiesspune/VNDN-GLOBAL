interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="home-section home-section--charcoal border-b border-[var(--home-border)] pt-28 md:pt-32">
      <div className="mx-auto max-w-3xl">
        <span className="home-eyebrow">{eyebrow}</span>
        <h1 className="home-section-title mt-4">{title}</h1>
        {description ? (
          <p className="mt-5 text-base leading-relaxed text-[var(--home-muted)] md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
