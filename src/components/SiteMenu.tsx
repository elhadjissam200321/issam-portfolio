import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { site } from "@/data/projects";

const links = [
  { label: "Index", to: "/" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

const socials = [
  ...site.socials,
  { label: "Email", href: `mailto:${site.email}` },
];

export function SiteMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-10 pt-6 md:pt-8 flex items-center justify-between mix-blend-difference text-white">
        <Link to="/" className="text-sm md:text-base tracking-tight" aria-label={`${site.siteName} — Home`}>
          <span className="opacity-70">©</span> Code by {site.shortName}
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="text-sm md:text-base flex items-center gap-2"
          aria-label="Open navigation menu"
          aria-expanded={open}
          aria-controls="site-navigation"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current inline-block" aria-hidden="true" />
          Menu
        </button>
      </header>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-500 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      <aside
        id="site-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 z-50 h-full w-full sm:w-[460px] bg-foreground text-background transform transition-transform duration-[700ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col p-8 md:p-10">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.2em] opacity-60">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="text-sm hover:opacity-70 transition"
              aria-label="Close navigation menu"
            >
              Close
            </button>
          </div>

          <nav className="mt-16 md:mt-24 flex flex-col gap-2" aria-label="Main navigation">
            {links.map((l, i) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="group flex items-baseline gap-4 text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight hover:opacity-60 transition-opacity"
                style={{
                  transitionDelay: open ? `${150 + i * 60}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(20px)",
                  transitionProperty: "opacity, transform",
                  transitionDuration: "600ms",
                }}
              >
                <span className="text-xs opacity-40 font-normal" aria-hidden="true">0{i + 1}</span>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto grid grid-cols-2 gap-y-3 gap-x-6 text-sm">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                rel="noopener noreferrer"
                className="hover:opacity-60 transition flex items-center justify-between border-b border-white/10 py-2"
              >
                {s.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
