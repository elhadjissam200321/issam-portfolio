import { Link } from "@tanstack/react-router";
import { site } from "@/data/projects";

export function Footer() {
  return (
    <footer className="bg-foreground text-background px-6 md:px-10 py-16 md:py-28" role="contentinfo">
      <p className="text-sm uppercase tracking-[0.2em] opacity-60">Get in touch</p>
      <h2 className="mt-6 text-4xl sm:text-5xl md:text-8xl font-medium tracking-tight leading-[0.95]">
        Let's build
        <br />
        something good.
      </h2>
      <div className="mt-10 md:mt-12 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
        <Link
          to="/contact"
          className="rounded-full bg-background text-foreground px-8 py-4 text-base text-center hover:opacity-80 transition"
        >
          Start a project
        </Link>
        <a
          href={`mailto:${site.email}`}
          className="rounded-full border border-white/30 px-8 py-4 text-base text-center hover:bg-white/10 transition"
        >
          {site.email}
        </a>
      </div>
      <div className="mt-16 md:mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm opacity-60">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>Based on {site.location}</span>
      </div>
    </footer>
  );
}
