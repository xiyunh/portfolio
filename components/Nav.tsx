"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/data";

const links = [
  { href: "/#toolbox", label: "Toolbox" },
  { href: "/projects", label: "Projects" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm tracking-widest text-foreground"
        >
          {site.name.toUpperCase()}
        </Link>

        {/* desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="link-sweep font-mono text-xs tracking-[0.18em] text-muted uppercase transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${site.email}`}
              className="border border-accent/60 px-4 py-2 font-mono text-xs tracking-[0.18em] text-accent uppercase transition-colors hover:bg-accent hover:text-background"
            >
              Hire me
            </a>
          </li>
        </ul>

        {/* mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <ul className="border-t border-line bg-background px-6 py-6 md:hidden">
          {links.map((l) => (
            <li key={l.href} className="py-3">
              <Link
                href={l.href}
                className="font-mono text-sm tracking-[0.18em] text-muted uppercase"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <a
              href={`mailto:${site.email}`}
              className="inline-block border border-accent/60 px-4 py-2 font-mono text-xs tracking-[0.18em] text-accent uppercase"
            >
              Hire me
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
