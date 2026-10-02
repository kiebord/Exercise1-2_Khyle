import Link from "next/link";
import TypingText from "@/components/TypingText";
import { SOCIAL, STACK } from "@/lib/data";

export default function HomePage() {
  return (
    <section className="grid min-h-[calc(100vh-4rem)] items-center gap-14 py-16 lg:grid-cols-[1.25fr_1fr]">
      {/* Left: headline, intro, calls to action, stack */}
      <div>
        <h1 className="text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-6xl">
          <TypingText text="Hi, I'm Khyle Guadalquiver. I build things for the web." />
        </h1>

        <p className="mt-8 max-w-xl leading-relaxed text-dim">
          Junior full-stack developer. I like small, fast interfaces, clean APIs,
          and shipping things people actually use.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/portfolio"
            className="rounded bg-accent px-6 py-3 text-sm font-bold text-ink transition hover:shadow-glow hover:brightness-110"
          >
            View projects
          </Link>
          <a
            href={SOCIAL.email}
            className="rounded border border-accent/50 px-6 py-3 text-sm text-accent transition hover:border-accent hover:bg-accent/10 hover:shadow-glow-sm"
          >
            Get in touch
          </a>
        </div>

        <ul className="mt-12 flex flex-wrap gap-2" aria-label="Tech stack">
          {STACK.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line bg-panel/70 px-3 py-1.5 text-xs text-fg transition hover:border-accent/60 hover:text-accent hover:shadow-glow-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {/* Right: a small terminal window, the one showpiece on the page */}
      <aside
        aria-label="Quick facts"
        className="rounded-lg border border-line bg-panel/80 shadow-glow"
      >
        <div className="flex items-center gap-2 border-b border-line px-4 py-3 text-xs text-dim">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="ml-2">khyle@dev: ~</span>
        </div>
        <div className="space-y-2 p-5 text-sm leading-relaxed">
          <p>
            <span className="text-accent">$</span> whoami
          </p>
          <p className="pb-2 pl-4 text-white">
            Khyle Guadalquiver, junior full-stack developer
          </p>

          <p>
            <span className="text-accent">$</span> cat focus.txt
          </p>
          <p className="pb-2 pl-4 text-dim">
            typescript, react, next.js, node, sql
          </p>

          <p>
            <span className="text-accent">$</span> status
          </p>
          <p className="pl-4 text-white">
            <span
              aria-hidden
              className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-accent shadow-glow-sm"
            />
            open to junior roles and freelance work
          </p>
        </div>
      </aside>
    </section>
  );
}
