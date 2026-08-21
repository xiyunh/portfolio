"use client";

import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { site } from "@/lib/data";
import LocalTime from "./LocalTime";

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
  });

  return (
    <section className="bg-grid relative flex min-h-screen items-center overflow-hidden">
      {/* radial fade so the grid dissolves toward edges */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_78%)]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 pt-16">
        <motion.p {...fade(0.05)} className="label mb-6">
          {site.availability}
        </motion.p>

        <motion.h1
          {...fade(0.15)}
          className="max-w-4xl text-6xl leading-[0.95] font-semibold tracking-tight md:text-[7.5rem]"
        >
          {site.name}
          <span className="cursor-blink h-[0.85em] translate-y-[0.08em]" />
        </motion.h1>

        <motion.p
          {...fade(0.28)}
          className="mt-10 max-w-xl text-lg leading-relaxed text-muted"
        >
          {site.tagline}
        </motion.p>

        <motion.div {...fade(0.4)} className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 bg-accent px-6 py-3 font-mono text-xs tracking-[0.18em] text-background uppercase transition-transform hover:-translate-y-0.5"
          >
            View projects
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-3 border border-line px-6 py-3 font-mono text-xs tracking-[0.18em] text-foreground uppercase transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.div
          {...fade(0.55)}
          className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs tracking-widest text-muted"
        >
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="link-sweep uppercase transition-colors hover:text-foreground"
            >
              {s.label}
            </a>
          ))}
          <span className="ml-auto hidden uppercase md:inline">
            {site.location} / <LocalTime />
          </span>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
        Scroll ↓
      </div>
    </section>
  );
}
