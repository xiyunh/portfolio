"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Modal =
  | { kind: "about" }
  | { kind: "guide" }
  | { kind: "soon"; name: string }
  | null;

// The scene's own actions point at my old Google Sites galleries. The scene
// runs in-page, so we intercept every link it opens and keep visitors here:
// known pages route internally, retired galleries get an in-site panel.
const INTERNAL_ROUTES: [RegExp, string][] = [
  [/star-compass/, "/projects/star-compass"],
  [/robotic-orchestra/, "/projects/orchestra"],
  [/3D-Media\/blender/, "/projects/blender"],
  [/featured-projects/, "/projects"],
];

export default function SplineScene({ url }: { url: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [modal, setModal] = useState<Modal>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let disposed = false;
    let app: { dispose?: () => void } | undefined;
    const origOpen = window.open;

    window.open = ((u?: string | URL, ...rest: unknown[]) => {
      const href = String(u ?? "");
      if (href.includes("sites.google.com")) {
        for (const [re, to] of INTERNAL_ROUTES) {
          if (re.test(href)) {
            router.push(to);
            return null;
          }
        }
        const slug =
          href.split("/").filter(Boolean).pop()?.split("?")[0] ?? "gallery";
        setModal({ kind: "soon", name: slug.replace(/-/g, " ") });
        return null;
      }
      if (href.startsWith("mailto:")) {
        return origOpen.call(window, "mailto:xiyunhu@ucla.edu", "_self");
      }
      return origOpen.call(window, u as string, ...(rest as [string?]));
    }) as typeof window.open;

    (async () => {
      try {
        const { Application } = await import("@splinetool/runtime");
        if (disposed || !canvasRef.current) return;
        const a = new Application(canvasRef.current);
        app = a;
        await a.load(url);

        // Clicks report leaf objects ("Text 8"), not the sign group, so
        // collect every descendant id of each sign up front.
        type Node = { name?: string; uuid?: string; id?: string; children?: Node[] };
        const collect = (o: Node | undefined, set: Set<string>) => {
          if (!o) return;
          for (const key of [o.uuid, o.id, o.name]) if (key) set.add(key);
          (o.children ?? []).forEach((c) => collect(c, set));
        };
        // the sign boards are not pickable; only their text meshes register,
        // and those are named generically in this scene
        const aboutIds = new Set<string>(["About Me", "Text 8"]);
        const guideIds = new Set<string>(["Guide", "Text 9"]);
        collect(a.findObjectByName("About Me") as Node | undefined, aboutIds);
        collect(a.findObjectByName("Guide") as Node | undefined, guideIds);

        a.addEventListener("mouseDown", (e: { target?: { name?: string; id?: string } }) => {
          const name = e.target?.name ?? "";
          const id = e.target?.id ?? "";
          if (wrapRef.current) wrapRef.current.dataset.lastClick = name;
          if (aboutIds.has(id) || aboutIds.has(name)) setModal({ kind: "about" });
          else if (guideIds.has(id) || guideIds.has(name)) setModal({ kind: "guide" });
        });
      } catch {
        if (!disposed) setFailed(true);
      }
    })();

    return () => {
      disposed = true;
      window.open = origOpen;
      app?.dispose?.();
    };
  }, [url, router]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setModal(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div ref={wrapRef} className="relative h-full w-full">
      <div className="absolute inset-0 flex items-center justify-center font-mono text-xs tracking-[0.3em] text-muted uppercase select-none">
        {failed ? "scene unavailable — check your connection" : "loading scene …"}
      </div>
      <canvas ref={canvasRef} className="relative block h-full w-full" />

      {modal && (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center bg-background/70 p-6 backdrop-blur-sm"
          onClick={() => setModal(null)}
        >
          <div
            className="w-full max-w-md border border-line bg-surface p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-baseline justify-between">
              <p className="label">
                {modal.kind === "about" && (
                  <>
                    <span className="text-accent">01</span> / About me
                  </>
                )}
                {modal.kind === "guide" && (
                  <>
                    <span className="text-accent">02</span> / Guide
                  </>
                )}
                {modal.kind === "soon" && (
                  <>
                    <span className="text-accent">✦</span> / {modal.name}
                  </>
                )}
              </p>
              <button
                onClick={() => setModal(null)}
                aria-label="Close"
                className="font-mono text-sm text-muted transition-colors hover:text-accent"
              >
                ✕
              </button>
            </div>

            {modal.kind === "about" && (
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted">
                <p>
                  I&apos;m Xiyun — I build with hardware, design with software,
                  and add a touch of artistry to everything. Based in Los
                  Angeles, CA.
                </p>
                <p>
                  This scene is from my original portfolio, modeled in Spline.
                  The rest of my work lives on this site now.
                </p>
                <div className="flex gap-5 pt-1 font-mono text-[11px] tracking-[0.18em] uppercase">
                  <a href="/projects" className="link-sweep text-accent">
                    Projects →
                  </a>
                  <a href="mailto:xiyunhu@ucla.edu" className="link-sweep text-accent">
                    Email →
                  </a>
                </div>
              </div>
            )}

            {modal.kind === "guide" && (
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
                <li>
                  <span className="text-foreground">drag</span> — orbit the scene
                </li>
                <li>
                  <span className="text-foreground">scroll</span> — zoom in and out
                </li>
                <li>
                  <span className="text-foreground">click</span> — the signs and
                  the vending-machine shelves open my work
                </li>
                <li className="pt-1 font-mono text-[11px] tracking-wider text-muted/70">
                  galleries from the old site are moving here one by one
                </li>
              </ul>
            )}

            {modal.kind === "soon" && (
              <p className="mt-5 text-sm leading-relaxed text-muted">
                This gallery is moving from my old site onto this one — check
                back soon.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
