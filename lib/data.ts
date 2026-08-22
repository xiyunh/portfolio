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
  location: "Los Angeles, CA",
  email: "xiyunhu@ucla.edu",
  socials: [
    { label: "GitHub", icon: "github", href: "https://github.com/xiyunh" },
    { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/xiyun-hu/" },
  ],
};

export type Skill = {
  name: string;
  /** simple-icons export name (e.g. "siPython"), "custom:<key>", or "mono:<letters>" */
  icon: string;
  /** override brand color (needed for black logos on a dark background) */
  hex?: string;
};

export type SkillGroup = { label: string; items: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages & Frameworks",
    items: [
      { name: "Python", icon: "siPython" },
      { name: "JavaScript", icon: "siJavascript" },
      { name: "TypeScript", icon: "siTypescript" },
      { name: "React.js", icon: "siReact" },
      { name: "Next.js", icon: "siNextdotjs", hex: "#ffffff" },
      { name: "HTML / CSS", icon: "siHtml5" },
      { name: "Tailwind CSS", icon: "siTailwindcss" },
      { name: "Java", icon: "siOpenjdk", hex: "#f89820" },
    ],
  },
  {
    label: "Hardware & Engineering",
    items: [
      { name: "Fusion 360", icon: "siAutodesk", hex: "#ff6b00" },
      { name: "SolidWorks", icon: "siDassaultsystemes", hex: "#da291c" },
      { name: "KiCad", icon: "siKicad" },
      { name: "Raspberry Pi", icon: "siRaspberrypi" },
      { name: "Arduino", icon: "siArduino" },
      { name: "MATLAB", icon: "mono:M", hex: "#e16737" },
      { name: "C / C++", icon: "siCplusplus" },
      { name: "Supabase", icon: "siSupabase" },
    ],
  },
  {
    label: "Design & Creative",
    items: [
      { name: "Figma", icon: "siFigma" },
      { name: "Blender 3D", icon: "siBlender" },
      { name: "Adobe Creative Suite", icon: "custom:adobe", hex: "#ff0000" },
      { name: "Canva", icon: "mono:C", hex: "#00c4cc" },
      { name: "Framer", icon: "siFramer" },
      { name: "Three.js", icon: "siThreedotjs", hex: "#ffffff" },
      { name: "DaVinci Resolve", icon: "siDavinciresolve", hex: "#6fa8dc" },
      { name: "Unity", icon: "siUnity" },
    ],
  },
  {
    label: "Tools & Productivity",
    items: [
      { name: "Microsoft Office", icon: "custom:microsoft", hex: "#f25022" },
      { name: "Excel", icon: "mono:X", hex: "#1d6f42" },
      { name: "Notion", icon: "siNotion", hex: "#ffffff" },
      { name: "Codex + Claude Code", icon: "siClaude" },
      { name: "Git / GitHub", icon: "siGithub", hex: "#ffffff" },
      { name: "Jira", icon: "siJira" },
      { name: "Google Workspace", icon: "siGoogle" },
      { name: "LaTeX", icon: "siLatex" },
    ],
  },
];

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
    gradient: ["#f06bb3", "#2b0a1d"],
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
    gradient: ["#6b9fff", "#0a1233"],
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
    gradient: ["#c084fc", "#22093a"],
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
    gradient: ["#f9a8d4", "#320f22"],
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
    gradient: ["#8fc0ff", "#0a1a2e"],
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
    gradient: ["#fb7185", "#2e0a14"],
  },
];
