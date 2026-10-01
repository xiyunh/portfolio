import type { Metadata } from "next";
import SplineScene from "@/components/SplineScene";
import CoverImage from "@/components/CoverImage";
import Reveal from "@/components/Reveal";
import { artworks } from "@/lib/data";

export const metadata: Metadata = { title: "Art" };

const SPLINE_SCENE =
  "https://prod.spline.design/8xeFiVPu5TXUoG9p/scene.splinecode";

export default function ArtPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-32 pb-24 md:pt-40">
      <Reveal>
        <p className="label mb-4">
          <span className="text-accent">Gallery</span> / Interactive
        </p>
        <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">
          Silly creations<span className="text-accent">.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Artworks and creative experiments. The scene below is live 3D from my
          original site — drag to orbit, scroll to zoom.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="card-glow relative mt-14 h-[70vh] min-h-[420px] overflow-hidden border border-line">
          <SplineScene url={SPLINE_SCENE} />
        </div>
      </Reveal>

      {artworks.length > 0 && (
        <div className="mt-20 grid gap-10 sm:grid-cols-2">
          {artworks.map((a, i) => (
            <Reveal key={a.title} delay={0.05 * i}>
              <figure>
                <div className="card-glow relative aspect-[16/10] overflow-hidden">
                  <CoverImage
                    src={a.image}
                    alt={a.title}
                    sizes="(min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between">
                  <span className="text-sm font-semibold">{a.title}</span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-muted uppercase">
                    {a.medium}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      )}
    </main>
  );
}
