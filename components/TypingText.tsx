"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number; // ms per character
  startDelay?: number; // ms before typing starts
};

// Types text out one character at a time with a trailing cursor.
// The full text is rendered invisibly underneath so the layout never jumps.
export default function TypingText({ text, speed = 55, startDelay = 400 }: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Skip the animation for people who prefer reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }

    let i = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return (
    <span className="relative block">
      <span className="sr-only">{text}</span>
      <span aria-hidden className="invisible">
        {text}
      </span>
      <span aria-hidden className="absolute inset-0">
        {text.slice(0, count)}
        <span className="cursor" />
      </span>
    </span>
  );
}
