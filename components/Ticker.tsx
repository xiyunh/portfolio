const phrases = [
  "open to new opportunities",
  "design",
  "engineering",
  "typescript",
  "systems that hold up",
  "details matter",
];

// endless scrolling text strip between sections
export default function Ticker() {
  const run = (
    <>
      {phrases.map((p, i) => (
        <span key={p} className="inline-flex items-center">
          <span className="px-6">{p}</span>
          <span className={i % 2 === 0 ? "text-accent" : "text-accent-2"}>✦</span>
        </span>
      ))}
    </>
  );
  return (
    <div aria-hidden className="marquee border-y border-line py-4 select-none">
      <div className="ticker-track font-mono text-xs tracking-[0.3em] whitespace-nowrap text-muted uppercase">
        <span>{run}</span>
        <span>{run}</span>
      </div>
    </div>
  );
}
