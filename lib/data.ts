// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE to make the site yours.
//  Everything on the site (name, links, projects, experience)
//  is driven by the exports below.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Xiyun Hu",
  firstName: "Xiyun",
  tagline:
    "I build with hardware, design with software, and add a touch of artistry to everything",
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
    slug: "pixi",
    title: "Pixi — Composition-Matching Drone",
    tags: ["Computer Vision", "Drones"],
    description:
      "Hand it a reference photo — a Pinterest shot — and it works out where the camera stood. MoveNet pose estimation feeds a multi-hypothesis PnP solve against 3D body and head templates, recovering the camera's azimuth, elevation, distance, and framing. A live matcher then runs the same pipeline on the camera feed and issues drone directives — orbit, ascend, move closer — plus coaching for the subject, auto-capturing the moment the composition locks.",
    year: "2026",
    image: "/projects/pixi-code.png",
    tech: ["Python", "OpenCV", "ONNX Runtime", "MoveNet", "PnP Pose Estimation", "MAVSDK-ready"],
    source: "https://github.com/xiyunh/pixi",
    gradient: ["#cdb7f3", "#1f1a2e"],
  },
  {
    slug: "rocket-engine",
    title: "Rocket Engine Performance Analysis",
    tags: ["Aerospace", "Propulsion"],
    description:
      "Propulsion work for Rocket Project UCLA. I ran parametric analyses of engine performance with RocketCEA — sweeping chamber pressure, O/F ratio, and nozzle expansion ratio within the design constraints — and built the thrust models and trade-off plots in Python and MATLAB used to tighten constraints on nozzle geometry, injector flow rate, and materials.",
    year: "2026",
    image: "/projects/rocket-thrust-map.png",
    tech: ["RocketCEA", "Python", "MATLAB", "NumPy / Matplotlib"],
    gradient: ["#f5b0bd", "#2a1a1e"],
  },
  {
    slug: "recognition",
    title: "Music Genre & Handwriting Recognition",
    tags: ["Machine Learning", "Python"],
    year: "2026",
    description:
      "Two classifiers built from the ground up. A CNN that reads mel-spectrograms of 3-second audio clips to name one of ten genres — ensembling three seeds lifted test accuracy from 80.5% to 86% per track. And a PyTorch digit recognizer trained on MNIST that reaches 96.89% test accuracy.",
    image: "/projects/mnist-confusion-matrix.jpg",
    tech: ["Python", "PyTorch", "torchaudio", "Keras", "CNNs", "Google Colab"],
    links: [
      { label: "GTZAN report", href: "/projects/gtzan-report.pdf" },
      { label: "MNIST slides", href: "/projects/mnist-slides.pdf" },
    ],
    gradient: ["#b9d2f2", "#141c2a"],
  },
  {
    slug: "star-compass",
    title: "Star Compass",
    tags: ["Embedded", "Astronomy"],
    year: "2025",
    description:
      "A two-axis pointer that aims an arrow at a chosen star and keeps it there as the sky turns. An Arduino converts the star's RA/Dec to altitude and azimuth from local sidereal time — J2000 day count, GMST, and the alt-az transform written from scratch — and drives two stepper motors, re-aiming every second and unwrapping azimuth so it never spins the long way around north.",
    image: "/projects/star-compass-code.png",
    tech: ["Arduino", "C++", "AccelStepper", "28BYJ-48 Steppers", "Spherical Astronomy"],
    source: "https://github.com/xiyunh/starcompass",
    gradient: ["#a9c3f0", "#151b2b"],
  },
  {
    slug: "drone",
    title: "Autonomous Drone",
    tags: ["Robotics", "Autonomy"],
    year: "2025",
    description:
      "A custom quadcopter built to find an object, fly to it, and pick it up on its own — a 3D-printed frame designed in Fusion 360 around a Pixhawk flight controller, with a camera and a servo-driven grabber positioned in its field of view.",
    image: "/projects/drone-flight.jpg",
    tech: ["Pixhawk", "Fusion 360", "3D Printing", "FlySky RC", "Brushless Motors & ESCs"],
    gradient: ["#cdb7f3", "#1f1a2e"],
  },
  {
    slug: "satellite",
    title: "Reducing Satellite Light Pollution",
    tags: ["Research", "Materials"],
    year: "2024 – 2025",
    description:
      "A research paper on darkening low-Earth-orbit satellites with porous amorphous-carbon nanocoatings. I modelled the coating with a Bruggeman effective-medium approximation and the transfer-matrix method, swept porosity and thickness, and found an optimum (p ≈ 0.35, 625 nm) that cuts solar-weighted reflectance by 83% — a predicted ~2-magnitude dimming, more than double SpaceX's Darksat.",
    image: "/projects/satellite-paper-page-4.png",
    tech: ["Thin-Film Optics", "Transfer-Matrix Method", "Bruggeman EMA", "Solar-Weighted Reflectance"],
    links: [
      {
        label: "Slides",
        href: "https://docs.google.com/presentation/d/1wdtJhj9f6tqPt9pBmmJJHCmm7EFUkKe78fcJglLYtNc/edit?usp=sharing",
      },
    ],
    gradient: ["#cdb7f3", "#1f1a2e"],
  },
  {
    slug: "orchestra",
    title: "Musical Robotic Orchestra",
    tags: ["Robotics", "Mechatronics"],
    description:
      "A Wi-Fi-synchronized orchestra of robotic instruments built from scratch at Penn's Engineering Summer Academy — microcontrollers driving solenoids and servos on laser-cut and 3D-printed mechanisms, performing full songs live for a public showcase.",
    year: "2023",
    image: "/projects/orchestra-keyboard.jpg",
    tech: ["Microcontrollers", "Solenoids & Servos", "Wi-Fi Sync", "Laser Cutting", "3D Printing"],
    links: [
      { label: "Watch: Demons", href: "https://youtu.be/WiZxVXIdiMw" },
      { label: "Watch: We Care a Lot", href: "https://youtu.be/NbZ0bh51bEo" },
    ],
    gradient: ["#f3a7c9", "#2a1a23"],
  },
  {
    slug: "blender",
    title: "Blender Creation",
    tags: ["3D", "Blender"],
    year: "2022",
    description:
      "An ornate, lamp-lit European street built entirely in Blender — façades, stonework, ironwork, and climbing ivy — then brought into Roblox Studio to walk through in real time with emissive lighting and volumetric haze.",
    image: "/projects/blender-street-3.png",
    tech: ["Blender", "Roblox Studio", "PBR Materials"],
    gradient: ["#f6bcd6", "#2c1a24"],
  },
];
