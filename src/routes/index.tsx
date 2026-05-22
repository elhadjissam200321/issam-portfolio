import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Footer } from "@/components/Footer";
import { site } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — ${site.tagline}` },
      { name: "description", content: site.description },
      // Open Graph
      { property: "og:title", content: `${site.name} — ${site.tagline}` },
      { property: "og:description", content: site.description },
      { property: "og:url", content: site.siteUrl },
      { property: "og:type", content: "website" },
      // Twitter
      { name: "twitter:title", content: `${site.name} — ${site.tagline}` },
      { name: "twitter:description", content: site.description },
    ],
    links: [
      { rel: "canonical", href: site.siteUrl },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Work limit={3} />
      <Footer />
    </main>
  );
}
