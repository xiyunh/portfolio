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
  // optional — the year label is hidden when omitted
  year?: string;
  tech: string[];
  // optional links — omit either one and its button disappears
  live?: string;
  source?: string;
  // extra labelled links (videos, papers, writeups) — rendered after live/source
  links?: { label: string; href: string }[];
  // optional screenshot placed in /public — falls back to a generated
  // preview panel when omitted
  image?: string;
  // extra photos shown beneath the preview on the archive page
  gallery?: string[];
  // two hex colors used by the generated preview panel
  gradient: [string, string];
};

export const projects: Project[] = [
  {
    slug: "star-compass",
    title: "Star Compass",
    tags: ["Embedded", "Hardware"],
    description:
      "A compass that orients itself by the stars rather than magnetic north — embedded sensing, a star-catalog lookup, and a custom-built housing.",
    tech: ["Arduino", "C/C++", "Fusion 360"],
    source: "https://github.com/xiyunh/starcompass",
    gradient: ["#6b9fff", "#0a1233"],
  },
  {
    slug: "orchestra",
    title: "Musical Robotic Orchestra",
    tags: ["Robotics", "Mechatronics"],
    description:
      "A Wi-Fi-synchronized orchestra of robotic instruments built from scratch at Penn's Engineering Summer Academy — microcontrollers driving solenoids and servos on laser-cut and 3D-printed mechanisms, performing full songs live for a public showcase.",
    year: "2023",
    image: "/projects/orchestra.jpg",
    tech: ["Microcontrollers", "Solenoids & Servos", "Wi-Fi Sync", "Laser Cutting", "3D Printing"],
    links: [
      { label: "Watch: Demons", href: "https://youtu.be/WiZxVXIdiMw" },
      { label: "Watch: We Care a Lot", href: "https://youtu.be/NbZ0bh51bEo" },
    ],
    gradient: ["#f06bb3", "#2b0a1d"],
  },
  {
    slug: "drone",
    title: "Autonomous Drone",
    tags: ["Robotics", "Autonomy"],
    description:
      "A custom quadcopter built to find an object, fly to it, and pick it up on its own — a 3D-printed frame designed in Fusion 360 around a Pixhawk flight controller, with a camera and a servo-driven grabber positioned in its field of view.",
    image: "/projects/drone.jpg",
    tech: ["Pixhawk", "Fusion 360", "3D Printing", "FlySky RC", "Brushless Motors & ESCs"],
    gradient: ["#c084fc", "#22093a"],
  },
  {
    slug: "rocket-engine",
    title: "Rocket Engine",
    tags: ["Aerospace", "CAD"],
    description:
      "A rocket engine designed and built as part of a student rocket project — CAD modelling, analysis, and manufacturing.",
    tech: ["SolidWorks", "MATLAB"],
    gradient: ["#fb7185", "#2e0a14"],
  },
  {
    slug: "recognition",
    title: "Music Genre & Handwriting Recognition",
    tags: ["Machine Learning", "Python"],
    description:
      "Two classifiers built from the ground up. A CNN that reads mel-spectrograms of 3-second audio clips to name one of ten genres — ensembling three seeds lifted test accuracy from 80.5% to 86% per track. And a PyTorch digit recognizer trained on MNIST that reaches 96.89% test accuracy.",
    image: "/projects/mnist-confusion.jpg",
    tech: ["Python", "PyTorch", "torchaudio", "Keras", "CNNs", "Google Colab"],
    links: [
      { label: "GTZAN report", href: "/projects/gtzan-report.pdf" },
      { label: "MNIST slides", href: "/projects/mnist-slides.pdf" },
    ],
    gradient: ["#8fc0ff", "#0a1a2e"],
  },
  {
    slug: "roblox",
    title: "Roblox Game",
    tags: ["Game Dev", "Blender"],
    description:
      "A Roblox game with every asset — environment, props, characters — modelled in Blender, plus scripted gameplay.",
    tech: ["Blender", "Roblox Studio", "Lua"],
    gradient: ["#f9a8d4", "#320f22"],
  },
  {
    slug: "satellite",
    title: "Satellite Material Research",
    tags: ["Research", "Materials"],
    description:
      "A research paper on materials for satellite applications — testing, analysis, and findings written up for publication.",
    tech: ["MATLAB", "LaTeX"],
    gradient: ["#c084fc", "#22093a"],
  },
];
