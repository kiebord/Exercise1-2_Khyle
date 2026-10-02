import type { TimelineEntry } from "@/lib/data";

// Vertical timeline: a line on the left with a glowing node per entry
export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative ml-2 space-y-8 border-l border-line">
      {entries.map((e) => (
        <li key={e.title} className="relative pl-7">
          <span
            aria-hidden
            className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent shadow-glow-sm"
          />
          <p className="text-xs text-dim">{e.period}</p>
          <h3 className="mt-1 font-bold text-white">{e.title}</h3>
          <p className="text-sm text-accent">{e.place}</p>
          <p className="mt-2 text-sm leading-relaxed text-dim">{e.description}</p>
        </li>
      ))}
    </ol>
  );
}
