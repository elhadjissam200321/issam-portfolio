import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { site } from "@/data/projects";

const pageTitle = `Contact — ${site.name}`;
const pageDescription = site.contact.description;
const pageUrl = `${site.siteUrl}/contact`;

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen bg-foreground text-background">
      <section className="px-6 md:px-10 pt-36 md:pt-44 pb-16">
        <p className="text-sm uppercase tracking-[0.2em] opacity-60">Contact</p>
        <h1 className="mt-6 text-5xl sm:text-6xl md:text-9xl font-medium tracking-tight leading-[0.9]">
          Let's
          <br />
          talk.
        </h1>
      </section>

      <section className="px-6 md:px-10 pb-24 grid md:grid-cols-12 gap-12">
        <address className="md:col-span-5 space-y-10 text-base not-italic">
          <div>
            <p className="uppercase tracking-[0.2em] opacity-60 text-xs">Email</p>
            <a href={`mailto:${site.email}`} className="mt-2 block text-xl sm:text-2xl md:text-3xl hover:opacity-70 transition break-all">
              {site.email}
            </a>
          </div>
          <div>
            <p className="uppercase tracking-[0.2em] opacity-60 text-xs">Socials</p>
            <ul className="mt-2 space-y-2 text-lg md:text-xl">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} rel="noopener noreferrer" className="hover:opacity-70 transition">{s.label} ↗</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="uppercase tracking-[0.2em] opacity-60 text-xs">Based on</p>
            <p className="mt-2 text-xl">{site.locationLabel}</p>
          </div>
        </address>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-7 space-y-6"
          aria-label="Contact form"
        >
          {sent ? (
            <div className="rounded-sm border border-white/20 p-10 text-center" role="status">
              <p className="text-3xl font-medium">Thanks — I'll be in touch shortly.</p>
            </div>
          ) : (
            <>
              <Field label="Your name" name="name" autoComplete="name" />
              <Field label="Email" name="email" type="email" autoComplete="email" />
              <Field label="Company (optional)" name="company" autoComplete="organization" />
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] opacity-60 mb-2">
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-white/30 py-3 text-lg focus:outline-none focus:border-white transition"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-background text-foreground px-8 py-4 text-base hover:opacity-80 transition"
              >
                Send message →
              </button>
            </>
          )}
        </form>
      </section>

      <footer className="px-6 md:px-10 py-8 border-t border-white/10 flex items-center justify-between text-sm opacity-60">
        <span>© {new Date().getFullYear()} Code by {site.name}</span>
        <span>Available for work</span>
      </footer>
    </main>
  );
}

function Field({ label, name, type = "text", autoComplete }: { label: string; name: string; type?: string; autoComplete?: string }) {
  return (
    <div>
      <label htmlFor={`contact-${name}`} className="block text-xs uppercase tracking-[0.2em] opacity-60 mb-2">
        {label}
      </label>
      <input
        id={`contact-${name}`}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={type !== "text" || name !== "company"}
        className="w-full bg-transparent border-b border-white/30 py-3 text-lg focus:outline-none focus:border-white transition"
      />
    </div>
  );
}
