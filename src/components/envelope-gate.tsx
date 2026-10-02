import { useState } from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  onOpen: () => void;
};

export function EnvelopeGate({ onOpen }: Props) {
  const [leaving, setLeaving] = useState(false);

  const open = () => {
    if (leaving) return;
    setLeaving(true);
    window.setTimeout(onOpen, 720);
  };

  return (
    <section
      className={cn(
        "relative isolate flex min-h-dvh items-end justify-center overflow-hidden px-5 pb-16 pt-24 sm:items-center sm:pb-0",
        leaving && "pointer-events-none",
      )}
      style={{
        opacity: leaving ? 0 : 1,
        transform: leaving ? "scale(1.04)" : "scale(1)",
        filter: leaving ? "blur(10px)" : "blur(0)",
        transition:
          "opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1), filter 700ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <img
        src="/images/envelope.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-bg)_55%,transparent)_0%,color-mix(in_oklab,var(--color-bg)_28%,transparent)_42%,color-mix(in_oklab,var(--color-bg)_78%,transparent)_100%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center text-center">
        <p className="font-sans text-[0.72rem] font-medium uppercase tracking-[0.34em] text-blush">
          12 de outubro · Dia das Crianças
        </p>
        <h1 className="mt-5 font-display text-[clamp(3.1rem,10vw,5.6rem)] font-medium leading-[0.92] tracking-[-0.03em] text-cream">
          Uma carta
          <span className="block italic text-blush">para Samarah</span>
        </h1>
        <p className="mt-6 max-w-md font-display text-xl italic leading-snug text-cream-soft sm:text-2xl">
          De David. Desde 7 de novembro de 2025, cada segundo pertence a nós.
        </p>

        <button
          type="button"
          onClick={open}
          className="mt-10 flex min-h-12 items-center gap-3 rounded-full bg-wine px-8 py-3.5 font-sans text-sm font-medium tracking-[0.16em] text-cream uppercase transition-[transform,background-color] duration-150 ease-out hover:bg-rose active:scale-[0.96]"
          style={{ animation: "seal-pulse 2.8s ease-in-out infinite" }}
        >
          <Heart className="size-4 fill-cream text-cream" strokeWidth={1.75} />
          Abrir carta
        </button>
      </div>
    </section>
  );
}
