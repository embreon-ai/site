"use client";

import { useEffect, useRef, useState } from "react";
import type { Dict } from "@/lib/dict";

/** The 27-second concept film: plays muted when it scrolls into view, sound on request. */
export default function Film({ d }: { d: Dict }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => undefined);
        else v.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggleSound = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted && v.paused) v.play().catch(() => undefined);
  };

  const togglePlay = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => undefined);
    else v.pause();
  };

  return (
    <figure className="film">
      <div className="film-frame">
        <video
          ref={ref}
          src="/film/embreon-film-720p.mp4"
          poster="/film/embreon-film-affiche.webp"
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={d.film.label}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
        <div className="film-controls">
          <button type="button" onClick={togglePlay}>
            {playing ? d.film.pause : d.film.play}
          </button>
          <button type="button" onClick={toggleSound} aria-pressed={!muted}>
            {muted ? d.film.soundOn : d.film.soundOff}
          </button>
        </div>
      </div>
      <figcaption>{d.film.caption}</figcaption>
    </figure>
  );
}
