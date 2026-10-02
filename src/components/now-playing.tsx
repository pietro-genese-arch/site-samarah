import { useEffect, useState } from "react";
import type { Song } from "@/lib/songs";

type Props = {
  song: Song;
  flash: number;
};

export function NowPlaying({ song, flash }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (flash === 0) return;
    setVisible(true);
    const hide = window.setTimeout(() => setVisible(false), 3200);
    return () => window.clearTimeout(hide);
  }, [flash]);

  if (!visible) return null;

  return (
    <div
      key={flash}
      className="now-playing pointer-events-none fixed inset-0 z-[60] flex items-center justify-center px-6"
      role="status"
      aria-live="polite"
    >
      <div className="absolute inset-0 bg-[color-mix(in_oklab,var(--color-bg)_72%,transparent)]" />
      <div className="now-playing-copy relative max-w-3xl text-center">
        <p className="font-sans text-[0.72rem] font-medium uppercase tracking-[0.42em] text-blush">
          agora toca
        </p>
        <span className="now-playing-rule mx-auto mt-5 block h-px w-16 bg-blush" />
        <h3 className="mt-5 font-display text-[clamp(2.6rem,9vw,5.8rem)] font-medium leading-[0.92] tracking-[-0.03em] text-cream">
          {song.title}
        </h3>
        <p className="mt-4 font-display text-xl italic text-cream-soft sm:text-2xl">
          {song.artist}
        </p>
      </div>
    </div>
  );
}
