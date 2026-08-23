"use client";

import { useEffect, useRef } from "react";

// a soft heart-shaped glow that trails the cursor — desktop only
const HEART =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 29'%3E%3Cpath d='M16 29C16 29 0 19 0 9A8 8 0 0 1 16 6 8 8 0 0 1 32 9C32 19 16 29 16 29Z' fill='black'/%3E%3C/svg%3E\")";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let x = -600;
    let y = -600;
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          el.style.transform = `translate(${x - 220}px, ${y - 200}px)`;
          raf = 0;
        });
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    // outer: blur softens the masked heart into a glow
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-40 h-[400px] w-[440px] opacity-[0.07] mix-blend-screen"
      style={{
        transform: "translate(-600px, -600px)",
        filter: "blur(22px)",
        transition: "transform 140ms ease-out",
      }}
    >
      {/* inner: gradient clipped to a heart */}
      <div
        className="h-full w-full"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, var(--accent) 0%, var(--accent) 35%, var(--accent-2) 100%)",
          WebkitMaskImage: HEART,
          maskImage: HEART,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />
    </div>
  );
}
