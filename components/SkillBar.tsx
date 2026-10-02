// Single skill with an animated progress bar (CSS only, no client JS)
export default function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between text-sm">
        <span className="text-white">{name}</span>
        <span className="text-dim">{level}%</span>
      </div>
      <div
        role="progressbar"
        aria-label={name}
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 overflow-hidden rounded-sm bg-line"
      >
        <div
          className="h-full origin-left animate-bar rounded-sm bg-accent shadow-glow-sm"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}
