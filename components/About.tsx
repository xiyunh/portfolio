import { about, site } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading index="01" label="About" title="Behind the keyboard" />
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="space-y-6 text-lg leading-relaxed text-muted">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="label pt-4">
              <span className="text-accent">◆</span> Based in {site.location}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div>
            <p className="label mb-6">Toolbox</p>
            <ul className="flex flex-wrap gap-2">
              {about.skills.map((s) => (
                <li
                  key={s}
                  className="border border-line px-3 py-1.5 font-mono text-xs tracking-wider text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
