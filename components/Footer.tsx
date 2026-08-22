import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 font-mono text-[11px] tracking-[0.18em] text-muted uppercase md:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <a
          href={`mailto:${site.email}`}
          className="link-sweep normal-case tracking-wider transition-colors hover:text-accent"
        >
          {site.email}
        </a>
      </div>
    </footer>
  );
}
