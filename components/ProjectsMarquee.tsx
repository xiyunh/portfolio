import Link from "next/link";
import { projects, type Project } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function MarqueeCard({ project, index }: { project: Project; index: number }) {
  const [from, to] = project.gradient;
  const href = project.live ?? project.source ?? "/projects";
  const external = Boolean(project.live ?? project.source);

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group mr-6 block w-[300px] shrink-0 md:w-[400px]"
    >
      {/* preview panel */}
      <div
        className="card-glow relative aspect-video overflow-hidden"
        style={{
          backgroundColor: to,
          backgroundImage: `radial-gradient(ellipse at 30% 20%, ${from}33 0%, transparent 60%), linear-gradient(to right, rgb(255 255 255 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.04) 1px, transparent 1px)`,
          backgroundSize: "auto, 36px 36px, 36px 36px",
        }}
      >
        <span
          className="absolute inset-0 flex items-center justify-center font-mono text-2xl font-bold tracking-[0.25em] uppercase opacity-25 transition-transform duration-500 select-none group-hover:scale-105 md:text-3xl"
          style={{ color: from }}
        >
          {project.slug}
        </span>
        <span className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.22em] text-white/40 uppercase">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="absolute right-3 bottom-3 font-mono text-[10px] tracking-[0.22em] text-white/40 uppercase">
          {project.year}
        </span>
      </div>

      {/* meta */}
      <div className="pt-5">
        <h3 className="flex items-baseline justify-between text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
          {project.title}
          <span className="text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
            ↗
          </span>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <p className="mt-3 font-mono text-[10px] tracking-[0.18em] text-muted/70 uppercase">
          {project.tags.join(" / ")}
        </p>
      </div>
    </a>
  );
}

export default function ProjectsMarquee() {
  // track is doubled for a seamless -50% loop
  const loop = [...projects, ...projects];

  return (
    <section id="projects" className="scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="02" label="Projects" title="Selected work" />
      </div>

      <Reveal>
        <div
          className="marquee"
          style={{ "--marquee-duration": "50s" } as React.CSSProperties}
        >
          <div className="marquee-track py-2">
            {loop.map((p, i) => (
              <MarqueeCard
                key={`${p.slug}-${i}`}
                project={p}
                index={i % projects.length}
              />
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mt-12 flex items-center justify-between">
            <p className="hidden font-mono text-[10px] tracking-[0.25em] text-muted/60 uppercase md:block">
              hover to pause
            </p>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 border border-line px-8 py-4 font-mono text-xs tracking-[0.18em] uppercase transition-colors hover:border-accent hover:text-accent"
            >
              All projects — {String(projects.length).padStart(2, "0")}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
