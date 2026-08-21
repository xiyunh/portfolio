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
  const run = phrases.map((p) => p).join("  //  ");
  return (
    <div
      aria-hidden
      className="marquee border-y border-line py-4 select-none"
    >
      <div className="ticker-track font-mono text-xs tracking-[0.3em] whitespace-nowrap text-muted uppercase">
        <span className="pr-8">{run}&nbsp;&nbsp;//&nbsp;&nbsp;</span>
        <span className="pr-8">{run}&nbsp;&nbsp;//&nbsp;&nbsp;</span>
      </div>
    </div>
  );
}
