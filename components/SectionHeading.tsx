import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: string;
}) {
  return (
    <Reveal>
      <div className="mb-12 md:mb-16">
        <p className="label mb-3">
          <span className="spin-slow mr-2 text-accent-2">✳</span>
          <span className="text-accent">{index}</span> / {label}
        </p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h2>
        <div className="mt-6 h-px w-full bg-line" />
      </div>
    </Reveal>
  );
}
