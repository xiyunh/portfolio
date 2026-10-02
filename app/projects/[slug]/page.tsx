import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CoverImage from "@/components/CoverImage";
import ProjectPreview from "@/components/ProjectPreview";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/data";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  return { title: projects.find((p) => p.slug === slug)?.title ?? "Project" };
}

// ---- inline-embed helpers: keep visitors on the site ----
function youTubeId(href: string) {
  return href.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([\w-]{6,})/)?.[1] ?? null;
}
function slidesEmbedUrl(href: string) {
  const id = href.match(/docs\.google\.com\/presentation\/d\/([\w-]+)/)?.[1];
  return id ? `https://docs.google.com/presentation/d/${id}/embed?start=false&loop=false` : null;
}
const isPdf = (href: string) => href.toLowerCase().endsWith(".pdf");

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];

  const external = [
    ...(project.live ? [{ label: "Live site", href: project.live }] : []),
    ...(project.source ? [{ label: "Source", href: project.source }] : []),
    ...(project.links ?? []),
  ];
  type Embed = { label: string; kind: "video" | "slides" | "pdf"; src: string; href: string };
  const embeds = (project.links ?? []).flatMap((l): Embed[] => {
    const yt = youTubeId(l.href);
    if (yt) return [{ label: l.label, kind: "video", src: `https://www.youtube-nocookie.com/embed/${yt}`, href: l.href }];
    const slides = slidesEmbedUrl(l.href);
    if (slides) return [{ label: l.label, kind: "slides", src: slides, href: l.href }];
    if (isPdf(l.href)) return [{ label: l.label, kind: "pdf", src: l.href, href: l.href }];
    return [];
  });
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="mx-auto max-w-6xl px-6 pt-32 pb-24 md:pt-36">
      <Reveal>
        <Link
          href="/projects"
          className="link-sweep font-mono text-xs tracking-[0.18em] text-muted uppercase transition-colors hover:text-foreground"
        >
          ← All projects
        </Link>

        <div className="mt-10 flex items-baseline gap-5">
          <span className="index-outline font-mono text-6xl font-bold md:text-8xl">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.year && <span className="label">{project.year}</span>}
        </div>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
          {project.title}
        </h1>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="border border-line px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-muted uppercase"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
          {project.description}
        </p>

        <p className="mt-6 font-mono text-xs leading-relaxed tracking-wider text-muted/80">
          {project.tech.join(" · ")}
        </p>

        {external.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-4">
            {external.map((l) => (
              <a
                key={l.label + l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-line px-5 py-2.5 font-mono text-xs tracking-[0.18em] uppercase transition-colors hover:border-accent hover:text-accent"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        )}
      </Reveal>

      <Reveal delay={0.1}>
        <div className="card-glow relative mt-14 aspect-[16/9] overflow-hidden">
          <ProjectPreview project={project} sizes="(min-width: 1152px) 1104px, 100vw" />
        </div>
      </Reveal>

      {project.gallery && project.gallery.length > 0 && (
        <Reveal>
          <div className={`mt-6 grid gap-6 ${project.gallery.length > 1 ? "sm:grid-cols-2" : ""}`}>
            {project.gallery.map((src, i) => (
              <div key={src} className="card-glow relative aspect-[16/10] overflow-hidden">
                <CoverImage src={src} alt={`${project.title} — image ${i + 2}`} sizes="(min-width: 768px) 50vw, 100vw" />
              </div>
            ))}
          </div>
        </Reveal>
      )}

      {embeds.map((e) => (
        <Reveal key={e.src}>
          <div className="mt-16">
            <div className="mb-4 flex items-baseline justify-between">
              <p className="label">{e.label}</p>
              <a
                href={e.href}
                target="_blank"
                rel="noreferrer"
                className="link-sweep font-mono text-[10px] tracking-[0.2em] text-muted uppercase hover:text-foreground"
              >
                open ↗
              </a>
            </div>
            <iframe
              src={e.src}
              title={e.label}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={`w-full border border-line bg-surface ${e.kind === "pdf" ? "h-[75vh]" : "aspect-video"}`}
            />
          </div>
        </Reveal>
      ))}

      <div className="mt-20 grid grid-cols-2 border-t border-line pt-8 font-mono text-xs tracking-[0.18em] uppercase">
        <Link href={`/projects/${prev.slug}`} className="link-sweep text-muted transition-colors hover:text-foreground">
          ← {prev.title}
        </Link>
        <Link href={`/projects/${next.slug}`} className="link-sweep justify-self-end text-right text-muted transition-colors hover:text-foreground">
          {next.title} →
        </Link>
      </div>
    </main>
  );
}
