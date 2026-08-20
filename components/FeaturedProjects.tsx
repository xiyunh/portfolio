import Link from "next/link";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading index="02" label="Projects" title="Selected work" />
      <div>
        {featured.map((p, i) => (
          <Reveal key={p.slug}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-16 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 border border-line px-8 py-4 font-mono text-xs tracking-[0.18em] uppercase transition-colors hover:border-accent hover:text-accent"
          >
            All projects — {String(projects.length).padStart(2, "0")}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
