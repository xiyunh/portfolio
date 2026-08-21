// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to make the site yours.
//  Everything on the site (name, links, projects, experience)
//  is driven by the exports below.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Xiyun Hu",
  firstName: "Xiyun",
  tagline:
    "I design and build fast, reliable software — from polished interfaces to the systems behind them.",
  location: "San Francisco, CA",
  email: "xiyunhuuu@gmail.com",
  availability: "Open to new opportunities",
  socials: [
    { label: "GitHub", href: "https://github.com/yourhandle" },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourhandle" },
    { label: "X / Twitter", href: "https://x.com/yourhandle" },
  ],
};

export const about = {
  paragraphs: [
    "I'm a software engineer who cares about the details — the way an interface feels, the way a system holds up under load, the way code reads six months later.",
    "Over the past few years I've shipped products across the stack: real-time web apps, data-heavy dashboards, ML-powered tools, and the infrastructure that keeps them running. I like owning problems end-to-end, from a rough idea to something people rely on.",
    "When I'm not writing code, I'm usually reading about type systems, tinkering with generative art, or out looking for good coffee.",
  ],
  skills: [
    "TypeScript",
    "React / Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "GraphQL",
    "AWS",
    "Docker",
    "Redis",
    "Tailwind CSS",
    "CI/CD",
    "Machine Learning",
  ],
};

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  description: string;
  year: string;
  tech: string[];
  // optional links — omit either one and its button disappears
  live?: string;
  source?: string;
  // optional screenshot placed in /public — falls back to a generated
  // preview panel when omitted
  image?: string;
  // two hex colors used by the generated preview panel
  gradient: [string, string];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "pulseboard",
    title: "Pulseboard",
    tags: ["Full-stack", "Real-time"],
    description:
      "Real-time analytics dashboard streaming a million events a minute over WebSockets, with sub-second aggregation and anomaly alerts.",
    year: "2026",
    tech: ["Next.js", "TypeScript", "ClickHouse", "Redis", "WebSockets"],
    live: "https://example.com",
    source: "https://github.com/yourhandle/pulseboard",
    gradient: ["#c9f24b", "#0e3b2e"],
    featured: true,
  },
  {
    slug: "atlas-api",
    title: "Atlas API",
    tags: ["Backend", "Infrastructure"],
    description:
      "A geo-search API serving 40M+ places with typo-tolerant autocomplete at p99 < 50ms, deployed across three regions.",
    year: "2025",
    tech: ["Go", "PostgreSQL", "PostGIS", "Kubernetes", "gRPC"],
    source: "https://github.com/yourhandle/atlas-api",
    gradient: ["#7dd3fc", "#1e1b4b"],
    featured: true,
  },
  {
    slug: "inkwell",
    title: "Inkwell",
    tags: ["Product", "Design & Development"],
    description:
      "A distraction-free collaborative writing app with CRDT-based sync, offline mode, and a plugin system for custom export formats.",
    year: "2025",
    tech: ["React", "Yjs", "Electron", "SQLite", "Tailwind"],
    live: "https://example.com",
    gradient: ["#f0abfc", "#3b0764"],
    featured: true,
  },
  {
    slug: "sentinel-ml",
    title: "Sentinel ML",
    tags: ["Machine Learning", "Tooling"],
    description:
      "Model-monitoring toolkit that detects data drift and silent accuracy decay in production ML pipelines before users notice.",
    year: "2024",
    tech: ["Python", "FastAPI", "scikit-learn", "Grafana", "Airflow"],
    source: "https://github.com/yourhandle/sentinel-ml",
    gradient: ["#fdba74", "#431407"],
    featured: true,
  },
  {
    slug: "waypoint",
    title: "Waypoint",
    tags: ["Mobile", "Maps"],
    description:
      "Offline-first hiking companion with vector maps, GPX route planning, and elevation profiles — built for zero-signal trails.",
    year: "2024",
    tech: ["React Native", "MapLibre", "SQLite", "TypeScript"],
    live: "https://example.com",
    gradient: ["#86efac", "#052e16"],
  },
  {
    slug: "hexforge",
    title: "Hexforge",
    tags: ["Creative Coding", "WebGL"],
    description:
      "A browser-based generative art studio — GPU-accelerated shader playground with a node editor and one-click print exports.",
    year: "2023",
    tech: ["WebGL", "Three.js", "GLSL", "Svelte"],
    live: "https://example.com",
    source: "https://github.com/yourhandle/hexforge",
    gradient: ["#fca5a5", "#450a0a"],
  },
];
