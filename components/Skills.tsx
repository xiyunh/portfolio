import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import SkillIcon, { brandHex } from "./SkillIcon";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24 md:py-32">
      <SectionHeading index="01" label="Skills" title="What I work with" />
      <Reveal>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {skillGroups.map((group, gi) => (
            <div key={group.label}>
              <p className="mb-5 border-b border-line pb-3 font-mono text-[10px] tracking-[0.22em] text-muted uppercase">
                <span className="text-accent">
                  {String(gi + 1).padStart(2, "0")}
                </span>{" "}
                / {group.label}
              </p>
              <ul className="space-y-3">
                {group.items.map((s) => (
                  <li
                    key={s.name}
                    className="skill flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
                    style={{ "--brand": s.hex ?? brandHex(s.icon) } as React.CSSProperties}
                  >
                    <span className="skill-icon shrink-0 text-muted/70 transition-colors duration-300">
                      <SkillIcon icon={s.icon} className="h-[18px] w-[18px]" />
                    </span>
                    {s.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
