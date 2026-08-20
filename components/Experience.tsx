import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading index="03" label="Experience" title="Where I've worked" />
      <ol className="space-y-0">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <li className="group grid gap-4 border-b border-line py-10 md:grid-cols-[220px_1fr] md:gap-10">
              <div>
                <p className="font-mono text-xs tracking-[0.18em] text-muted uppercase">
                  {job.period}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  {job.role}{" "}
                  <span className="text-accent">@ {job.company}</span>
                </h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">
                  {job.summary}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="text-accent">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
