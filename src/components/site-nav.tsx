import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#tempo", label: "Tempo" },
  { href: "#carta", label: "Carta" },
  { href: "#musicas", label: "Músicas" },
  { href: "#encontro", label: "Encontro" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const ids = LINKS.map((l) => l.href.slice(1));
      let current = "#inicio";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = `#${id}`;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-200",
        scrolled
          ? "border-b border-border bg-[color-mix(in_oklab,var(--color-bg)_86%,transparent)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6"
        aria-label="Seções da carta"
      >
        <a
          href="#inicio"
          className="font-display text-lg italic tracking-tight text-cream sm:text-xl"
        >
          Para Samarah
        </a>
        <ul className="flex items-center gap-1 overflow-x-auto sm:gap-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-active={active === link.href}
                className="nav-link inline-flex min-h-11 items-center px-2 font-sans text-[0.62rem] font-medium uppercase tracking-[0.12em] text-muted hover:text-cream sm:px-3 sm:text-xs sm:tracking-[0.16em]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
