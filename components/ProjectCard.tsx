import Image from "next/image";
import type { Project } from "@/lib/data";

function Preview({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} preview`}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        sizes="(min-width: 768px) 60vw, 100vw"
      />
    );
  }
  const [from, to] = project.gradient;
  return (
    <div
      className="bg-grid absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]"
      style={{
        backgroundColor: to,
        backgroundImage: `radial-gradient(ellipse at 30% 20%, ${from}33 0%, transparent 60%), radial-gradient(ellipse at 80% 90%, ${from}22 0%, transparent 55%), linear-gradient(to right, rgb(255 255 255 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.04) 1px, transparent 1px)`,
        backgroundSize: "auto, auto, 44px 44px, 44px 44px",
      }}
    >
      {/* oversized slug watermark */}
      <span
        className="absolute inset-0 flex items-center justify-center font-mono text-4xl font-bold tracking-[0.3em] uppercase opacity-20 select-none md:text-6xl"
        style={{ color: from }}
      >
        {project.slug}
      </span>
      {/* mono corner metadata, saifullah-style */}
      <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
        {project.slug.replace(/-/g, "_")}.sys
      </span>
      <span className="absolute right-4 bottom-4 font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
        ● preview_ready
      </span>
    </div>
  );
}

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");
  const href = project.live ?? project.source;

  return (
    <article className="group border-b border-line py-14 first:pt-0 md:py-20">
      <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-14">
        {/* left: number + text */}
        <div className="flex flex-col">
          <div className="flex items-baseline gap-5">
            <span className="index-outline font-mono text-6xl font-bold md:text-8xl">
              {number}
            </span>
            <span className="label">{project.year}</span>
          </div>

          <h3 className="mt-6 text-2xl font-semibold tracking-tight md:text-4xl">
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors group-hover:text-accent"
              >
                {project.title}
                <span className="ml-3 inline-block text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  ↗
                </span>
              </a>
            ) : (
              project.title
            )}
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="border border-line px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-muted uppercase"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="mt-6 max-w-md leading-relaxed text-muted">
            {project.description}
          </p>

          <p className="mt-6 font-mono text-xs leading-relaxed tracking-wider text-muted/80">
            {project.tech.join(" · ")}
          </p>

          <div className="mt-8 flex gap-6 font-mono text-xs tracking-[0.18em] uppercase">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="link-sweep text-accent"
              >
                Live site ↗
              </a>
            )}
            {project.source && (
              <a
                href={project.source}
                target="_blank"
                rel="noreferrer"
                className="link-sweep text-muted transition-colors hover:text-foreground"
              >
                Source ↗
              </a>
            )}
          </div>
        </div>

        {/* right: preview */}
        <a
          href={href}
          target={href ? "_blank" : undefined}
          rel="noreferrer"
          className="relative block aspect-[16/10] overflow-hidden border border-line"
          aria-label={`${project.title} preview`}
        >
          <Preview project={project} />
        </a>
      </div>
    </article>
  );
}
