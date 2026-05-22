import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/Footer";
import { site } from "@/data/projects";
import portrait from "@/assets/hero-portrait.jpg";

const pageTitle = `About — ${site.name}`;
const pageDescription = site.about.description;
const pageUrl = `${site.siteUrl}/about`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      // Open Graph
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:url", content: pageUrl },
      { property: "og:type", content: "profile" },
      // Twitter
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
    ],
    links: [
      { rel: "canonical", href: pageUrl },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main>
      <section className="px-6 md:px-10 pt-36 md:pt-44 pb-16">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">About</p>
        <h1 className="mt-6 text-3xl sm:text-5xl md:text-8xl font-medium tracking-tight leading-[0.95] max-w-5xl">
          {site.about.headline}
        </h1>
      </section>

      <section className="px-6 md:px-10 grid md:grid-cols-12 gap-8 pb-24 md:pb-32">
        <div className="md:col-span-5">
          <img
            src={portrait}
            alt={`Portrait of ${site.name}`}
            loading="lazy"
            width={1080}
            height={1920}
            className="w-full h-auto rounded-sm"
          />
        </div>
        <div className="md:col-span-7 space-y-6 text-base sm:text-lg md:text-xl leading-relaxed">
          {site.about.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-10 pb-24 md:pb-32 border-t border-border pt-12 grid md:grid-cols-3 gap-12" aria-label="Skills and expertise">
        {site.about.skills.map((s) => (
          <div key={s.category}>
            <h2 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{s.category}</h2>
            <ul className="mt-4 space-y-2 text-lg md:text-xl">
              {s.items.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <Footer />
    </main>
  );
}
