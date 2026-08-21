"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

// Seamless looping scroll: the list is rendered twice, and the instant the
// viewport crosses into the second copy the scroll position is teleported
// back by one copy's height. Identical pixels land in the viewport, so the
// jump is invisible — the page length never changes and there's no counter.
export default function ProjectsInfinite() {
  const firstRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const first = firstRef.current;
    if (!first) return;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = first.getBoundingClientRect();
        const top = rect.top + window.scrollY; // copy A start, in doc coords
        const L = rect.height;
        if (L > 0 && window.scrollY >= top + L) {
          window.scrollTo({ top: window.scrollY - L, behavior: "instant" });
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div ref={firstRef}>
        {projects.map((p, i) => (
          <Reveal key={`a-${p.slug}`}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>
      {/* second copy — the wrap happens before its midpoint is ever passed */}
      <div>
        {projects.map((p, i) => (
          <Reveal key={`b-${p.slug}`}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
