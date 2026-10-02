import type { Metadata } from "next";
import SplineScene from "@/components/SplineScene";

export const metadata: Metadata = { title: "Art" };

const SPLINE_SCENE =
  "https://prod.spline.design/8xeFiVPu5TXUoG9p/scene.splinecode";

export default function ArtPage() {
  return (
    <main>
      {/* full-bleed interactive scene — it carries its own title in 3D */}
      <section className="relative h-screen min-h-[480px]">
        <SplineScene url={SPLINE_SCENE} />
        {/* blend the scene into the site background at both edges */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
        <div className="pointer-events-none absolute bottom-10 left-6 md:left-10">
          <p className="label">
            <span className="text-accent">Gallery</span> / Interactive
          </p>
          <p className="mt-2 font-mono text-[10px] tracking-[0.25em] text-muted uppercase">
            drag to orbit · scroll to zoom
          </p>
        </div>
      </section>
    </main>
  );
}
