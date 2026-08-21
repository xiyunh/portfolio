import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line">
      {/* giant outlined wordmark */}
      <div className="mx-auto max-w-6xl px-6 pt-16">
        <p
          aria-hidden
          className="text-outline text-center font-mono text-[13vw] leading-none font-bold tracking-tight whitespace-nowrap uppercase select-none md:text-[9rem]"
        >
          {site.firstName}
        </p>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-[11px] tracking-[0.18em] text-muted uppercase md:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>Built with Next.js / designed in the dark</p>
      </div>
    </footer>
  );
}
