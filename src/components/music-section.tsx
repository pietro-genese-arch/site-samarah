import { useCallback, useState } from "react";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import { NowPlaying } from "@/components/now-playing";
import { YoutubePlayer } from "@/components/youtube-player";
import { SONGS, youtubeThumb } from "@/lib/songs";
import { cn } from "@/lib/utils";

export function MusicSection() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [flash, setFlash] = useState(0);
  const song = SONGS[active];

  const announce = useCallback(() => {
    setFlash((n) => n + 1);
  }, []);

  const playAt = useCallback(
    (index: number) => {
      const next = (index + SONGS.length) % SONGS.length;
      setActive(next);
      setPlaying(true);
      setStarted(true);
      announce();
    },
    [announce],
  );

  const select = (index: number) => {
    if (index === active && playing) {
      announce();
      return;
    }
    playAt(index);
  };

  const onEnded = () => {
    playAt(active + 1);
  };

  return (
    <section id="musicas" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <NowPlaying song={song} flash={flash} />

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
        <div>
          <p className="font-sans text-[0.72rem] font-medium uppercase tracking-[0.32em] text-rose">
            A playlist da Samarah
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.2rem,6vw,4.2rem)] font-medium leading-[1.02] tracking-[-0.03em] text-cream">
            A trilha do nosso tempo
          </h2>
          <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-muted">
            Onze músicas dela, uma atrás da outra. Quando uma acaba, a próxima
            começa. Se quiser pular, é só escolher.
          </p>

          <div className="relative mt-10 overflow-hidden rounded-[28px] border border-border bg-surface shadow-[var(--shadow-soft)] sm:rounded-[32px]">
            <div className="relative aspect-video bg-bg-deep">
              {started ? (
                <YoutubePlayer videoId={song.youtubeId} onEnded={onEnded} />
              ) : (
                <button
                  type="button"
                  onClick={() => playAt(active)}
                  className="group absolute inset-0"
                  aria-label={`Tocar ${song.title}`}
                >
                  <img
                    src={youtubeThumb(song.youtubeId)}
                    alt=""
                    className="h-full w-full object-cover opacity-80 transition-opacity duration-200 group-hover:opacity-100"
                  />
                  <span className="absolute inset-0 bg-[color-mix(in_oklab,var(--color-bg)_35%,transparent)]" />
                  <span className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-ink transition-transform duration-150 group-hover:scale-105 group-active:scale-[0.96]">
                    <Play className="ml-0.5 size-7 fill-ink" strokeWidth={1.5} />
                  </span>
                </button>
              )}
            </div>
            <div className="flex items-center justify-between gap-3 px-4 py-4 sm:px-6">
              <div className="min-w-0">
                <p className="truncate font-display text-2xl leading-tight text-cream">
                  {song.title}
                </p>
                <p className="mt-1 truncate font-sans text-sm text-muted">{song.artist}</p>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                <button
                  type="button"
                  onClick={() => playAt(active - 1)}
                  className="inline-flex size-11 items-center justify-center rounded-full text-muted transition-colors duration-150 hover:text-cream"
                  aria-label="Música anterior"
                >
                  <SkipBack className="size-5" strokeWidth={1.75} />
                </button>
                <button
                  type="button"
                  onClick={() => playAt(active)}
                  className="inline-flex size-12 items-center justify-center rounded-full bg-cream text-ink transition-transform duration-150 active:scale-[0.96]"
                  aria-label={`Tocar ${song.title}`}
                >
                  <Play className="ml-0.5 size-5 fill-ink" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={() => playAt(active + 1)}
                  className="inline-flex size-11 items-center justify-center rounded-full text-muted transition-colors duration-150 hover:text-cream"
                  aria-label="Próxima música"
                >
                  <SkipForward className="size-5" strokeWidth={1.75} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <ol className="max-h-[min(36rem,70vh)] space-y-1 overflow-y-auto pr-1">
          {SONGS.map((item, i) => {
            const isActive = i === active;
            return (
              <li key={`${item.youtubeId}-${i}`}>
                <button
                  type="button"
                  onClick={() => select(i)}
                  className={cn(
                    "flex w-full min-h-14 items-center gap-4 rounded-2xl border px-3 py-3 text-left transition-[background-color,border-color,transform] duration-150 ease-out active:scale-[0.99] sm:px-4",
                    isActive
                      ? "border-border-strong bg-surface-2"
                      : "border-transparent bg-transparent hover:bg-surface",
                  )}
                >
                  <span className="relative size-14 shrink-0 overflow-hidden rounded-xl">
                    <img
                      src={youtubeThumb(item.youtubeId)}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-[color-mix(in_oklab,var(--color-bg)_28%,transparent)]">
                      {isActive && playing ? (
                        <Pause className="size-4 text-cream" strokeWidth={1.75} />
                      ) : (
                        <Play className="size-4 text-cream" strokeWidth={1.75} />
                      )}
                    </span>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-sans text-sm font-medium text-cream">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block truncate font-sans text-xs text-muted">
                      {item.artist}
                    </span>
                  </span>
                  <span className="shrink-0 font-sans text-xs tabular-nums text-subtle">
                    {item.duration}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
