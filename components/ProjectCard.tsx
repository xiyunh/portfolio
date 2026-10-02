import Link from "next/link";
import type { Project } from "@/lib/data";
import CoverImage from "./CoverImage";
import ProjectPreview from "./ProjectPreview";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const number = String(index + 1).padStart(2, "0");
  const href = `/projects/${project.slug}`;

  return (
    <article className="group border-b border-line py-14 first:pt-0 md:py-20">
      <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-14">
        {/* left: number + text */}
        <div className="flex flex-col">
          <div className="flex items-baseline gap-5">
            <span className="index-outline font-mono text-6xl font-bold md:text-8xl">
              {number}
            </span>
            {project.year && <span className="label">{project.year}</span>}
          </div>

          <h3 className="mt-6 text-2xl font-semibold tracking-tight md:text-4xl">
            <Link href={href} className="transition-colors group-hover:text-accent">
              {project.title}
              <span className="ml-3 inline-block text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </Link>
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

          <div className="mt-8 font-mono text-xs tracking-[0.18em] uppercase">
            <Link href={href} className="link-sweep text-accent">
              View project →
            </Link>
          </div>
        </div>

        {/* right: preview + optional gallery */}
        <div>
          <Link
            href={href}
            className="card-glow relative block aspect-[16/10] overflow-hidden"
            aria-label={`${project.title} preview`}
          >
            <ProjectPreview project={project} />
          </Link>
          {project.gallery && project.gallery.length > 0 && (
            <div
              className={`mt-4 grid gap-4 ${project.gallery.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}
            >
              {project.gallery.map((src, i) => (
                <div
                  key={src}
                  className="card-glow group relative aspect-[16/10] overflow-hidden"
                >
                  <CoverImage
                    src={src}
                    alt={`${project.title} — image ${i + 2}`}
                    sizes="(min-width: 768px) 60vw, 100vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
