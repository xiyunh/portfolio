"use client";

import { useEffect, useRef } from "react";

// soft accent spotlight that trails the cursor — desktop only
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
          el.style.transform = `translate(${x - 300}px, ${y - 300}px)`;
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
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-0 h-[600px] w-[600px] rounded-full opacity-[0.055]"
      style={{
        background:
          "radial-gradient(circle, var(--accent) 0%, var(--accent-2) 35%, transparent 65%)",
        transform: "translate(-600px, -600px)",
      }}
    />
  );
}
