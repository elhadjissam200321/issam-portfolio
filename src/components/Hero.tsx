import portrait from "@/assets/hero-portrait.jpg";
import { site } from "@/data/projects";

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
      style={{ backgroundColor: "var(--hero-bg)" }}
      aria-label="Hero"
    >
      <img
        src={portrait}
        alt={`${site.name} — ${site.tagline}`}
        width={1080}
        height={1920}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />

      {/* Huge name overlay */}
      <h1
        aria-label={site.name}
        className="absolute left-6 md:left-10 bottom-[28%] md:bottom-[22%] whitespace-nowrap font-medium tracking-[-0.04em] text-white leading-none select-none"
        style={{ fontSize: "clamp(2.5rem, 10vw, 14rem)" }}
      >
        {site.name}
      </h1>

      {/* Bottom-left freelance label */}
      <div className="absolute bottom-8 left-6 md:bottom-10 md:left-10 text-white">
        <div className="text-3xl md:text-2xl mb-6 md:mb-8" aria-hidden="true">↘</div>
        <p className="text-lg sm:text-2xl md:text-3xl leading-tight font-light">
          {site.hero.subtitle.map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
      </div>

      <div className="absolute bottom-8 right-6 md:bottom-10 md:right-10 text-white" aria-hidden="true">
        <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full border border-white/70 flex items-center justify-center animate-[spin_18s_linear_infinite]">
          <span className="text-lg sm:text-xl">✦</span>
        </div>
      </div>
    </section>
  );
}
