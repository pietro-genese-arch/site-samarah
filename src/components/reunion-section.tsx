import { useEffect, useState } from "react";
import {
  REUNION_AT,
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

function remaining(): { units: TimeUnits; arrived: boolean } {
  const now = new Date();
  if (now.getTime() >= REUNION_AT.getTime()) {
    return { arrived: true, units: EMPTY };
  }
  return { arrived: false, units: calendarDiff(now, REUNION_AT) };
}

export function ReunionSection() {
  const [state, setState] = useState<{ units: TimeUnits; arrived: boolean }>({
    arrived: false,
    units: EMPTY,
  });

  useEffect(() => {
    setState(remaining());
    const id = window.setInterval(() => setState(remaining()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const countdownUnits = UNIT_LABELS;

  return (
    <section id="encontro" className="relative isolate overflow-hidden">
      <div className="grid min-h-[85dvh] lg:grid-cols-2">
        <div className="relative order-2 min-h-[42vh] lg:order-2 lg:min-h-full">
          <img
            src="/images/reunion.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,color-mix(in_oklab,var(--color-bg)_55%,transparent)_100%)] lg:bg-[linear-gradient(90deg,color-mix(in_oklab,var(--color-bg)_55%,transparent),transparent_45%)]" />
        </div>

        <div className="relative order-1 flex flex-col justify-center bg-bg px-5 py-20 sm:px-10 sm:py-24 lg:order-1 lg:px-16">
          <p className="font-sans text-[0.72rem] font-medium uppercase tracking-[0.32em] text-blush">
            Encontro · férias de dezembro de 2027
          </p>
          <h2 className="mt-4 max-w-xl font-display text-[clamp(2.2rem,5.4vw,4.2rem)] font-medium leading-[1.02] tracking-[-0.03em] text-cream">
            {state.arrived ? "O dia chegou." : "Dezembro de 2027. Aí a gente se encontra."}
          </h2>
          <p className="mt-5 max-w-md font-display text-xl italic leading-snug text-cream-soft sm:text-2xl">
            Não é este dezembro, Samarah. É o próximo — 20 de dezembro de 2027.
            Eu já estou a caminho, segundo a segundo.
          </p>

          {!state.arrived && (
            <ol className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 sm:gap-3">
              {countdownUnits.map((unit) => {
                const value = state.units[unit.key];
                const label = value === 1 ? unit.singular : unit.plural;
                return (
                  <li
                    key={unit.key}
                    className="rounded-2xl border border-border bg-surface px-3 py-4 text-center sm:rounded-3xl sm:px-3 sm:py-5"
                  >
                    <span className="block font-display text-[clamp(1.7rem,4vw,2.4rem)] font-medium leading-none tracking-[-0.04em] text-cream tabular-nums">
                      {unit.key === "hours" || unit.key === "minutes" || unit.key === "seconds"
                      ? pad2(value)
                      : value}
                    </span>
                    <span className="mt-2 block font-sans text-[0.6rem] font-medium uppercase tracking-[0.16em] text-blush">
                      {label}
                    </span>
                  </li>
                );
              })}
            </ol>
          )}

          <p className="mt-12 max-w-md font-display text-lg leading-relaxed text-muted">
            Até lá, esta página fica acesa. Um relógio, uma carta, a playlist
            dela — e você, Samarah, no meio de tudo.
          </p>
          <p className="mt-8 font-display text-3xl italic text-blush">Para Samarah.</p>
        </div>
      </div>
    </section>
  );
}
