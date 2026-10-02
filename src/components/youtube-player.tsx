import { useEffect, useRef } from "react";
import {
  loadYoutubeApi,
  YT_ENDED,
  type YoutubePlayerInstance,
} from "@/lib/youtube";

type Props = {
  videoId: string;
  onEnded: () => void;
};

export function YoutubePlayer({ videoId, onEnded }: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YoutubePlayerInstance | null>(null);
  const videoIdRef = useRef(videoId);
  const onEndedRef = useRef(onEnded);
  const ignoreEndedUntil = useRef(0);
  videoIdRef.current = videoId;
  onEndedRef.current = onEnded;

  useEffect(() => {
    let cancelled = false;

    loadYoutubeApi().then(() => {
      if (cancelled || !hostRef.current || !window.YT?.Player) return;
      if (playerRef.current) return;

      ignoreEndedUntil.current = Date.now() + 1500;
      playerRef.current = new window.YT.Player(hostRef.current, {
        videoId: videoIdRef.current,
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data !== YT_ENDED) return;
            if (Date.now() < ignoreEndedUntil.current) return;
            ignoreEndedUntil.current = Date.now() + 1500;
            onEndedRef.current();
          },
        },
      });
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    ignoreEndedUntil.current = Date.now() + 1500;
    playerRef.current?.loadVideoById(videoId);
  }, [videoId]);

  useEffect(() => {
    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, []);

  return (
    <div className="absolute inset-0 h-full w-full [&_iframe]:h-full [&_iframe]:w-full">
      <div ref={hostRef} className="h-full w-full" />
    </div>
  );
}
