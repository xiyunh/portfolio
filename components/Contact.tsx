import { site } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading index="03" label="Contact" title="Let's build something" />
      <Reveal>
        <div className="max-w-2xl">
          <p className="text-lg leading-relaxed text-muted">
            I'm currently <span className="text-foreground">{site.availability.toLowerCase()}</span>.
            Whether you have a project in mind, a role to fill, or just want to
            talk shop — my inbox is open.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="group mt-10 inline-flex items-center gap-4 text-2xl font-semibold tracking-tight transition-colors hover:text-accent md:text-4xl"
          >
            {site.email}
            <span className="text-accent transition-transform group-hover:translate-x-2">→</span>
          </a>
          <div className="mt-12 flex gap-8 font-mono text-xs tracking-[0.18em] uppercase">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="link-sweep text-muted transition-colors hover:text-foreground"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
