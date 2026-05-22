import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects, site } from "@/data/projects";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = `${p?.title ?? "Project"} — ${site.name}`;
    const description = p?.description ?? "";
    const url = `${site.siteUrl}/work/${p?.slug ?? ""}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        // Open Graph
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "og:image", content: p?.image ?? "" },
        // Twitter
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: p?.image ?? "" },
      ],
      links: [
        { rel: "canonical", href: url },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-muted-foreground">Project not found.</p>
        <Link to="/work" className="mt-4 inline-block underline">Back to work</Link>
      </div>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <main>
      <article>
        <section className="px-6 md:px-10 pt-36 md:pt-44 pb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            {project.category} · {project.year}
          </p>
          <h1 className="mt-6 text-4xl sm:text-6xl md:text-9xl font-medium tracking-tight leading-[0.95]">
            {project.title}
          </h1>
        </section>

        <figure className="px-6 md:px-10">
          <img
            src={project.image}
            alt={`${project.title} — ${project.category} project by ${site.name}`}
            width={1600}
            height={1000}
            className="w-full h-auto rounded-sm"
          />
        </figure>

        <section className="px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-12 gap-8">
          <dl className="md:col-span-4 space-y-8 text-sm">
            <div>
              <dt className="uppercase tracking-[0.2em] text-muted-foreground">Client</dt>
              <dd className="mt-2 text-lg">{project.client}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.2em] text-muted-foreground">Role</dt>
              <dd className="mt-2 text-lg">{project.role}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.2em] text-muted-foreground">Services</dt>
              <dd className="mt-2">
                <ul className="space-y-1 text-lg">
                  {project.services.map((s: string) => <li key={s}>{s}</li>)}
                </ul>
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.2em] text-muted-foreground">Live site</dt>
              <dd className="mt-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-lg underline underline-offset-4 hover:opacity-60 transition-opacity"
                >
                  Visit website
                  <span aria-hidden="true">↗</span>
                </a>
              </dd>
            </div>
          </dl>
          <div className="md:col-span-8">
            <p className="text-xl sm:text-2xl md:text-4xl font-medium tracking-tight leading-tight">
              {project.description}
            </p>
          </div>
        </section>
      </article>

      <nav className="px-6 md:px-10 pb-24 md:pb-32 border-t border-border pt-12" aria-label="Next project">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Next project</p>
        <Link to="/work/$slug" params={{ slug: next.slug }} className="group block mt-6">
          <h2 className="text-3xl sm:text-5xl md:text-8xl font-medium tracking-tight group-hover:opacity-60 transition-opacity">
            {next.title} →
          </h2>
        </Link>
      </nav>

      <Footer />
    </main>
  );
}
