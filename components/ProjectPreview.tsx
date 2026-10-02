import type { Project } from "@/lib/data";
import CoverImage from "./CoverImage";

// Generated gradient panel with the cover photo layered on top when present.
// Shared by the archive cards and the project detail pages.
export default function ProjectPreview({
  project,
  sizes = "(min-width: 768px) 60vw, 100vw",
}: {
  project: Project;
  sizes?: string;
}) {
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
      <span
        className="absolute inset-0 flex items-center justify-center font-mono text-4xl font-bold tracking-[0.3em] uppercase opacity-20 select-none md:text-6xl"
        style={{ color: from }}
      >
        {project.slug}
      </span>
      <span className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
        {project.slug.replace(/-/g, "_")}.sys
      </span>
      <span className="absolute right-4 bottom-4 font-mono text-[10px] tracking-[0.25em] text-white/40 uppercase">
        [ preview_ready ]
      </span>
      {project.image && (
        <CoverImage src={project.image} alt={`${project.title} preview`} sizes={sizes} />
      )}
    </div>
  );
}
