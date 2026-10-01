"use client";

import { createElement, useEffect, useState } from "react";

const VIEWER_SRC =
  "https://unpkg.com/@splinetool/viewer@1.9.25/build/spline-viewer.js";

// Interactive Spline embed. The viewer is a web component loaded on demand,
// so the 3D runtime never weighs down the rest of the site.
export default function SplineScene({ url }: { url: string }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (document.querySelector("script[data-spline-viewer]")) return;
    const s = document.createElement("script");
    s.type = "module";
    s.src = VIEWER_SRC;
    s.dataset.splineViewer = "1";
    s.onerror = () => setFailed(true);
    document.head.appendChild(s);
  }, []);

  return (
    <div className="relative h-full w-full">
      {/* sits underneath; covered once the canvas paints */}
      <div className="absolute inset-0 flex items-center justify-center font-mono text-xs tracking-[0.3em] text-muted uppercase select-none">
        {failed ? "scene unavailable — check your connection" : "loading scene …"}
      </div>
      {!failed &&
        createElement("spline-viewer", {
          url,
          style: { display: "block", width: "100%", height: "100%" },
        })}
    </div>
  );
}
