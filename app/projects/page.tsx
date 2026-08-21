import type { Metadata } from "next";
import { projects } from "@/lib/data";
import ProjectsInfinite from "@/components/ProjectsInfinite";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projects",
  description: "A numbered archive of everything I've built and shipped.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-36 pb-24 md:pb-32">
      <Reveal>
        <div className="mb-16 md:mb-24">
          <p className="label mb-3">
            <span className="text-accent">index</span> /{" "}
            {String(projects.length).padStart(2, "0")}_entries
          </p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
            All projects<span className="text-accent">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            The full archive — experiments, client work, and side projects,
            newest first. Keep scrolling; it never ends.
          </p>
          <div className="mt-10 h-px w-full bg-line" />
        </div>
      </Reveal>

      <div>
        <ProjectsInfinite />
      </div>
    </div>
  );
}
