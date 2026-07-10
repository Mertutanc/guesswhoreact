import type { GuessMode } from "../../types/game";

type GameModeCard = {
  key: GuessMode;
  label: string;
  emoji: string;
  description: string;
};

export const gameModes: GameModeCard[] = [
  {
    key: "footballer",
    label: "Futbolcu",
    emoji: "⚽",
    description: "Takım, pozisyon, uyruk ve oyun tarzından futbolcuyu bul.",
  },
  {
    key: "gameCharacter",
    label: "Oyun Karakteri",
    emoji: "🎮",
    description: "Oyun, görünüm ve özelliklerden oyun karakterini bul.",
  },
  {
    key: "movieCharacter",
    label: "Film Karakteri",
    emoji: "🎬",
    description: "Film, görünüm ve karakter özelliklerinden karakteri bul.",
  },
  {
    key: "nbaStar",
    label: "NBA Yıldızı",
    emoji: "🏀",
    description: "Takım, pozisyon ve dönem bilgilerinden yıldızı bul.",
  },
  {
    key: "historicalFigure",
    label: "Tarihi Kişi",
    emoji: "🏛️",
    description: "Dönem, ülke ve olaylardan tarihi kişiyi bul.",
  },
];