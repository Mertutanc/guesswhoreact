import { useEffect, useMemo, useState } from "react";
import "./App.css";

import { gameModes } from "./data/maindata/gamemodes";
import { guessItems } from "./data/maindata";
import { normalizeText } from "./games/normalizeText";
import { calculateScore } from "./games/scoring";

import type { GameStatus, GuessItem, GuessMode } from "./types/game";

type PlayKind = "classic" | "anagram" | "timeAttack";

type SubModeOption = {
  key: string;
  label: string;
  emoji: string;
  description: string;
  playKind: PlayKind;
  tags?: string[];
};

type RoundHistoryItem = {
  id: string;
  name: string;
  modeLabel: string;
  subModeLabel: string;
  status: "won" | "passed";
  score: number;
};

type ScoreType = "classic" | "timeAttack" | "mixed";

type LeaderboardRecord = {
  id: string;
  initials: string;
  totalScore: number;
  gamesPlayed: number;
  correctAnswers: number;
  passedAnswers: number;
  averageScore: number;
  bestStreak: number;
  noHintCorrectAnswers: number;
  normalHintsUsed: number;
  bigHintsUsed: number;
  modesPlayed: string[];
  categoriesPlayed: GuessMode[];
  scoreType: ScoreType;
  date: string;
};

type LeaderboardTypeFilter = "all" | ScoreType;
type LeaderboardCategoryFilter = "all" | GuessMode;

const LEADERBOARD_STORAGE_KEY = "guesswho-web-leaderboard-v2";
const LEGACY_LEADERBOARD_STORAGE_KEY = "guesswho-leaderboard";
const TIME_ATTACK_SECONDS = 120;
const NO_HINT_BONUS = 20;

const modeLabels: Record<GuessMode, string> = {
  footballer: "Futbolcu",
  gameCharacter: "Oyun Karakteri",
  movieCharacter: "Film Karakteri",
  nbaStar: "NBA Yıldızı",
  historicalFigure: "Tarihi Kişi",
};

const modeShortLabels: Record<GuessMode, string> = {
  footballer: "Futbol",
  gameCharacter: "Oyun",
  movieCharacter: "Film",
  nbaStar: "NBA",
  historicalFigure: "Tarih",
};

const subModesByMode: Record<GuessMode, SubModeOption[]> = {
  footballer: [
    {
      key: "classic",
      label: "Klasik Mod",
      emoji: "⚽",
      description: "Tüm futbolcular karışık gelir.",
      playKind: "classic",
    },
    {
      key: "turkishLegends",
      label: "Türk Efsaneleri",
      emoji: "🇹🇷",
      description: "Türkiye futbolunun unutulmaz isimleri.",
      playKind: "classic",
      tags: ["football:turkishLegend"],
    },
    {
      key: "foreignLegends",
      label: "Yabancı Efsaneler",
      emoji: "🌍",
      description: "Dünya futbolunun klasik yıldızları.",
      playKind: "classic",
      tags: ["football:foreignLegend"],
    },
    {
      key: "activePlayers",
      label: "Aktif Futbolcular",
      emoji: "🔥",
      description: "Güncel dönemin yıldız futbolcuları.",
      playKind: "classic",
      tags: ["football:active"],
    },
    {
      key: "anagram",
      label: "Anagram",
      emoji: "🔤",
      description: "İsim karışık verilir, futbolcuyu çözersin.",
      playKind: "anagram",
    },
    {
      key: "timeAttack",
      label: "Zamana Karşı",
      emoji: "⏱️",
      description: "120 saniyede en yüksek futbol skorunu yap.",
      playKind: "timeAttack",
    },
  ],
  movieCharacter: [
    {
      key: "classic",
      label: "Klasik Mod",
      emoji: "🎬",
      description: "Tüm film karakterleri karışık gelir.",
      playKind: "classic",
    },
    {
      key: "turkishMovies",
      label: "Türk Film Karakterleri",
      emoji: "🇹🇷",
      description: "Yeşilçam ve Türk sinemasından karakterler.",
      playKind: "classic",
      tags: ["movie:turkish"],
    },
    {
      key: "foreignMovies",
      label: "Yabancı Film Karakterleri",
      emoji: "🌍",
      description: "Global sinema ve popüler film karakterleri.",
      playKind: "classic",
      tags: ["movie:foreign"],
    },
    {
      key: "anagram",
      label: "Anagram",
      emoji: "🔤",
      description: "Karakter adı karışık verilir, cevabı çözersin.",
      playKind: "anagram",
    },
    {
      key: "timeAttack",
      label: "Zamana Karşı",
      emoji: "⏱️",
      description: "120 saniyede en çok film karakterini bil.",
      playKind: "timeAttack",
    },
  ],
  gameCharacter: [
    {
      key: "classic",
      label: "Klasik Mod",
      emoji: "🎮",
      description: "Tüm oyun karakterleri karışık gelir.",
      playKind: "classic",
    },
    {
      key: "anagram",
      label: "Anagram",
      emoji: "🔤",
      description: "Karakter adı karışık verilir, cevabı çözersin.",
      playKind: "anagram",
    },
    {
      key: "timeAttack",
      label: "Zamana Karşı",
      emoji: "⏱️",
      description: "120 saniyede en çok oyun karakterini bil.",
      playKind: "timeAttack",
    },
  ],
  nbaStar: [
    {
      key: "classic",
      label: "Klasik Mod",
      emoji: "🏀",
      description: "Tüm NBA yıldızları karışık gelir.",
      playKind: "classic",
    },
    {
      key: "legends",
      label: "NBA Efsaneleri",
      emoji: "🐐",
      description: "Basketbol tarihinin unutulmaz yıldızları.",
      playKind: "classic",
      tags: ["nba:legend"],
    },
    {
      key: "activePlayers",
      label: "Aktif Oyuncular",
      emoji: "🔥",
      description: "Güncel dönemin NBA yıldızları.",
      playKind: "classic",
      tags: ["nba:active"],
    },
    {
      key: "anagram",
      label: "Anagram",
      emoji: "🔤",
      description: "Oyuncu adı karışık verilir, cevabı çözersin.",
      playKind: "anagram",
    },
    {
      key: "timeAttack",
      label: "Zamana Karşı",
      emoji: "⏱️",
      description: "120 saniyede en çok NBA yıldızını bil.",
      playKind: "timeAttack",
    },
  ],
  historicalFigure: [
    {
      key: "classic",
      label: "Klasik Mod",
      emoji: "🏺",
      description: "Tüm tarihi kişiler karışık gelir.",
      playKind: "classic",
    },
    {
      key: "ancientHistory",
      label: "Antik Çağ",
      emoji: "🏛️",
      description: "Antik dünya, krallar, filozoflar ve imparatorlar.",
      playKind: "classic",
      tags: ["historical:ancient"],
    },
    {
      key: "modernHistory",
      label: "Liderler / Savaşlar",
      emoji: "🕰️",
      description: "Krallar, padişahlar, komutanlar, devrimciler ve siyasi liderler.",
      playKind: "classic",
      tags: ["historical:leader", "historical:war", "historical:modern"],
    },
    {
      key: "scienceArtThought",
      label: "Bilim / Sanat / Düşünce",
      emoji: "💡",
      description: "Bilim insanları, sanatçılar, yazarlar ve düşünürler.",
      playKind: "classic",
      tags: ["historical:science", "historical:art", "historical:philosophy"],
    },
    {
      key: "anagram",
      label: "Anagram",
      emoji: "🔤",
      description: "Tarihi kişinin adı karışık verilir, cevabı çözersin.",
      playKind: "anagram",
    },
    {
      key: "timeAttack",
      label: "Zamana Karşı",
      emoji: "⏱️",
      description: "120 saniyede en çok tarihi kişiyi bil.",
      playKind: "timeAttack",
    },
  ],
};

const getSafeId = () => {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
};

const formatTime = (seconds: number) => {
  const safeSeconds = Math.max(0, seconds);
  const minutes = Math.floor(safeSeconds / 60);
  const remainingSeconds = safeSeconds % 60;

  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
};

const getComboMultiplier = (streak: number) => {
  if (streak >= 10) return 2;
  if (streak >= 5) return 1.5;
  if (streak >= 3) return 1.25;

  return 1;
};

const formatComboMultiplier = (multiplier: number) => {
  return `x${multiplier.toFixed(multiplier % 1 === 0 ? 0 : 2)}`;
};

const cleanInitials = (value: string) => {
  return normalizeText(value).replace(/[^a-z0-9]/g, "").slice(0, 3).toUpperCase();
};

const createBigHintText = (name: string) => {
  const words = name.split(" ").filter(Boolean);
  const initials = words.map((word) => word.charAt(0)).join(".") + ".";

  const pattern = words
    .map((word) => {
      const letters = Array.from(word);

      return letters
        .map((letter, index) => (index === 0 ? letter : "_"))
        .join("");
    })
    .join(" ");

  return `Cevap ${words.length} kelime. Baş harfleri: ${initials} / Harf yapısı: ${pattern}`;
};

const createAnagramText = (name: string) => {
  const letters = Array.from(name.replace(/[^\p{L}\p{N}]/gu, ""));

  if (letters.length <= 2) {
    return letters.join(" ").toUpperCase();
  }

  const seed = letters.reduce((total, letter) => total + letter.charCodeAt(0), 0);
  const shuffled = [...letters].sort((a, b) => {
    const aScore = (a.charCodeAt(0) * 17 + seed) % 97;
    const bScore = (b.charCodeAt(0) * 17 + seed) % 97;
    return aScore - bScore;
  });

  const candidate = shuffled.join("");
  const normalizedCandidate = normalizeText(candidate);
  const normalizedName = normalizeText(name).replace(/[^a-z0-9]/g, "");

  if (normalizedCandidate === normalizedName) {
    return [...shuffled].reverse().join(" ").toUpperCase();
  }

  return shuffled.join(" ").toUpperCase();
};

const itemHasAnyTag = (item: GuessItem, tags: string[]) => {
  if (!item.tags || item.tags.length === 0) {
    return false;
  }

  return tags.some((tag) => item.tags?.includes(tag));
};

const getItemsForSubMode = (mode: GuessMode, subMode: SubModeOption) => {
  const itemsInMode = guessItems.filter((item) => item.mode === mode);

  if (!subMode.tags || subMode.tags.length === 0) {
    return itemsInMode;
  }

  const taggedItems = itemsInMode.filter((item) => itemHasAnyTag(item, subMode.tags || []));

  return taggedItems.length > 0 ? taggedItems : itemsInMode;
};

const getRandomItem = (items: GuessItem[], previousItemId?: number) => {
  if (items.length === 0) {
    return null;
  }

  const candidateItems =
    items.length > 1 && previousItemId
      ? items.filter((item) => item.id !== previousItemId)
      : items;

  const randomIndex = Math.floor(Math.random() * candidateItems.length);

  return candidateItems[randomIndex] || null;
};

const createEmptyHints = (item: GuessItem) => {
  const emptyHints: Record<string, string[]> = {};

  item.hintGroups.forEach((group) => {
    emptyHints[group.key] = [];
  });

  return emptyHints;
};

const inferScoreType = (modesPlayed: string[]): ScoreType => {
  const hasTimeAttack = modesPlayed.some((mode) => mode.toLowerCase().includes("zamana"));
  const hasClassic = modesPlayed.some((mode) => !mode.toLowerCase().includes("zamana"));

  if (hasTimeAttack && hasClassic) return "mixed";
  if (hasTimeAttack) return "timeAttack";

  return "classic";
};

const normalizeLeaderboardRecord = (record: Partial<LeaderboardRecord>): LeaderboardRecord => {
  const modesPlayed = Array.isArray(record.modesPlayed) ? record.modesPlayed : [];
  const gamesPlayed = Number(record.gamesPlayed || 0);
  const totalScore = Number(record.totalScore || 0);

  return {
    id: typeof record.id === "string" ? record.id : getSafeId(),
    initials: typeof record.initials === "string" ? record.initials : "YOU",
    totalScore,
    gamesPlayed,
    correctAnswers: Number(record.correctAnswers || 0),
    passedAnswers: Number(record.passedAnswers || 0),
    averageScore: Number(record.averageScore || (gamesPlayed > 0 ? Math.round(totalScore / gamesPlayed) : 0)),
    bestStreak: Number(record.bestStreak || 0),
    noHintCorrectAnswers: Number(record.noHintCorrectAnswers || 0),
    normalHintsUsed: Number(record.normalHintsUsed || 0),
    bigHintsUsed: Number(record.bigHintsUsed || 0),
    modesPlayed,
    categoriesPlayed: Array.isArray(record.categoriesPlayed) ? record.categoriesPlayed : [],
    scoreType: record.scoreType || inferScoreType(modesPlayed),
    date: typeof record.date === "string" ? record.date : new Date().toLocaleDateString("tr-TR"),
  };
};

const getSavedLeaderboard = (): LeaderboardRecord[] => {
  const savedData = localStorage.getItem(LEADERBOARD_STORAGE_KEY) || localStorage.getItem(LEGACY_LEADERBOARD_STORAGE_KEY);

  if (!savedData) {
    return [];
  }

  try {
    const parsed = JSON.parse(savedData) as Partial<LeaderboardRecord>[];

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed
      .map(normalizeLeaderboardRecord)
      .sort((a, b) => b.totalScore - a.totalScore)
      .slice(0, 50);
  } catch {
    return [];
  }
};

const saveLeaderboard = (records: LeaderboardRecord[]) => {
  localStorage.setItem(LEADERBOARD_STORAGE_KEY, JSON.stringify(records.slice(0, 50)));
};

function App() {
  const [selectedSubModeMenu, setSelectedSubModeMenu] = useState<GuessMode | null>(null);
  const [selectedMode, setSelectedMode] = useState<GuessMode | null>(null);
  const [selectedSubMode, setSelectedSubMode] = useState<SubModeOption | null>(null);
  const [currentItem, setCurrentItem] = useState<GuessItem | null>(null);

  const [revealedHints, setRevealedHints] = useState<Record<string, string[]>>({});
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [gameStatus, setGameStatus] = useState<GameStatus>("playing");
  const [isBigHintUsed, setIsBigHintUsed] = useState(false);

  const [totalScore, setTotalScore] = useState(0);
  const [roundScore, setRoundScore] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [passedAnswers, setPassedAnswers] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [noHintCorrectAnswers, setNoHintCorrectAnswers] = useState(0);
  const [normalHintsUsed, setNormalHintsUsed] = useState(0);
  const [bigHintsUsed, setBigHintsUsed] = useState(0);
  const [roundHistory, setRoundHistory] = useState<RoundHistoryItem[]>([]);
  const [playedModes, setPlayedModes] = useState<string[]>([]);
  const [playedCategories, setPlayedCategories] = useState<GuessMode[]>([]);

  const [timeLeft, setTimeLeft] = useState(TIME_ATTACK_SECONDS);
  const [isSessionEnded, setIsSessionEnded] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [scoreSaved, setScoreSaved] = useState(false);
  const [initials, setInitials] = useState("AAA");
  const [leaderboardTypeFilter, setLeaderboardTypeFilter] = useState<LeaderboardTypeFilter>("all");
  const [leaderboardCategoryFilter, setLeaderboardCategoryFilter] = useState<LeaderboardCategoryFilter>("all");
  const [leaderboard, setLeaderboard] = useState<LeaderboardRecord[]>(getSavedLeaderboard);

  const isTimeAttackMode = selectedSubMode?.playKind === "timeAttack";
  const isAnagramMode = selectedSubMode?.playKind === "anagram";

  const currentPool = useMemo<GuessItem[]>(() => {
    if (!selectedMode || !selectedSubMode) {
      return [];
    }

    return getItemsForSubMode(selectedMode, selectedSubMode);
  }, [selectedMode, selectedSubMode]);

  const totalHintCount = useMemo<number>(
    () => Object.values(revealedHints).reduce((total, hints) => total + hints.length, 0),
    [revealedHints]
  );

  const openedHintKeys = useMemo<string[]>(
    () => Object.entries(revealedHints).flatMap(([groupKey, hints]) => hints.map(() => groupKey)),
    [revealedHints]
  );

  const scoreHintKeys = useMemo<string[]>(
    () => (isBigHintUsed ? [...openedHintKeys, "bigHint"] : openedHintKeys),
    [isBigHintUsed, openedHintKeys]
  );

  const baseRoundScore = currentItem ? calculateScore(currentItem.mode, scoreHintKeys) : 0;
  const noHintBonus = currentItem && totalHintCount === 0 && !isBigHintUsed ? NO_HINT_BONUS : 0;
  const nextComboMultiplier = getComboMultiplier(currentStreak + 1);
  const currentScore = Math.round((baseRoundScore + noHintBonus) * nextComboMultiplier);
  const averageScore = gamesPlayed > 0 ? Math.round(totalScore / gamesPlayed) : 0;
  const bigHintText = currentItem ? createBigHintText(currentItem.name) : "";
  const anagramText = currentItem ? createAnagramText(currentItem.name) : "";

  const answerSuggestions = useMemo<GuessItem[]>(() => {
    const normalizedGuessText = normalizeText(guess);

    if (!currentItem || normalizedGuessText.length < 2 || gameStatus !== "playing") {
      return [];
    }

    return currentPool
      .filter((item) => {
        const normalizedName = normalizeText(item.name);
        const normalizedAnswers = item.answers.map(normalizeText);
        const isMatchingName = normalizedName.includes(normalizedGuessText);
        const isMatchingAnswer = normalizedAnswers.some((answer) => answer.includes(normalizedGuessText));
        const isExactSame = normalizedName === normalizedGuessText;

        return (isMatchingName || isMatchingAnswer) && !isExactSame;
      })
      .slice(0, 8);
  }, [currentItem, currentPool, gameStatus, guess]);

  const filteredLeaderboard = useMemo<LeaderboardRecord[]>(() => {
    return leaderboard.filter((record) => {
      const typeMatches = leaderboardTypeFilter === "all" || record.scoreType === leaderboardTypeFilter;
      const categoryMatches =
        leaderboardCategoryFilter === "all" || record.categoriesPlayed.includes(leaderboardCategoryFilter);

      return typeMatches && categoryMatches;
    });
  }, [leaderboard, leaderboardCategoryFilter, leaderboardTypeFilter]);

  useEffect(() => {
    if (!isTimeAttackMode || isSessionEnded || !currentItem) {
      return;
    }

    if (timeLeft <= 0) {
      setGameStatus("passed");
      setMessage("Süre bitti! Skorunu kaydet.");
      setIsSessionEnded(true);
      setIsLeaderboardOpen(false);
      return;
    }

    const timer = window.setInterval(() => {
      setTimeLeft((previous) => Math.max(0, previous - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [currentItem, isSessionEnded, isTimeAttackMode, timeLeft]);

  const openSubModeMenu = (mode: GuessMode) => {
    setSelectedSubModeMenu(mode);
    setMessage("");
    setIsLeaderboardOpen(false);
  };

  const startRound = (mode: GuessMode, subMode: SubModeOption, previousItemId?: number) => {
    const items = getItemsForSubMode(mode, subMode);
    const randomItem = getRandomItem(items, previousItemId);

    if (!randomItem) {
      setMessage("Bu mod için uygun içerik bulunamadı.");
      return;
    }

    setSelectedMode(mode);
    setSelectedSubMode(subMode);
    setSelectedSubModeMenu(null);
    setCurrentItem(randomItem);
    setRevealedHints(createEmptyHints(randomItem));
    setGuess("");
    setMessage("");
    setGameStatus("playing");
    setIsBigHintUsed(false);
    setRoundScore(0);
    setIsSessionEnded(false);
    setIsLeaderboardOpen(false);
    setScoreSaved(false);

    if (subMode.playKind === "timeAttack" && !currentItem) {
      setTimeLeft(TIME_ATTACK_SECONDS);
    }
  };

  const nextRound = () => {
    if (!selectedMode || !selectedSubMode) {
      return;
    }

    startRound(selectedMode, selectedSubMode, currentItem?.id);
  };

  const goToMenu = () => {
    setSelectedSubModeMenu(null);
    setSelectedMode(null);
    setSelectedSubMode(null);
    setCurrentItem(null);
    setRevealedHints({});
    setGuess("");
    setMessage("");
    setGameStatus("playing");
    setIsBigHintUsed(false);
    setRoundScore(0);
  };

  const resetSession = () => {
    setSelectedSubModeMenu(null);
    setSelectedMode(null);
    setSelectedSubMode(null);
    setCurrentItem(null);
    setRevealedHints({});
    setGuess("");
    setMessage("");
    setGameStatus("playing");
    setIsBigHintUsed(false);
    setTotalScore(0);
    setRoundScore(0);
    setGamesPlayed(0);
    setCorrectAnswers(0);
    setPassedAnswers(0);
    setCurrentStreak(0);
    setBestStreak(0);
    setNoHintCorrectAnswers(0);
    setNormalHintsUsed(0);
    setBigHintsUsed(0);
    setRoundHistory([]);
    setPlayedModes([]);
    setPlayedCategories([]);
    setTimeLeft(TIME_ATTACK_SECONDS);
    setIsSessionEnded(false);
    setIsLeaderboardOpen(false);
    setScoreSaved(false);
  };

  const endSession = () => {
    setIsSessionEnded(true);
    setIsLeaderboardOpen(false);
    setMessage("");
  };

  const saveCurrentScore = () => {
    if (gamesPlayed <= 0 || scoreSaved) {
      return;
    }

    const cleanName = cleanInitials(initials) || "AAA";
    const uniqueModes: string[] = Array.from(new Set(playedModes));
    const uniqueCategories: GuessMode[] = Array.from(new Set(playedCategories));
    const scoreType = inferScoreType(uniqueModes);

    const newRecord: LeaderboardRecord = {
      id: getSafeId(),
      initials: cleanName,
      totalScore,
      gamesPlayed,
      correctAnswers,
      passedAnswers,
      averageScore,
      bestStreak,
      noHintCorrectAnswers,
      normalHintsUsed,
      bigHintsUsed,
      modesPlayed: uniqueModes,
      categoriesPlayed: uniqueCategories,
      scoreType,
      date: new Date().toLocaleDateString("tr-TR"),
    };

    const updatedLeaderboard = [...leaderboard, newRecord]
      .sort((a, b) => b.totalScore - a.totalScore)
      .slice(0, 50);

    setLeaderboard(updatedLeaderboard);
    saveLeaderboard(updatedLeaderboard);
    setScoreSaved(true);
  };

  const revealRandomHint = (groupKey: string) => {
    if (!currentItem || gameStatus !== "playing") {
      return;
    }

    const selectedGroup = currentItem.hintGroups.find((group) => group.key === groupKey);

    if (!selectedGroup) {
      return;
    }

    const allHints = selectedGroup.hints;
    const alreadyRevealed = revealedHints[groupKey] || [];
    const hiddenHints = allHints.filter((hint) => !alreadyRevealed.includes(hint));

    if (hiddenHints.length === 0) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * hiddenHints.length);
    const newHint = hiddenHints[randomIndex];

    setRevealedHints({
      ...revealedHints,
      [groupKey]: [...alreadyRevealed, newHint],
    });
    setNormalHintsUsed((previous) => previous + 1);
    setMessage("");
  };

  const useBigHint = () => {
    if (!currentItem || isBigHintUsed || gameStatus !== "playing") {
      return;
    }

    setIsBigHintUsed(true);
    setBigHintsUsed((previous) => previous + 1);
    setMessage("");
  };

  const addRoundHistory = (item: GuessItem, status: "won" | "passed", score: number) => {
    setRoundHistory((previous) => [
      {
        id: getSafeId(),
        name: item.name,
        modeLabel: item.modeLabel,
        subModeLabel: selectedSubMode?.label || "Klasik Mod",
        status,
        score,
      },
      ...previous,
    ].slice(0, 8));
  };

  const passGame = () => {
    if (!currentItem || gameStatus !== "playing") {
      return;
    }

    setGameStatus("passed");
    setRoundScore(0);
    setGamesPlayed((previous) => previous + 1);
    setPassedAnswers((previous) => previous + 1);
    setCurrentStreak(0);
    setPlayedModes((previous) => [...previous, `${currentItem.modeLabel} / ${selectedSubMode?.label || "Klasik Mod"}`]);
    setPlayedCategories((previous) => [...previous, currentItem.mode]);
    addRoundHistory(currentItem, "passed", 0);
    setMessage(`Pas geçtin. Cevap: ${currentItem.name}`);
  };

  const checkGuess = () => {
    if (!currentItem || gameStatus !== "playing") {
      return;
    }

    if (guess.trim() === "") {
      setMessage("Önce bir tahmin yazmalısın.");
      return;
    }

    const normalizedGuess = normalizeText(guess);
    const possibleCorrectAnswers = [currentItem.name, ...currentItem.answers];
    const isCorrect = possibleCorrectAnswers.some((answer) => normalizeText(answer) === normalizedGuess);

    if (isCorrect) {
      const finalScore = currentScore;
      const newStreak = currentStreak + 1;

      setGameStatus("won");
      setRoundScore(finalScore);
      setTotalScore((previous) => previous + finalScore);
      setGamesPlayed((previous) => previous + 1);
      setCorrectAnswers((previous) => previous + 1);
      setCurrentStreak(newStreak);
      setBestStreak((previous) => Math.max(previous, newStreak));
      setPlayedModes((previous) => [...previous, `${currentItem.modeLabel} / ${selectedSubMode?.label || "Klasik Mod"}`]);
      setPlayedCategories((previous) => [...previous, currentItem.mode]);

      if (totalHintCount === 0 && !isBigHintUsed) {
        setNoHintCorrectAnswers((previous) => previous + 1);
      }

      addRoundHistory(currentItem, "won", finalScore);
      setMessage(`Doğru! ${currentItem.name} cevabını ${totalHintCount} ipucuyla bildin.`);
    } else {
      setMessage("Yanlış tahmin. Bir ipucu daha alıp tekrar dene.");
    }
  };

  if (isLeaderboardOpen) {
    return (
      <main className="page">
        <section className="game-card leaderboard-page-card">
          <div className="screen-kicker">ARCADE RECORDS</div>
          <h1 className="title">🏆 Skor Tablosu</h1>
          <p className="subtitle">Filtrele, ilk 10 skorunu gör, sonra yeni seriye bas.</p>

          <div className="filter-panel">
            <div className="filter-row">
              {(["all", "classic", "timeAttack", "mixed"] as LeaderboardTypeFilter[]).map((filter) => (
                <button
                  key={filter}
                  className={leaderboardTypeFilter === filter ? "filter-chip active" : "filter-chip"}
                  onClick={() => setLeaderboardTypeFilter(filter)}
                >
                  {filter === "all" ? "Genel" : filter === "classic" ? "Klasik" : filter === "timeAttack" ? "Time Attack" : "Karışık"}
                </button>
              ))}
            </div>

            <div className="filter-row">
              {(["all", "footballer", "movieCharacter", "gameCharacter", "nbaStar", "historicalFigure"] as LeaderboardCategoryFilter[]).map((filter) => (
                <button
                  key={filter}
                  className={leaderboardCategoryFilter === filter ? "filter-chip active" : "filter-chip"}
                  onClick={() => setLeaderboardCategoryFilter(filter)}
                >
                  {filter === "all" ? "Tümü" : modeShortLabels[filter]}
                </button>
              ))}
            </div>
          </div>

          {filteredLeaderboard.length > 0 ? (
            <div className="leaderboard-table">
              {filteredLeaderboard.slice(0, 10).map((record, index) => (
                <div className={`leaderboard-table-row rank-${index + 1}`} key={record.id}>
                  <div className="rank-cell">#{index + 1}</div>

                  <div className="player-cell">
                    <strong>{record.initials}</strong>
                    <span>{record.date}</span>
                  </div>

                  <div className="leaderboard-main-score">{record.totalScore}</div>

                  <div className="leaderboard-badges">
                    <span className="score-badge">{record.scoreType === "classic" ? "Klasik" : record.scoreType === "timeAttack" ? "Time Attack" : "Karışık"}</span>
                    {record.categoriesPlayed.slice(0, 2).map((mode) => (
                      <span className="score-badge muted" key={mode}>{modeShortLabels[mode]}</span>
                    ))}
                  </div>

                  <div className="leaderboard-metrics">
                    <span><b>{record.correctAnswers}</b> Doğru</span>
                    <span><b>{record.passedAnswers}</b> Pas</span>
                    <span><b>{record.gamesPlayed}</b> Tur</span>
                    <span><b>{record.bestStreak}</b> Combo</span>
                  </div>

                  <div className="leaderboard-modes">{record.modesPlayed.join(" • ") || "Klasik seri"}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="result-card pass"><p>Bu filtrede skor kaydı yok.</p></div>
          )}

          <div className="result-actions summary-actions">
            {isSessionEnded && <button onClick={() => setIsLeaderboardOpen(false)}>Sonuca Dön</button>}
            <button onClick={resetSession}>Yeni Seri Başlat</button>
          </div>
        </section>
      </main>
    );
  }

  if (isSessionEnded) {
    return (
      <main className="page">
        <section className="game-card session-summary-card">
          <div className="screen-kicker">SESSION COMPLETE</div>
          <div className="end-title">
            <span className="end-flag">🏁</span>
            <h1>Oyun Bitti</h1>
          </div>

          <p className="subtitle">Bu seride topladığın skor ve oyun özeti aşağıda.</p>

          <div className="summary-grid">
            <div className="summary-item"><span>Toplam Skor</span><strong>{totalScore}</strong></div>
            <div className="summary-item"><span>Oynanan Tur</span><strong>{gamesPlayed}</strong></div>
            <div className="summary-item"><span>Doğru Cevap</span><strong>{correctAnswers}</strong></div>
            <div className="summary-item"><span>Pas Geçilen</span><strong>{passedAnswers}</strong></div>
            <div className="summary-item"><span>Ortalama Skor</span><strong>{averageScore}</strong></div>
            <div className="summary-item"><span>En İyi Combo</span><strong>{bestStreak}</strong></div>
          </div>

          {gamesPlayed > 0 && (
            <div className="initials-panel">
              <label htmlFor="initials">3 harfli skor adı</label>
              <div className="initials-row">
                <input
                  id="initials"
                  value={initials}
                  maxLength={3}
                  onChange={(event) => setInitials(cleanInitials(event.target.value))}
                />
                <button onClick={saveCurrentScore} disabled={scoreSaved}>{scoreSaved ? "Kaydedildi" : "Skoru Kaydet"}</button>
              </div>
            </div>
          )}

          <div className="result-actions summary-actions">
            <button onClick={resetSession}>Yeni Seri Başlat</button>
            <button onClick={() => setIsLeaderboardOpen(true)}>Skor Tablosu</button>
          </div>
        </section>
      </main>
    );
  }

  if (selectedSubModeMenu && !currentItem) {
    const activeMode = gameModes.find((mode) => mode.key === selectedSubModeMenu);
    const subModes = subModesByMode[selectedSubModeMenu];

    return (
      <main className={`page mode-${selectedSubModeMenu}`}>
        <section className="game-card">
          <div className="top-bar">
            <button className="secondary-button" onClick={() => setSelectedSubModeMenu(null)}>Ana Menü</button>
            <span>{activeMode?.label || modeLabels[selectedSubModeMenu]}</span>
          </div>

          <div className="screen-kicker">SELECT MODE</div>
          <h1 className="title">{activeMode?.emoji} {activeMode?.label}</h1>
          <p className="subtitle">Bir alt mod seç, oyunu web’de arcade panel gibi oyna.</p>

          <div className="submode-grid">
            {subModes.map((subMode) => {
              return (
                <button
                  key={subMode.key}
                  className="submode-button"
                  onClick={() => startRound(selectedSubModeMenu, subMode)}
                >
                  <span className="submode-emoji">{subMode.emoji}</span>
                  <strong>{subMode.label}</strong>
                  <small>{subMode.description}</small>
                </button>
              );
            })}
          </div>
        </section>
      </main>
    );
  }

  if (!currentItem) {
    return (
      <main className="page home-page">
        <section className="game-card home-card">
          <div className="screen-kicker">WEB ARCADE</div>
          <h1 className="title">🧠 GuessWho</h1>
          <p className="subtitle">Mobildeki data ve mod sistemi web’e taşındı. Kategori seç, alt moda gir, seriyi başlat.</p>

          {gamesPlayed > 0 && (
            <div className="mini-score-card">
              Seri Skoru: <strong>{totalScore}</strong> / Oynanan Tur: <strong>{gamesPlayed}</strong> / Combo: <strong>{currentStreak}</strong>
            </div>
          )}

          {message && <div className="result-card error"><p>{message}</p></div>}

          <div className="mode-grid">
            {gameModes.map((mode) => (
              <button key={mode.key} className={`mode-button mode-card-${mode.key}`} onClick={() => openSubModeMenu(mode.key)}>
                <div className="mode-image"><span>{mode.emoji}</span></div>
                <div className="mode-content">
                  <strong>{mode.label}</strong>
                  <small>{mode.description}</small>
                </div>
              </button>
            ))}
          </div>

          <div className="support-actions menu-actions">
            {gamesPlayed > 0 && <button className="end-game-button" onClick={endSession}>End Game</button>}
            <button className="secondary-action-button" onClick={() => setIsLeaderboardOpen(true)}>Skor Tablosu</button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className={`page mode-${currentItem.mode}`}>
      <section className="game-card play-card">
        <div className="play-header">
          <button className="secondary-button" onClick={goToMenu}>Ana Menü</button>

          <div className="play-brand">
            <h1 className="title compact-title">🧠 GuessWho</h1>
            <p className="subtitle play-subtitle">İpuçlarını aç, cevabı bul.</p>
          </div>

          <span className="mode-pill">{currentItem.modeLabel} • {selectedSubMode?.label || "Klasik Mod"}</span>
        </div>

        <div className="play-layout">
          <aside className="side-panel score-panel">
            <div className="screen-kicker">SCORE</div>
            <div className="score-big">{totalScore}</div>
            <div className="side-metrics">
              <span><b>{gamesPlayed}</b> Tur</span>
              <span><b>{correctAnswers}</b> Doğru</span>
              <span><b>{passedAnswers}</b> Pas</span>
              <span><b>{currentStreak}</b> Combo</span>
            </div>

            <div className="combo-card">
              <span>Sonraki doğru</span>
              <strong>{formatComboMultiplier(nextComboMultiplier)}</strong>
            </div>

            {isTimeAttackMode && <div className={timeLeft <= 10 ? "timer-card danger" : timeLeft <= 30 ? "timer-card warning" : "timer-card"}>⏱️ {formatTime(timeLeft)}</div>}
          </aside>

          <section className="main-play-panel">
            {isAnagramMode && <div className="anagram-card"><span>Anagram</span><strong>{anagramText}</strong></div>}

            <div className="hint-header">
              <h2>İpucu Seç</h2>
              <span>{totalHintCount} ipucu açıldı • Tur skoru: {currentScore}</span>
            </div>

            <div className="hint-board">
              {currentItem.hintGroups.map((group) => {
                const revealedCount = revealedHints[group.key]?.length || 0;
                const totalCount = group.hints.length;
                const isCompleted = revealedCount === totalCount;
                const hints = revealedHints[group.key] || [];

                return (
                  <div className="hint-column" key={group.key}>
                    <button className="category-button" onClick={() => revealRandomHint(group.key)} disabled={isCompleted || gameStatus !== "playing"}>
                      <span>{group.label}</span>
                      <strong>{revealedCount}/{totalCount}</strong>
                    </button>

                    <div className={hints.length > 0 ? "inline-hint-card" : "inline-hint-card empty"}>
                      {hints.length > 0 ? (
                        <div className="hint-list">
                          {hints.map((hint, index) => <span className="hint-pill" key={`${hint}-${index}`}>{hint}</span>)}
                        </div>
                      ) : (
                        <span className="empty-hint-text">Henüz açılmadı</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {isBigHintUsed && <div className="big-hint-card"><strong>Büyük İpucu</strong><p>{bigHintText}</p></div>}

            <div className="guess-area">
              <div className="autocomplete-wrapper">
                <input
                  type="text"
                  placeholder="Cevabı tahmin et..."
                  value={guess}
                  onChange={(event) => setGuess(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      checkGuess();
                    }
                  }}
                  disabled={gameStatus !== "playing"}
                  autoFocus
                />

                {answerSuggestions.length > 0 && (
                  <div className="suggestion-list">
                    {answerSuggestions.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className="suggestion-item"
                        onClick={() => {
                          setGuess(item.name);
                          setMessage("");
                        }}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button onClick={checkGuess} disabled={gameStatus !== "playing"}>Tahmin Et</button>
            </div>

            <div className="support-actions">
              <button className="big-hint-button" onClick={useBigHint} disabled={isBigHintUsed || gameStatus !== "playing"}>Büyük İpucu -50</button>
              <button className="pass-button" onClick={passGame} disabled={gameStatus !== "playing"}>Pas Geç</button>
              <button className="end-game-button" onClick={endSession}>End Game</button>
            </div>

            {message && (
              <div className={gameStatus === "won" ? "result-card success" : gameStatus === "passed" ? "result-card pass" : "result-card error"}>
                <p>{message}</p>

                {(gameStatus === "won" || gameStatus === "passed") && (
                  <>
                    <h2>Tur Skoru: {gameStatus === "won" ? roundScore : 0}</h2>
                    <p>Toplam Seri Skoru: {totalScore}</p>
                    <p>Cevap: {currentItem.name}</p>

                    <div className="result-actions">
                      <button onClick={nextRound}>{isTimeAttackMode ? "Sonraki Soru" : "Aynı Modda Yeni Oyun"}</button>
                      <button onClick={goToMenu}>Ana Menüye Dön</button>
                      <button onClick={endSession}>End Game</button>
                    </div>
                  </>
                )}
              </div>
            )}
          </section>

          <aside className="side-panel history-panel">
            <div className="screen-kicker">LAST ROUNDS</div>
            {roundHistory.length > 0 ? (
              <div className="round-history-list">
                {roundHistory.map((round) => (
                  <div className={`round-history-item ${round.status}`} key={round.id}>
                    <strong>{round.name}</strong>
                    <span>{round.modeLabel} / {round.subModeLabel}</span>
                    <em>{round.status === "won" ? `+${round.score}` : "PAS"}</em>
                  </div>
                ))}
              </div>
            ) : (
              <p className="empty-side-text">Henüz tur yok.</p>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}

export default App;
