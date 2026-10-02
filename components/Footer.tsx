import { SOCIAL } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-dim sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} Khyle Guadalquiver. Built with Next.js,
          TypeScript and Tailwind CSS.
        </p>
        <ul className="flex gap-6">
          <li>
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-accent hover:glow-text"
            >
              github
            </a>
          </li>
          <li>
            <a
              href={SOCIAL.email}
              className="transition hover:text-accent hover:glow-text"
            >
              email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
