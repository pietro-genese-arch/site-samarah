import { useEffect, useRef } from "react";
import { LETTER_LINES } from "@/lib/letter";

export function LetterSection() {
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const root = listRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll("[data-line]"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-in", "true");
          }
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );
    for (const el of items) io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="carta" className="relative px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="letter-paper relative overflow-hidden rounded-[28px] px-5 py-10 shadow-[var(--shadow-soft)] sm:rounded-[40px] sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-cream)_70%,transparent),color-mix(in_oklab,var(--color-cream)_88%,transparent))]" />
          <div className="relative">
            <p className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.28em] text-wine">
              Carta · 50 linhas
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,5.4vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.03em] text-ink">
              O que eu não cabia numa mensagem
            </h2>
            <ol ref={listRef} className="mt-10 space-y-5">
              {LETTER_LINES.map((line, i) => (
                <li
                  key={i}
                  data-line
                  className="grid grid-cols-[2.2rem_1fr] gap-3 sm:grid-cols-[3rem_1fr] sm:gap-5"
                  style={{
                    opacity: 0.28,
                    transform: "translateY(10px)",
                    transition:
                      "opacity 500ms cubic-bezier(0.22, 1, 0.36, 1), transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  <span className="pt-1 font-sans text-[0.68rem] tabular-nums tracking-[0.14em] text-rose">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-[1.12rem] leading-[1.55] text-ink sm:text-[1.28rem]">
                    {line}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-12 font-display text-2xl italic text-wine">
              Com todo o meu tempo,
              <span className="mt-1 block text-lg not-italic tracking-[0.08em] uppercase text-rose">
                David
              </span>
            </p>
          </div>
        </div>
      </div>
      <style>{`
        #carta [data-line][data-in="true"] {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
