import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-dvh items-end overflow-hidden px-5 pb-16 pt-28 sm:items-center sm:px-8 sm:pb-10"
    >
      <img
        src="/images/hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-bg)_48%,transparent)_0%,color-mix(in_oklab,var(--color-bg)_22%,transparent)_40%,color-mix(in_oklab,var(--color-bg)_88%,transparent)_100%)]" />

      <div
        className="relative z-10 mx-auto w-full max-w-4xl"
        style={{ animation: "fade-up 700ms cubic-bezier(0.22, 1, 0.36, 1) both" }}
      >
        <p className="font-sans text-[0.72rem] font-medium uppercase tracking-[0.32em] text-blush">
          Um presente · para Samarah
        </p>
        <h2 className="mt-4 font-display text-[clamp(2.8rem,9vw,6.2rem)] font-medium leading-[0.92] tracking-[-0.03em] text-cream">
          Feliz Dia
          <span className="block italic text-blush">das Crianças</span>
        </h2>
        <p className="mt-6 max-w-xl font-display text-xl leading-snug text-cream-soft sm:text-2xl">
          Samarah, você virou o meu tempo. Desde o primeiro dia — e até
          dezembro de 2027, quando a gente se encontra.
        </p>
        <a
          href="#tempo"
          className="mt-10 inline-flex min-h-12 items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.2em] text-blush transition-colors duration-150 hover:text-cream"
        >
          Ver o nosso tempo
          <ChevronDown className="size-4" strokeWidth={1.75} />
        </a>
      </div>
    </section>
  );
}
