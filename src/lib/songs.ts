export type Song = {
  youtubeId: string;
  title: string;
  artist: string;
  duration: string;
};

export const SONGS: Song[] = [
  {
    youtubeId: "o_1aF54DO60",
    title: "Young And Beautiful",
    artist: "Lana Del Rey",
    duration: "3:59",
  },
  {
    youtubeId: "XSYLQfqpFiI",
    title: "Put Your Records On (Sped Up)",
    artist: "Hiko",
    duration: "2:44",
  },
  {
    youtubeId: "b3HeLs8Yosw",
    title: "You Da One (Album Version)",
    artist: "Rihanna",
    duration: "3:28",
  },
  {
    youtubeId: "XYLjGaw7MNA",
    title: "You Spin Me Round (Like a Record)",
    artist: "The Chipmunks",
    duration: "3:13",
  },
  {
    youtubeId: "HhoATZ1Imtw",
    title: "Genius",
    artist: "Labrinth, Sia, Diplo (LSD)",
    duration: "3:43",
  },
  {
    youtubeId: "iyI9RMkEzbQ",
    title: "Ao Vivo E À Cores",
    artist: "Matheus & Kauan, Anitta",
    duration: "3:31",
  },
  {
    youtubeId: "diBO0gMuTXo",
    title: "Hooligan",
    artist: "BTS",
    duration: "4:04",
  },
  {
    youtubeId: "e7HO62Hmkg4",
    title: "Obsessed (feat. Mariah Carey)",
    artist: "Gucci Mane",
    duration: "4:31",
  },
  {
    youtubeId: "2NC8of7kRRY",
    title: "Sem Maldade",
    artist: "Lunaughty",
    duration: "2:22",
  },
  {
    youtubeId: "AzxlPJEnLMQ",
    title: "Regras",
    artist: "Nivy, Plvco",
    duration: "2:04",
  },
  {
    youtubeId: "b4iVv91Z6lY",
    title: "Swim",
    artist: "BTS",
    duration: "4:04",
  },
];

export function youtubeThumb(id: string) {
  return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
}
