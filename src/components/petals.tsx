import { useEffect, useRef } from "react";

type Petal = {
  x: number;
  y: number;
  r: number;
  s: number;
  a: number;
  v: number;
  w: number;
  hue: number;
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Petals() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || prefersReducedMotion()) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let running = true;
    const petals: Petal[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = (partial = false): Petal => ({
      x: Math.random() * window.innerWidth,
      y: partial ? Math.random() * window.innerHeight : -20,
      r: 5 + Math.random() * 9,
      s: 0.35 + Math.random() * 0.7,
      a: Math.random() * Math.PI * 2,
      v: 0.4 + Math.random() * 0.9,
      w: 0.006 + Math.random() * 0.012,
      hue: 340 + Math.random() * 18,
    });

    const count = window.innerWidth < 640 ? 18 : 32;
    for (let i = 0; i < count; i++) petals.push(spawn(true));

    const draw = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.a);
      ctx.scale(1, 0.62);
      const g = ctx.createRadialGradient(0, 0, 0, 0, 0, p.r);
      g.addColorStop(0, `hsla(${p.hue}, 48%, 62%, 0.72)`);
      g.addColorStop(0.7, `hsla(${p.hue}, 55%, 38%, 0.5)`);
      g.addColorStop(1, `hsla(${p.hue}, 50%, 22%, 0)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.r, p.r * 1.15, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const tick = () => {
      if (!running) return;
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const p of petals) {
        p.y += p.v * p.s;
        p.x += Math.sin(p.a) * 0.45;
        p.a += p.w;
        if (p.y - p.r > window.innerHeight) {
          Object.assign(p, spawn(false));
        }
        draw(p);
      }
      raf = requestAnimationFrame(tick);
    };

    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        raf = requestAnimationFrame(tick);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVis);
    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 h-full w-full"
    />
  );
}
