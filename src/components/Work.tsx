import { Link } from "@tanstack/react-router";
import { projects, site } from "@/data/projects";

type Props = { limit?: number; showHeader?: boolean };

export function Work({ limit, showHeader = true }: Props) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <section id="work" className="px-6 md:px-10 py-24 md:py-32" aria-label="Selected work">
      {showHeader && (
        <div className="flex items-end justify-between mb-12 md:mb-20">
          <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Selected Work
          </h2>
          <p className="text-sm text-muted-foreground hidden md:block">
            {projects.length} projects
          </p>
        </div>
      )}

      <div className="space-y-24 md:space-y-32">
        {items.map((p) => (
          <Link
            to="/work/$slug"
            params={{ slug: p.slug }}
            key={p.slug}
            className="group block"
            aria-label={`View ${p.title} — ${p.category}`}
          >
            <div className="overflow-hidden bg-muted rounded-sm">
              <img
                src={p.image}
                alt={`${p.title} — ${p.category} project by ${site.name}`}
                loading="lazy"
                decoding="async"
                width={1600}
                height={1000}
                className="w-full h-auto object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="mt-6 sm:mt-8 md:mt-10 text-3xl sm:text-5xl md:text-7xl font-medium tracking-tight">
              {p.title}
            </h3>
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-base md:text-lg">
              <span>{p.category}</span>
              <time>{p.year}</time>
            </div>
          </Link>
        ))}
      </div>

      {limit && (
        <div className="mt-24 flex justify-center">
          <Link
            to="/work"
            className="group rounded-full border border-foreground/30 px-10 py-5 text-base hover:bg-foreground hover:text-background transition-colors"
          >
            More work
            <sup className="ml-2 text-xs opacity-60">{projects.length}</sup>
          </Link>
        </div>
      )}
    </section>
  );
}
