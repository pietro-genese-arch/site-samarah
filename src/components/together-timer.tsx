import { useEffect, useState } from "react";
import {
  RELATIONSHIP_START,
  UNIT_LABELS,
  calendarDiff,
  pad2,
  type TimeUnits,
} from "@/lib/dates";

const EMPTY: TimeUnits = {
  years: 0,
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function nowUnits(): TimeUnits {
  return calendarDiff(RELATIONSHIP_START, new Date());
}

export function TogetherTimer() {
  const [units, setUnits] = useState<TimeUnits>(EMPTY);

  useEffect(() => {
    setUnits(nowUnits());
    const id = window.setInterval(() => setUnits(nowUnits()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="tempo" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="font-sans text-[0.72rem] font-medium uppercase tracking-[0.32em] text-rose">
          Desde 7 de novembro de 2025
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-[clamp(2.2rem,6vw,4.4rem)] font-medium leading-[1.02] tracking-[-0.03em] text-cream">
          O tempo da gente, ao vivo
        </h2>
        <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-muted">
          Cada número abaixo é real. Atualiza a cada segundo — porque o nosso
          namoro não é uma data parada. É agora.
        </p>

        <ol className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {UNIT_LABELS.map((unit, i) => {
            const value = units[unit.key];
            const label = value === 1 ? unit.singular : unit.plural;
            const padded =
              unit.key === "years" || unit.key === "months" || unit.key === "days"
                ? String(value)
                : pad2(value);
            return (
              <li
                key={unit.key}
                className="rounded-2xl border border-border bg-surface px-4 py-5 sm:rounded-3xl sm:px-6 sm:py-7"
                style={{
                  animation: `fade-up 560ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 50}ms both`,
                }}
              >
                <span className="block font-display text-[clamp(2.4rem,7vw,4.1rem)] font-medium leading-none tracking-[-0.04em] text-cream tabular-nums">
                  {padded}
                </span>
                <span className="mt-3 block font-sans text-[0.68rem] font-medium uppercase tracking-[0.22em] text-blush">
                  {label}
                </span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
