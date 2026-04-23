type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[radial-gradient(circle_at_20%_20%,rgba(244,114,182,0.16),transparent_50%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.12),transparent_45%),linear-gradient(to_bottom,#fff,#fff8fb)] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-4xl text-center">
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-rose-600">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-pretty text-base leading-relaxed text-slate-700 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
