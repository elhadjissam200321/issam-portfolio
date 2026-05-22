import { createFileRoute } from "@tanstack/react-router";
import { Work } from "@/components/Work";
import { Footer } from "@/components/Footer";
import { site } from "@/data/projects";

const pageTitle = `Work — ${site.name}`;
const pageDescription = site.work.description;
const pageUrl = `${site.siteUrl}/work`;

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      // Open Graph
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:url", content: pageUrl },
      { property: "og:type", content: "website" },
      // Twitter
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
    ],
    links: [
      { rel: "canonical", href: pageUrl },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <main>
      <section className="px-6 md:px-10 pt-36 md:pt-44 pb-12">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Work · 2022 — 2024</p>
        <h1 className="mt-6 text-5xl sm:text-6xl md:text-9xl font-medium tracking-tight leading-[0.95]">
          Selected
          <br />
          projects.
        </h1>
      </section>
      <Work showHeader={false} />
      <Footer />
    </main>
  );
}
