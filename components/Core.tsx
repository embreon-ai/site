"use client";

import { useEffect, useRef } from "react";

const TAU = Math.PI * 2;

type Particle = { rr: number; a0: number; w: number; sz: number; ph: number; fl: number; h: number; l: number; st: number };

function seeded(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeParticles(n: number): Particle[] {
  const rnd = seeded(7);
  return Array.from({ length: n }, () => {
    const rr = 0.36 + Math.pow(rnd(), 0.75) * 0.7;
    return {
      rr,
      a0: rnd() * TAU,
      w: ((rnd() < 0.55 ? 1 : -1) * (0.06 + rnd() * 0.32)) / (0.6 + rr),
      sz: 0.6 + rnd() * 2.1,
      ph: rnd() * TAU,
      fl: 0.6 + rnd() * 2.4,
      h: 24 + rnd() * 20,
      l: 48 + rnd() * 28,
      st: 0.06 + rnd() * 0.16,
    };
  });
}

/** The living core: the same ember as the product and the film, drawn on a canvas. */
export default function Core({ size = 360 }: { size?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const g = cv.getContext("2d");
    if (!g) return;
    const parts = makeParticles(size < 300 ? 320 : 480);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let visible = true;
    const start = performance.now();

    const resize = () => {
      const q = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(size * q);
      cv.height = Math.round(size * q);
      g.setTransform(q, 0, 0, q, 0, 0);
    };

    const ring = (r: number, rot: number, dash: number[], lw: number, col: string) => {
      g.save();
      g.rotate(rot);
      g.setLineDash(dash);
      g.lineWidth = lw;
      g.strokeStyle = col;
      g.beginPath();
      g.arc(0, 0, r, 0, TAU);
      g.stroke();
      g.restore();
    };

    const draw = (t: number) => {
      const c = size / 2;
      const R = size * 0.34;
      const k = R / 170;
      const ignite = reduce ? 1 : Math.min(1, t / 1.6);
      const A = 1 - Math.pow(1 - ignite, 3);
      g.clearRect(0, 0, size, size);

      let gr = g.createRadialGradient(c, c, 0, c, c, R * 1.45);
      gr.addColorStop(0, `rgba(245,165,36,${0.26 * A})`);
      gr.addColorStop(0.5, `rgba(194,65,12,${0.09 * A})`);
      gr.addColorStop(1, "rgba(194,65,12,0)");
      g.fillStyle = gr;
      g.beginPath();
      g.arc(c, c, R * 1.45, 0, TAU);
      g.fill();

      g.save();
      g.translate(c, c);
      g.lineCap = "round";
      ring(R * 1.1, t * 0.05, [1.2 * k, 10 * k], 1.3 * k, `rgba(245,165,36,${0.5 * A})`);
      ring(R * 0.95, -t * 0.13, [48 * k, 10 * k, 3 * k, 10 * k, 90 * k, 16 * k, 6 * k, 22 * k], 2.2 * k, `rgba(245,165,36,${0.62 * A})`);
      ring(R * 0.8, 0, [], k, `rgba(245,165,36,${0.16 * A})`);
      g.lineWidth = 1.3 * k;
      for (let i = 0; i < 3; i++) {
        g.save();
        g.rotate(-t * 0.42 + i * 1.1);
        g.strokeStyle = `rgba(255,213,138,${(0.5 - 0.1 * i) * A})`;
        g.beginPath();
        g.ellipse(0, 0, R * (0.6 - 0.05 * i), R * (0.26 - 0.07 * i), 0, 0, TAU);
        g.stroke();
        g.restore();
      }
      g.restore();

      g.globalCompositeOperation = "lighter";
      g.lineCap = "round";
      for (const p of parts) {
        const a = p.a0 + p.w * t;
        const r = p.rr * R * (1 + 0.035 * Math.sin(t * p.fl + p.ph)) * (0.4 + 0.6 * A);
        const tw = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * p.fl * 1.6 + p.ph));
        g.strokeStyle = `hsla(${p.h},95%,${p.l}%,${0.55 * tw * A})`;
        g.lineWidth = Math.max(0.5, p.sz * k);
        g.beginPath();
        if (p.w > 0) g.arc(c, c, r, a - p.st, a);
        else g.arc(c, c, r, a, a + p.st);
        g.stroke();
      }
      g.globalCompositeOperation = "source-over";

      const rc = R * 0.44 * (1 + 0.05 * Math.sin(t * 1.5));
      gr = g.createRadialGradient(c, c, 0, c, c, rc * 1.6);
      gr.addColorStop(0, `rgba(255,244,214,${A})`);
      gr.addColorStop(0.22, `rgba(255,199,90,${0.95 * A})`);
      gr.addColorStop(0.48, `rgba(232,113,26,${0.6 * A})`);
      gr.addColorStop(1, "rgba(154,52,18,0)");
      g.fillStyle = gr;
      g.beginPath();
      g.arc(c, c, rc * 1.6, 0, TAU);
      g.fill();
    };

    const loop = (now: number) => {
      draw((now - start) / 1000);
      if (visible) raf = requestAnimationFrame(loop);
    };

    resize();
    if (reduce) {
      draw(6);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      const was = visible;
      visible = e.isIntersecting && document.visibilityState === "visible";
      if (visible && !was) raf = requestAnimationFrame(loop);
    });
    io.observe(cv);
    const onVis = () => {
      const was = visible;
      visible = document.visibilityState === "visible";
      if (visible && !was) raf = requestAnimationFrame(loop);
    };
    document.addEventListener("visibilitychange", onVis);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [size]);

  return <canvas ref={ref} className="core" style={{ width: size, height: size }} aria-hidden="true" />;
}
