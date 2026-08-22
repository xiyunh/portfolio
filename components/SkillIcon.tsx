import {
  siArduino,
  siAutodesk,
  siBlender,
  siClaude,
  siCplusplus,
  siDassaultsystemes,
  siDavinciresolve,
  siFigma,
  siFramer,
  siGithub,
  siGoogle,
  siHtml5,
  siJavascript,
  siJira,
  siKicad,
  siLatex,
  siNextdotjs,
  siNotion,
  siOpenjdk,
  siPython,
  siRaspberrypi,
  siReact,
  siSupabase,
  siTailwindcss,
  siThreedotjs,
  siTypescript,
  siUnity,
  type SimpleIcon,
} from "simple-icons";

const simple: Record<string, SimpleIcon> = {
  siArduino,
  siAutodesk,
  siBlender,
  siClaude,
  siCplusplus,
  siDassaultsystemes,
  siDavinciresolve,
  siFigma,
  siFramer,
  siGithub,
  siGoogle,
  siHtml5,
  siJavascript,
  siJira,
  siKicad,
  siLatex,
  siNextdotjs,
  siNotion,
  siOpenjdk,
  siPython,
  siRaspberrypi,
  siReact,
  siSupabase,
  siTailwindcss,
  siThreedotjs,
  siTypescript,
  siUnity,
};

// logos simple-icons no longer ships (brand-policy removals)
const custom: Record<string, string> = {
  microsoft:
    "M11.4 2H2v9.4h9.4V2zM22 2h-9.4v9.4H22V2zM11.4 12.6H2V22h9.4v-9.4zM22 12.6h-9.4V22H22v-9.4z",
  adobe:
    "M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z",
};

/** Brand color for a skill icon, falling back to the site accent. */
export function brandHex(icon: string): string {
  const hex = simple[icon]?.hex;
  return hex ? `#${hex}` : "var(--accent)";
}

type Props = { icon: string; className?: string };

/** Resolves a skill's icon: simple-icons glyph, hand-drawn path, or letter monogram. */
export default function SkillIcon({ icon, className = "h-4 w-4" }: Props) {
  if (icon.startsWith("mono:")) {
    const letters = icon.slice(5);
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <rect
          x="1.5"
          y="1.5"
          width="21"
          height="21"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <text
          x="12"
          y="16.5"
          textAnchor="middle"
          fontSize={letters.length > 1 ? 10 : 13}
          fontWeight="700"
          fontFamily="ui-monospace, monospace"
          fill="currentColor"
        >
          {letters}
        </text>
      </svg>
    );
  }

  const path = icon.startsWith("custom:")
    ? custom[icon.slice(7)]
    : simple[icon]?.path;

  if (!path) return null;

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d={path} fill="currentColor" />
    </svg>
  );
}
