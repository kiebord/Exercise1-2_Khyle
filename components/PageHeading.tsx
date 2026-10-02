import type { ReactNode } from "react";

// Shared page title: "./name" with a blinking cursor
export default function PageHeading({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">
        <span className="text-accent glow-text">./</span>
        {title}
        <span className="cursor" aria-hidden />
      </h1>
      {children && <p className="mt-4 leading-relaxed text-dim">{children}</p>}
    </div>
  );
}
