"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { GALLERY } from "@/lib/data";

// Masonry grid (CSS columns) plus a keyboard-friendly lightbox modal
export default function GalleryGrid() {
  const [active, setActive] = useState<number | null>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement | null>(null);
  const isOpen = active !== null;

  const close = useCallback(() => {
    setActive(null);
    trigger.current?.focus(); // return focus to the thumbnail that opened it
  }, []);

  // Wrap around at both ends
  const step = useCallback((dir: number) => {
    setActive((i) => (i === null ? i : (i + dir + GALLERY.length) % GALLERY.length));
  }, []);

  // While open: Esc closes, arrows navigate, page scroll is locked
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, step]);

  const current = active !== null ? GALLERY[active] : null;

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {GALLERY.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={(e) => {
              trigger.current = e.currentTarget;
              setActive(i);
            }}
            aria-label={`Open ${img.name}`}
            className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg border border-line bg-panel transition duration-300 hover:border-accent/70 hover:shadow-glow"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.w}
              height={img.h}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full transition duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-4 pb-3 pt-10 text-left text-xs text-accent opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
              {img.name}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {current && active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm"
        >
          <button
            ref={closeBtn}
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded border border-line bg-panel px-3 py-2 text-xs text-fg transition hover:border-accent hover:text-accent hover:shadow-glow-sm"
          >
            close (esc)
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded border border-line bg-panel px-3 py-3 text-accent transition hover:border-accent hover:shadow-glow-sm sm:left-6"
          >
            &lt;
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-line bg-panel px-3 py-3 text-accent transition hover:border-accent hover:shadow-glow-sm sm:right-6"
          >
            &gt;
          </button>

          {/* Clicks on the image itself should not close the modal */}
          <figure onClick={(e) => e.stopPropagation()} className="max-w-5xl">
            <Image
              key={current.id}
              src={current.src}
              alt={current.alt}
              width={current.w}
              height={current.h}
              sizes="(min-width: 1024px) 70vw, 100vw"
              priority
              className="h-auto max-h-[78vh] w-auto max-w-full rounded-lg border border-line object-contain shadow-glow"
            />
            <figcaption className="mt-3 flex justify-between text-xs text-dim">
              <span>{current.name}</span>
              <span>
                {active + 1} / {GALLERY.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
