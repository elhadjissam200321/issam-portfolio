import siteData from "./site.json";

import damai from "@/assets/work-damai.jpg";
import twice from "@/assets/work-twice.jpg";
import aurora from "@/assets/work-aurora.jpg";
import northwind from "@/assets/work-northwind.jpg";

// Map imageFile names from JSON to actual imported assets
const imageMap: Record<string, string> = {
  "work-damai.jpg": damai,
  "work-twice.jpg": twice,
  "work-aurora.jpg": aurora,
  "work-northwind.jpg": northwind,
};

// ── Types ──────────────────────────────────────────────
export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  image: string;
  client: string;
  role: string;
  description: string;
  services: string[];
  url: string;
};

export type SiteConfig = {
  name: string;
  shortName: string;
  siteName: string;
  siteUrl: string;
  email: string;
  tagline: string;
  description: string;
  location: string;
  locationLabel: string;
  hero: { subtitle: string[] };
  about: {
    headline: string;
    description: string;
    bio: string[];
    skills: { category: string; items: string[] }[];
  };
  contact: { description: string };
  work: { description: string };
  socials: { label: string; href: string }[];
  projects: Project[];
};

// ── Resolved data ──────────────────────────────────────
export const site: SiteConfig = {
  ...siteData,
  socials: siteData.socials,
  projects: siteData.projects.map((p) => ({
    ...p,
    image: imageMap[p.imageFile] ?? "",
  })),
};

// Convenience re-export for backward compatibility
export const projects = site.projects;
