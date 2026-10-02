import type { Project } from "@/lib/data";

// One project in the portfolio grid. Lifts and glows on hover.
export default function ProjectCard({ project }: { project: Project }) {
  const { title, description, tags, github, demo } = project;

  return (
    <article className="group flex h-full flex-col rounded-lg border border-line bg-panel/80 p-6 transition duration-300 hover:-translate-y-2 hover:border-accent/60 hover:shadow-glow">
      <h2 className="text-lg font-bold text-white transition group-hover:text-accent group-hover:glow-text">
        {title}
      </h2>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-dim">{description}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded border border-line px-2 py-1 text-xs text-fg"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-3">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} on GitHub`}
          className="rounded border border-line px-4 py-2 text-xs text-fg transition hover:border-accent hover:text-accent hover:shadow-glow-sm"
        >
          GitHub
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} live demo`}
          className="rounded bg-accent px-4 py-2 text-xs font-bold text-ink transition hover:shadow-glow-sm hover:brightness-110"
        >
          Live demo
        </a>
      </div>
    </article>
  );
}
