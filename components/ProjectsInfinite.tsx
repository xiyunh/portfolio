"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

// hard cap so the DOM can't grow unbounded
const MAX_CYCLES = 40;

export default function ProjectsInfinite() {
  const [cycles, setCycles] = useState(1);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCycles((c) => Math.min(c + 1, MAX_CYCLES));
        }
      },
      // start appending well before the user reaches the end
      { rootMargin: "1200px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      {Array.from({ length: cycles }, (_, cycle) => (
        <div key={cycle}>
          {cycle > 0 && (
            <div
              aria-hidden
              className="flex items-center gap-4 py-14 font-mono text-[10px] tracking-[0.3em] text-muted/60 uppercase select-none"
            >
              <span className="h-px flex-1 bg-line" />
              <span className="spin-slow text-accent-2">✳</span>
              loop_{String(cycle + 1).padStart(2, "0")} / the archive repeats
              <span className="spin-slow text-accent">✳</span>
              <span className="h-px flex-1 bg-line" />
            </div>
          )}
          {projects.map((p, i) => (
            <Reveal key={`${cycle}-${p.slug}`}>
              <ProjectCard project={p} index={i} />
            </Reveal>
          ))}
        </div>
      ))}
      {/* sentinel that triggers the next cycle */}
      <div ref={sentinelRef} className="h-px" />
    </>
  );
}
