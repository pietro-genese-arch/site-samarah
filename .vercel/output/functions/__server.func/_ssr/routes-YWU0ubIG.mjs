import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ExternalLink, i as Heart, n as Play, o as ChevronDown, r as Pause } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-YWU0ubIG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function EnvelopeGate({ onOpen }) {
	const [leaving, setLeaving] = (0, import_react.useState)(false);
	const open = () => {
		if (leaving) return;
		setLeaving(true);
		window.setTimeout(onOpen, 720);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("relative isolate flex min-h-dvh items-end justify-center overflow-hidden px-5 pb-16 pt-24 sm:items-center sm:pb-0", leaving && "pointer-events-none"),
		style: {
			opacity: leaving ? 0 : 1,
			transform: leaving ? "scale(1.04)" : "scale(1)",
			filter: leaving ? "blur(10px)" : "blur(0)",
			transition: "opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1), filter 700ms cubic-bezier(0.22, 1, 0.36, 1)"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/envelope.jpg",
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-bg)_55%,transparent)_0%,color-mix(in_oklab,var(--color-bg)_28%,transparent)_42%,color-mix(in_oklab,var(--color-bg)_78%,transparent)_100%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto flex w-full max-w-xl flex-col items-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-[0.72rem] font-medium uppercase tracking-[0.34em] text-blush",
						children: "12 de outubro · Dia das Crianças"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 font-display text-[clamp(3.1rem,10vw,5.6rem)] font-medium leading-[0.92] tracking-[-0.03em] text-cream",
						children: ["Uma carta", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block italic text-blush",
							children: "para você"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md font-display text-xl italic leading-snug text-cream-soft sm:text-2xl",
						children: "Desde 7 de novembro de 2025, cada segundo pertence a nós."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: open,
						className: "mt-10 flex min-h-12 items-center gap-3 rounded-full bg-wine px-8 py-3.5 font-sans text-sm font-medium tracking-[0.16em] text-cream uppercase transition-[transform,background-color] duration-150 ease-out hover:bg-rose active:scale-[0.96]",
						style: { animation: "seal-pulse 2.8s ease-in-out infinite" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
							className: "size-4 fill-cream text-cream",
							strokeWidth: 1.75
						}), "Abrir carta"]
					})
				]
			})
		]
	});
}
function HeroSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inicio",
		className: "relative isolate flex min-h-dvh items-end overflow-hidden px-5 pb-16 pt-28 sm:items-center sm:px-8 sm:pb-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/hero.jpg",
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-bg)_48%,transparent)_0%,color-mix(in_oklab,var(--color-bg)_22%,transparent)_40%,color-mix(in_oklab,var(--color-bg)_88%,transparent)_100%)]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto w-full max-w-4xl",
				style: { animation: "fade-up 700ms cubic-bezier(0.22, 1, 0.36, 1) both" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-[0.72rem] font-medium uppercase tracking-[0.32em] text-blush",
						children: "Um presente · só seu"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-4 font-display text-[clamp(2.8rem,9vw,6.2rem)] font-medium leading-[0.92] tracking-[-0.03em] text-cream",
						children: ["Feliz Dia", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block italic text-blush",
							children: "das Crianças"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-xl font-display text-xl leading-snug text-cream-soft sm:text-2xl",
						children: "Para a menina que virou o meu tempo. Desde o primeiro dia — e até o dezembro em que a gente se encontra."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#tempo",
						className: "mt-10 inline-flex min-h-12 items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.2em] text-blush transition-colors duration-150 hover:text-cream",
						children: ["Ver o nosso tempo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
							className: "size-4",
							strokeWidth: 1.75
						})]
					})
				]
			})
		]
	});
}
/** Carta de 50 linhas — romântica, cuidadosa, feita para o Dia das Crianças. */
var LETTER_LINES = [
	"Hoje é Dia das Crianças, e eu pensei em você antes de abrir os olhos.",
	"Não porque o calendário mandou. Porque cada dia em que você existe já parece um presente.",
	"Desde o dia 7 de novembro de 2025, o mundo tem outro relógio.",
	"O meu passa por você.",
	"Eu conto os anos, os meses, os dias. Os minutos. Os segundos.",
	"E nenhum deles é pequeno demais para caber saudade.",
	"Você chegou quieta e virou o centro de tudo.",
	"Não pediu palco. Não pediu barulho. Só ficou — e o resto do mundo aprendeu a orbitar.",
	"Eu gosto da sua risada quando ela escapa sem aviso.",
	"Gosto do jeito que você fala de coisas simples como se fossem tesouro.",
	"Gosto de como você é forte e, ao mesmo tempo, tão delicada.",
	"Tem dias em que a distância pesa no peito.",
	"Tem noites em que o silêncio parece maior do que o quarto.",
	"Aí eu lembro do seu nome, e a escuridão recua um pouco.",
	"A gente ainda não se encontrou do jeito que o coração pede.",
	"Mas já se encontrou de todos os outros: na conversa, na espera, na fé.",
	"Eu guardo dezembro como quem guarda um segredo bom.",
	"As férias vão abrir a porta que o ano inteiro deixou entreaberta.",
	"Eu vou te ver.",
	"E o tempo, que agora é número nesta página, vira abraço.",
	"Até lá, eu escolho você todos os dias.",
	"Escolho a paciência. Escolho a promessa. Escolho não desistir da gente.",
	"Você merece leveza.",
	"Merece alguém que lembre da sua data, da sua voz, do seu jeito.",
	"Merece um amor que não apresse e não some.",
	"Se eu pudesse, te mandaria o céu de outubro numa caixa.",
	"Como não posso, te mando esta carta.",
	"Cinquenta linhas, e ainda assim insuficiente.",
	"Porque você não cabe em papel.",
	"Cabe em mim.",
	"Eu espero o dezembro com o coração na ponta dos pés.",
	"Espero o instante em que o oi deixar de ser tela e virar presença.",
	"Espero sua mão. Espero o silêncio bom de quem finalmente chegou.",
	"Até lá, deixa eu te dizer o que importa:",
	"eu gosto de você.",
	"Gosto de verdade.",
	"Gosto no meio da semana, no fim da madrugada, no começo de qualquer coisa.",
	"Gosto quando a saudade aperta e quando ela alivia.",
	"Gosto de construir isso com cuidado, no nosso ritmo.",
	"Feliz Dia das Crianças.",
	"Que o mundo seja gentil com você.",
	"Que seus sonhos tenham coragem.",
	"Que o nosso encontro em dezembro venha inteiro, sem pressa e sem falta.",
	"Eu estarei lá.",
	"Com o mesmo coração de 7 de novembro.",
	"Só que maior — porque você o fez crescer.",
	"Te espero.",
	"Te escolho.",
	"Te amo no silêncio e no anúncio.",
	"Para você, hoje e em todos os segundos que este relógio ainda vai contar."
];
function LetterSection() {
	const listRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const root = listRef.current;
		if (!root) return;
		const items = Array.from(root.querySelectorAll("[data-line]"));
		const io = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) entry.target.setAttribute("data-in", "true");
		}, {
			threshold: .35,
			rootMargin: "0px 0px -8% 0px"
		});
		for (const el of items) io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "carta",
		className: "relative px-4 py-20 sm:px-8 sm:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-3xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "letter-paper relative overflow-hidden rounded-[28px] px-5 py-10 shadow-[var(--shadow-soft)] sm:rounded-[40px] sm:px-12 sm:py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_oklab,var(--color-cream)_70%,transparent),color-mix(in_oklab,var(--color-cream)_88%,transparent))]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-[0.68rem] font-medium uppercase tracking-[0.28em] text-wine",
							children: "Carta · 50 linhas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-[clamp(2rem,5.4vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.03em] text-ink",
							children: "O que eu não cabia numa mensagem"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							ref: listRef,
							className: "mt-10 space-y-5",
							children: LETTER_LINES.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								"data-line": true,
								className: "grid grid-cols-[2.2rem_1fr] gap-3 sm:grid-cols-[3rem_1fr] sm:gap-5",
								style: {
									opacity: .28,
									transform: "translateY(10px)",
									transition: "opacity 500ms cubic-bezier(0.22, 1, 0.36, 1), transform 500ms cubic-bezier(0.22, 1, 0.36, 1)"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "pt-1 font-sans text-[0.68rem] tabular-nums tracking-[0.14em] text-rose",
									children: String(i + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-[1.12rem] leading-[1.55] text-ink sm:text-[1.28rem]",
									children: line
								})]
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-12 font-display text-2xl italic text-wine",
							children: ["Com todo o meu tempo,", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-lg not-italic tracking-[0.08em] uppercase text-rose",
								children: "o seu namorado"
							})]
						})
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `
        #carta [data-line][data-in="true"] {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      ` })]
	});
}
var SONGS = [
	{
		youtubeId: "kPa7bsKwL-c",
		title: "Die With A Smile",
		artist: "Lady Gaga & Bruno Mars",
		duration: "4:12",
		dedication: "Se o mundo acabasse agora, eu ainda escolheria ficar ao seu lado."
	},
	{
		youtubeId: "GxldQ9eX2wo",
		title: "Until I Found You",
		artist: "Stephen Sanchez",
		duration: "2:56",
		dedication: "Eu não sabia o que era encontrar alguém — até você."
	},
	{
		youtubeId: "V9PVRfjEBTI",
		title: "Birds of a Feather",
		artist: "Billie Eilish",
		duration: "3:51",
		dedication: "A gente combina de um jeito que o tempo não explica."
	},
	{
		youtubeId: "GiXHRwNTu_I",
		title: "Trevo (Tu)",
		artist: "ANAVITÓRIA, Tiago Iorc",
		duration: "3:27",
		dedication: "Você é trevo de quatro folhas e manhã de domingo à toa."
	},
	{
		youtubeId: "2Vv-BfVoq4g",
		title: "Perfect",
		artist: "Ed Sheeran",
		duration: "4:39",
		dedication: "Você já era perfeita antes de eu ter coragem de dizer."
	}
];
function youtubeThumb(id) {
	return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}
function youtubeEmbed(id, autoplay) {
	const params = new URLSearchParams({
		rel: "0",
		modestbranding: "1",
		playsinline: "1",
		color: "white"
	});
	if (autoplay) params.set("autoplay", "1");
	return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}
function MusicSection() {
	const [active, setActive] = (0, import_react.useState)(0);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const song = SONGS[active];
	const select = (index) => {
		setActive(index);
		setPlaying(true);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "musicas",
		className: "relative px-5 py-24 sm:px-8 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-[0.72rem] font-medium uppercase tracking-[0.32em] text-rose",
					children: "Cinco canções"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-[clamp(2.2rem,6vw,4.2rem)] font-medium leading-[1.02] tracking-[-0.03em] text-cream",
					children: "A trilha do nosso tempo"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md font-sans text-base leading-relaxed text-muted",
					children: "Cinco músicas que soam como a gente. Toque uma — e leia o porquê de ela estar aqui."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-10 overflow-hidden rounded-[28px] border border-border bg-surface shadow-[var(--shadow-soft)] sm:rounded-[32px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-video bg-bg-deep",
						children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							title: `${song.title} — ${song.artist}`,
							src: youtubeEmbed(song.youtubeId, true),
							allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
							allowFullScreen: true,
							className: "absolute inset-0 h-full w-full"
						}, song.youtubeId) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setPlaying(true),
							className: "group absolute inset-0",
							"aria-label": `Tocar ${song.title}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: youtubeThumb(song.youtubeId),
									alt: "",
									className: "h-full w-full object-cover opacity-80 transition-opacity duration-200 group-hover:opacity-100"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-[color-mix(in_oklab,var(--color-bg)_35%,transparent)]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cream text-ink transition-transform duration-150 group-hover:scale-105 group-active:scale-[0.96]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
										className: "ml-0.5 size-7 fill-ink",
										strokeWidth: 1.5
									})
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-4 px-5 py-5 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl leading-tight text-cream",
								children: song.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-sans text-sm text-muted",
								children: song.artist
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-md font-display text-base italic leading-snug text-blush",
								children: song.dedication
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `https://www.youtube.com/watch?v=${song.youtubeId}`,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-muted transition-colors duration-150 hover:text-cream",
							"aria-label": "Abrir no YouTube",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, {
								className: "size-4",
								strokeWidth: 1.75
							})
						})]
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-2",
				children: SONGS.map((item, i) => {
					const isActive = i === active;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => select(i),
						className: cn("flex w-full min-h-14 items-center gap-4 rounded-2xl border px-3 py-3 text-left transition-[background-color,border-color,transform] duration-150 ease-out active:scale-[0.99] sm:px-4", isActive ? "border-border-strong bg-surface-2" : "border-transparent bg-transparent hover:bg-surface"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative size-14 shrink-0 overflow-hidden rounded-xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: youtubeThumb(item.youtubeId),
									alt: "",
									className: "h-full w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute inset-0 flex items-center justify-center bg-[color-mix(in_oklab,var(--color-bg)_28%,transparent)]",
									children: isActive && playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {
										className: "size-4 text-cream",
										strokeWidth: 1.75
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
										className: "size-4 text-cream",
										strokeWidth: 1.75
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block truncate font-sans text-sm font-medium text-cream",
									children: item.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 block truncate font-sans text-xs text-muted",
									children: item.artist
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "shrink-0 font-sans text-xs tabular-nums text-subtle",
								children: item.duration
							})
						]
					}) }, item.youtubeId);
				})
			})]
		})
	});
}
function prefersReducedMotion() {
	return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function Petals() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = ref.current;
		if (!canvas || prefersReducedMotion()) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let raf = 0;
		let running = true;
		const petals = [];
		const resize = () => {
			const dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.floor(window.innerWidth * dpr);
			canvas.height = Math.floor(window.innerHeight * dpr);
			canvas.style.width = `${window.innerWidth}px`;
			canvas.style.height = `${window.innerHeight}px`;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
		};
		const spawn = (partial = false) => ({
			x: Math.random() * window.innerWidth,
			y: partial ? Math.random() * window.innerHeight : -20,
			r: 5 + Math.random() * 9,
			s: .35 + Math.random() * .7,
			a: Math.random() * Math.PI * 2,
			v: .4 + Math.random() * .9,
			w: .006 + Math.random() * .012,
			hue: 340 + Math.random() * 18
		});
		const count = window.innerWidth < 640 ? 18 : 32;
		for (let i = 0; i < count; i++) petals.push(spawn(true));
		const draw = (p) => {
			ctx.save();
			ctx.translate(p.x, p.y);
			ctx.rotate(p.a);
			ctx.scale(1, .62);
			const g = ctx.createRadialGradient(0, 0, 0, 0, 0, p.r);
			g.addColorStop(0, `hsla(${p.hue}, 48%, 62%, 0.72)`);
			g.addColorStop(.7, `hsla(${p.hue}, 55%, 38%, 0.5)`);
			g.addColorStop(1, `hsla(${p.hue}, 50%, 22%, 0)`);
			ctx.fillStyle = g;
			ctx.beginPath();
			ctx.ellipse(0, 0, p.r, p.r * 1.15, 0, 0, Math.PI * 2);
			ctx.fill();
			ctx.restore();
		};
		const tick = () => {
			if (!running) return;
			ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
			for (const p of petals) {
				p.y += p.v * p.s;
				p.x += Math.sin(p.a) * .45;
				p.a += p.w;
				if (p.y - p.r > window.innerHeight) Object.assign(p, spawn(false));
				draw(p);
			}
			raf = requestAnimationFrame(tick);
		};
		const onVis = () => {
			if (document.hidden) {
				running = false;
				cancelAnimationFrame(raf);
			} else {
				running = true;
				raf = requestAnimationFrame(tick);
			}
		};
		resize();
		window.addEventListener("resize", resize);
		document.addEventListener("visibilitychange", onVis);
		raf = requestAnimationFrame(tick);
		return () => {
			running = false;
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", resize);
			document.removeEventListener("visibilitychange", onVis);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref,
		"aria-hidden": "true",
		className: "pointer-events-none fixed inset-0 z-30 h-full w-full"
	});
}
/** Namoro começou em 7 de novembro de 2025 (America/Sao_Paulo). */
var RELATIONSHIP_START = /* @__PURE__ */ new Date("2025-11-07T00:00:00-03:00");
/** Encontro nas férias de dezembro de 2026. */
var REUNION_AT = /* @__PURE__ */ new Date("2026-12-20T00:00:00-03:00");
function daysInPrevMonth(from) {
	return new Date(from.getFullYear(), from.getMonth(), 0).getDate();
}
/** Diferença calendário-consciente entre duas instantes (end >= start). */
function calendarDiff(start, end) {
	if (end.getTime() <= start.getTime()) return {
		years: 0,
		months: 0,
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	};
	let years = end.getFullYear() - start.getFullYear();
	let months = end.getMonth() - start.getMonth();
	let days = end.getDate() - start.getDate();
	let hours = end.getHours() - start.getHours();
	let minutes = end.getMinutes() - start.getMinutes();
	let seconds = end.getSeconds() - start.getSeconds();
	if (seconds < 0) {
		seconds += 60;
		minutes -= 1;
	}
	if (minutes < 0) {
		minutes += 60;
		hours -= 1;
	}
	if (hours < 0) {
		hours += 24;
		days -= 1;
	}
	if (days < 0) {
		days += daysInPrevMonth(end);
		months -= 1;
	}
	if (months < 0) {
		months += 12;
		years -= 1;
	}
	return {
		years,
		months,
		days,
		hours,
		minutes,
		seconds
	};
}
function pad2(n) {
	return n.toString().padStart(2, "0");
}
var UNIT_LABELS = [
	{
		key: "years",
		singular: "ano",
		plural: "anos"
	},
	{
		key: "months",
		singular: "mês",
		plural: "meses"
	},
	{
		key: "days",
		singular: "dia",
		plural: "dias"
	},
	{
		key: "hours",
		singular: "hora",
		plural: "horas"
	},
	{
		key: "minutes",
		singular: "minuto",
		plural: "minutos"
	},
	{
		key: "seconds",
		singular: "segundo",
		plural: "segundos"
	}
];
var EMPTY$1 = {
	years: 0,
	months: 0,
	days: 0,
	hours: 0,
	minutes: 0,
	seconds: 0
};
function remaining() {
	const now = /* @__PURE__ */ new Date();
	if (now.getTime() >= REUNION_AT.getTime()) return {
		arrived: true,
		units: EMPTY$1
	};
	return {
		arrived: false,
		units: calendarDiff(now, REUNION_AT)
	};
}
function ReunionSection() {
	const [state, setState] = (0, import_react.useState)({
		arrived: false,
		units: EMPTY$1
	});
	(0, import_react.useEffect)(() => {
		setState(remaining());
		const id = window.setInterval(() => setState(remaining()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	const countdownUnits = UNIT_LABELS.filter((u) => u.key !== "years");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "encontro",
		className: "relative isolate overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid min-h-[85dvh] lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative order-2 min-h-[42vh] lg:order-2 lg:min-h-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/reunion.jpg",
					alt: "",
					className: "absolute inset-0 h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,color-mix(in_oklab,var(--color-bg)_55%,transparent)_100%)] lg:bg-[linear-gradient(90deg,color-mix(in_oklab,var(--color-bg)_55%,transparent),transparent_45%)]" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative order-1 flex flex-col justify-center bg-bg px-5 py-20 sm:px-10 sm:py-24 lg:order-1 lg:px-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-[0.72rem] font-medium uppercase tracking-[0.32em] text-blush",
						children: "Férias · dezembro de 2026"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 max-w-xl font-display text-[clamp(2.2rem,5.4vw,4.2rem)] font-medium leading-[1.02] tracking-[-0.03em] text-cream",
						children: state.arrived ? "O dia chegou." : "Falta tão pouco para o nosso encontro."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-md font-display text-xl italic leading-snug text-cream-soft sm:text-2xl",
						children: "Nas férias de dezembro a gente deixa a tela e vira presença. Eu já estou a caminho — segundo a segundo."
					}),
					!state.arrived && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-10 grid grid-cols-2 gap-2 sm:grid-cols-5 sm:gap-3",
						children: countdownUnits.map((unit) => {
							const value = state.units[unit.key];
							const label = value === 1 ? unit.singular : unit.plural;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-2xl border border-border bg-surface px-3 py-4 text-center sm:rounded-3xl sm:px-3 sm:py-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-display text-[clamp(1.7rem,4vw,2.4rem)] font-medium leading-none tracking-[-0.04em] text-cream tabular-nums",
									children: unit.key === "months" || unit.key === "days" ? value : pad2(value)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block font-sans text-[0.6rem] font-medium uppercase tracking-[0.16em] text-blush",
									children: label
								})]
							}, unit.key);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-12 max-w-md font-display text-lg leading-relaxed text-muted",
						children: "Até lá, esta página fica acesa. Um relógio, uma carta, cinco músicas — e você, no meio de tudo."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 font-display text-3xl italic text-blush",
						children: "Para você."
					})
				]
			})]
		})
	});
}
var LINKS = [
	{
		href: "#inicio",
		label: "Início"
	},
	{
		href: "#tempo",
		label: "Tempo"
	},
	{
		href: "#carta",
		label: "Carta"
	},
	{
		href: "#musicas",
		label: "Músicas"
	},
	{
		href: "#encontro",
		label: "Encontro"
	}
];
function SiteNav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("#inicio");
	(0, import_react.useEffect)(() => {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-200", scrolled ? "border-b border-border bg-[color-mix(in_oklab,var(--color-bg)_86%,transparent)] backdrop-blur-md" : "border-b border-transparent bg-transparent"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6",
			"aria-label": "Seções da carta",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#inicio",
				className: "font-display text-lg italic tracking-tight text-cream sm:text-xl",
				children: "Para você"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex items-center gap-1 overflow-x-auto sm:gap-2",
				children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					"data-active": active === link.href,
					className: "nav-link inline-flex min-h-11 items-center px-2 font-sans text-[0.62rem] font-medium uppercase tracking-[0.12em] text-muted hover:text-cream sm:px-3 sm:text-xs sm:tracking-[0.16em]",
					children: link.label
				}) }, link.href))
			})]
		})
	});
}
var EMPTY = {
	years: 0,
	months: 0,
	days: 0,
	hours: 0,
	minutes: 0,
	seconds: 0
};
function nowUnits() {
	return calendarDiff(RELATIONSHIP_START, /* @__PURE__ */ new Date());
}
function TogetherTimer() {
	const [units, setUnits] = (0, import_react.useState)(EMPTY);
	(0, import_react.useEffect)(() => {
		setUnits(nowUnits());
		const id = window.setInterval(() => setUnits(nowUnits()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "tempo",
		className: "relative px-5 py-24 sm:px-8 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-sans text-[0.72rem] font-medium uppercase tracking-[0.32em] text-rose",
					children: "Desde 7 de novembro de 2025"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-3xl font-display text-[clamp(2.2rem,6vw,4.4rem)] font-medium leading-[1.02] tracking-[-0.03em] text-cream",
					children: "O tempo da gente, ao vivo"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl font-sans text-base leading-relaxed text-muted",
					children: "Cada número abaixo é real. Atualiza a cada segundo — porque o nosso namoro não é uma data parada. É agora."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4",
					children: UNIT_LABELS.map((unit, i) => {
						const value = units[unit.key];
						const label = value === 1 ? unit.singular : unit.plural;
						const padded = unit.key === "years" || unit.key === "months" || unit.key === "days" ? String(value) : pad2(value);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-2xl border border-border bg-surface px-4 py-5 sm:rounded-3xl sm:px-6 sm:py-7",
							style: { animation: `fade-up 560ms cubic-bezier(0.22, 1, 0.36, 1) ${i * 50}ms both` },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-display text-[clamp(2.4rem,7vw,4.1rem)] font-medium leading-none tracking-[-0.04em] text-cream tabular-nums",
								children: padded
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-3 block font-sans text-[0.68rem] font-medium uppercase tracking-[0.22em] text-blush",
								children: label
							})]
						}, unit.key);
					})
				})
			]
		})
	});
}
var OPEN_KEY = "para-voce-carta-aberta";
function wasOpened() {
	try {
		return sessionStorage.getItem(OPEN_KEY) === "1";
	} catch {
		return false;
	}
}
function GiftSite() {
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (wasOpened()) setOpen(true);
	}, []);
	const handleOpen = (0, import_react.useCallback)(() => {
		try {
			sessionStorage.setItem(OPEN_KEY, "1");
		} catch {}
		setOpen(true);
	}, []);
	if (!open) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grain-overlay" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EnvelopeGate, { onOpen: handleOpen })] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grain-overlay" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Petals, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TogetherTimer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LetterSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MusicSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReunionSection, {})
		] })
	] });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiftSite, {});
}
//#endregion
export { Home as component };
