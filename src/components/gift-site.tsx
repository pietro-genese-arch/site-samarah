import { useCallback, useEffect, useState } from "react";
import { EnvelopeGate } from "@/components/envelope-gate";
import { HeroSection } from "@/components/hero-section";
import { LetterSection } from "@/components/letter-section";
import { MusicSection } from "@/components/music-section";
import { Petals } from "@/components/petals";
import { ReunionSection } from "@/components/reunion-section";
import { SiteNav } from "@/components/site-nav";
import { TogetherTimer } from "@/components/together-timer";

const OPEN_KEY = "para-voce-carta-aberta";

function wasOpened(): boolean {
  try {
    return sessionStorage.getItem(OPEN_KEY) === "1";
  } catch {
    return false;
  }
}

export function GiftSite() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (wasOpened()) setOpen(true);
  }, []);

  const handleOpen = useCallback(() => {
    try {
      sessionStorage.setItem(OPEN_KEY, "1");
    } catch {
      /* private mode */
    }
    setOpen(true);
  }, []);

  if (!open) {
    return (
      <>
        <div className="grain-overlay" />
        <EnvelopeGate onOpen={handleOpen} />
      </>
    );
  }

  return (
    <>
      <div className="grain-overlay" />
      <Petals />
      <SiteNav />
      <main>
        <HeroSection />
        <TogetherTimer />
        <LetterSection />
        <MusicSection />
        <ReunionSection />
      </main>
    </>
  );
}
