import { useState } from "react";
import "./App.css";

import { gameModes } from "./data/maindata/gamemodes";
import { guessItems } from "./data/maindata";
import { normalizeText } from "./games/normalizeText";
import { calculateScore } from "./games/scoring";

import type { GameStatus, GuessItem, GuessMode } from "./types/game";

type LeaderboardRecord = {
  id: string;
  totalScore: number;
  gamesPlayed: number;
  correctAnswers: number;
  passedAnswers: number;
  averageScore: number;
  modesPlayed: string[];
  date: string;
};

const LEADERBOARD_STORAGE_KEY = "guesswho-leaderboard";

const getSavedLeaderboard = (): LeaderboardRecord[] => {
  const savedData = localStorage.getItem(LEADERBOARD_STORAGE_KEY);

  if (!savedData) {
    return [];
  }

  try {
    return JSON.parse(savedData) as LeaderboardRecord[];
  } catch {
    return [];
  }
};

const saveLeaderboard = (records: LeaderboardRecord[]) => {
  localStorage.setItem(LEADERBOARD_STORAGE_KEY, JSON.stringify(records));
};

const createBigHintText = (name: string) => {
  const words = name.split(" ").filter(Boolean);

  const initials = words.map((word) => word.charAt(0)).join(".") + ".";

  const pattern = words
    .map((word) => {
      const letters = Array.from(word);

      return letters
        .map((letter, index) => {
          if (index === 0) {
            return letter;
          }

          return "_";
        })
        .join("");
    })
    .join(" ");

  return `Cevap ${words.length} kelime. Baş harfleri: ${initials} / Harf yapısı: ${pattern}`;
};

function App() {
  const [selectedMode, setSelectedMode] = useState<GuessMode | null>(null);
  const [currentItem, setCurrentItem] = useState<GuessItem | null>(null);

  const [revealedHints, setRevealedHints] = useState<Record<string, string[]>>(
    {}
  );

  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [gameStatus, setGameStatus] = useState<GameStatus>("playing");
  const [isBigHintUsed, setIsBigHintUsed] = useState(false);

  const [totalScore, setTotalScore] = useState(0);
  const [roundScore, setRoundScore] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [passedAnswers, setPassedAnswers] = useState(0);

  const [isSessionEnded, setIsSessionEnded] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);

  const [playedModes, setPlayedModes] = useState<string[]>([]);
  const [leaderboard, setLeaderboard] =
    useState<LeaderboardRecord[]>(getSavedLeaderboard);

  const totalHintCount = Object.values(revealedHints).reduce(
    (total, hints) => total + hints.length,
    0
  );

  const openedHintKeys = Object.entries(revealedHints).flatMap(
    ([groupKey, hints]) => hints.map(() => groupKey)
  );

  const scoreHintKeys = isBigHintUsed
    ? [...openedHintKeys, "bigHint"]
    : openedHintKeys;

  const currentScore = currentItem
    ? calculateScore(currentItem.mode, scoreHintKeys)
    : 0;

  const bigHintText = currentItem ? createBigHintText(currentItem.name) : "";

  const averageScore =
    gamesPlayed > 0 ? Math.round(totalScore / gamesPlayed) : 0;

  const createEmptyHints = (item: GuessItem) => {
    const emptyHints: Record<string, string[]> = {};

    item.hintGroups.forEach((group) => {
      emptyHints[group.key] = [];
    });

    return emptyHints;
  };

  const startGame = (mode: GuessMode) => {
    const itemsInMode: GuessItem[] = guessItems.filter(
      (item: GuessItem) => item.mode === mode
    );

    if (itemsInMode.length === 0) {
      setMessage("Bu kategori için henüz içerik eklenmemiş.");
      return;
    }

    const randomIndex = Math.floor(Math.random() * itemsInMode.length);
    const randomItem = itemsInMode[randomIndex];

    if (!randomItem) {
      setMessage("Bu kategori için uygun içerik bulunamadı.");
      return;
    }

    setSelectedMode(mode);
    setCurrentItem(randomItem);
    setRevealedHints(createEmptyHints(randomItem));
    setGuess("");
    setMessage("");
    setGameStatus("playing");
    setIsBigHintUsed(false);
    setRoundScore(0);
    setIsSessionEnded(false);
    setIsLeaderboardOpen(false);
  };

  const goToMenu = () => {
    setSelectedMode(null);
    setCurrentItem(null);
    setRevealedHints({});
    setGuess("");
    setMessage("");
    setGameStatus("playing");
    setIsBigHintUsed(false);
    setRoundScore(0);
  };

  const resetSession = () => {
    setSelectedMode(null);
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
    setPlayedModes([]);

    setIsSessionEnded(false);
    setIsLeaderboardOpen(false);
  };

  const endSession = () => {
    if (gamesPlayed > 0) {
      const uniqueModes = Array.from(new Set(playedModes));

      const newRecord: LeaderboardRecord = {
        id: crypto.randomUUID(),
        totalScore,
        gamesPlayed,
        correctAnswers,
        passedAnswers,
        averageScore,
        modesPlayed: uniqueModes,
        date: new Date().toLocaleDateString("tr-TR"),
      };

      const updatedLeaderboard = [...leaderboard, newRecord]
        .sort((a, b) => b.totalScore - a.totalScore)
        .slice(0, 10);

      setLeaderboard(updatedLeaderboard);
      saveLeaderboard(updatedLeaderboard);
    }

    setIsSessionEnded(true);
    setIsLeaderboardOpen(false);
    setMessage("");
  };

  const restartGame = () => {
    if (selectedMode) {
      startGame(selectedMode);
    }
  };

  const revealRandomHint = (groupKey: string) => {
    if (!currentItem || gameStatus !== "playing") {
      return;
    }

    const selectedGroup = currentItem.hintGroups.find(
      (group) => group.key === groupKey
    );

    if (!selectedGroup) {
      return;
    }

    const allHints = selectedGroup.hints;
    const alreadyRevealed = revealedHints[groupKey] || [];

    const hiddenHints = allHints.filter(
      (hint) => !alreadyRevealed.includes(hint)
    );

    if (hiddenHints.length === 0) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * hiddenHints.length);
    const newHint = hiddenHints[randomIndex];

    setRevealedHints({
      ...revealedHints,
      [groupKey]: [...alreadyRevealed, newHint],
    });

    setMessage("");
  };

  const useBigHint = () => {
    if (!currentItem || isBigHintUsed || gameStatus !== "playing") {
      return;
    }

    setIsBigHintUsed(true);
    setMessage("");
  };

  const passGame = () => {
    if (!currentItem || gameStatus !== "playing") {
      return;
    }

    setGameStatus("passed");
    setRoundScore(0);
    setGamesPlayed((previous) => previous + 1);
    setPassedAnswers((previous) => previous + 1);
    setPlayedModes((previous) => [...previous, currentItem.modeLabel]);
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

    const isCorrect = possibleCorrectAnswers.some(
      (answer) => normalizeText(answer) === normalizedGuess
    );

    if (isCorrect) {
      setGameStatus("won");
      setRoundScore(currentScore);
      setTotalScore((previous) => previous + currentScore);
      setGamesPlayed((previous) => previous + 1);
      setCorrectAnswers((previous) => previous + 1);
      setPlayedModes((previous) => [...previous, currentItem.modeLabel]);

      setMessage(
        `Doğru! ${currentItem.name} cevabını ${totalHintCount} ipucuyla bildin.`
      );
    } else {
      setMessage("Yanlış tahmin. Bir ipucu daha alıp tekrar dene.");
    }
  };

  const normalizedGuessText = normalizeText(guess);

  const answerSuggestions =
    currentItem && normalizedGuessText.length >= 2 && gameStatus === "playing"
      ? guessItems
          .filter((item: GuessItem) => item.mode === currentItem.mode)
          .filter((item: GuessItem) => {
            const normalizedName = normalizeText(item.name);

            const isMatching = normalizedName.includes(normalizedGuessText);
            const isExactSame = normalizedName === normalizedGuessText;

            return isMatching && !isExactSame;
          })
          .slice(0, 6)
      : [];

  if (isLeaderboardOpen) {
    return (
      <main className="page">
        <section className="game-card leaderboard-page-card">
          <h1 className="title">🏆 Skor Tablosu</h1>

          <p className="subtitle">
            En yüksek toplam skora göre ilk 10 oyun serisi.
          </p>

          {leaderboard.length > 0 ? (
            <div className="leaderboard-table">
              {leaderboard.map((record, index) => (
                <div className="leaderboard-table-row" key={record.id}>
                  <strong>#{index + 1}</strong>

                  <div className="leaderboard-main-score">
                    {record.totalScore} puan
                  </div>

                  <div className="leaderboard-detail">
                    {record.correctAnswers} doğru • {record.passedAnswers} pas •{" "}
                    {record.gamesPlayed} tur
                  </div>

                  <div className="leaderboard-modes">
                    {record.modesPlayed.join(", ")}
                  </div>

                  <em>{record.date}</em>
                </div>
              ))}
            </div>
          ) : (
            <div className="result-card pass">
              <p>Henüz skor kaydı yok.</p>
            </div>
          )}

          <div className="result-actions summary-actions">
            {isSessionEnded && (
              <button onClick={() => setIsLeaderboardOpen(false)}>
                Sonuca Dön
              </button>
            )}

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
          <div className="end-title">
            <span className="end-flag">🏁</span>
            <h1>Oyun Bitti</h1>
          </div>

          <p className="subtitle">
            Bu seride topladığın skor ve oyun özeti aşağıda.
          </p>

          <div className="summary-grid">
            <div className="summary-item">
              <span>Toplam Skor</span>
              <strong>{totalScore}</strong>
            </div>

            <div className="summary-item">
              <span>Oynanan Tur</span>
              <strong>{gamesPlayed}</strong>
            </div>

            <div className="summary-item">
              <span>Doğru Cevap</span>
              <strong>{correctAnswers}</strong>
            </div>

            <div className="summary-item">
              <span>Pas Geçilen</span>
              <strong>{passedAnswers}</strong>
            </div>

            <div className="summary-item">
              <span>Ortalama Skor</span>
              <strong>{averageScore}</strong>
            </div>
          </div>

          <div className="result-actions summary-actions">
            <button onClick={resetSession}>Yeni Seri Başlat</button>

            <button onClick={() => setIsLeaderboardOpen(true)}>
              Skor Tablosu
            </button>
          </div>
        </section>
      </main>
    );
  }

  if (!currentItem) {
    return (
      <main className="page">
        <section className="game-card">
          <h1 className="title">🧠 GuessWho</h1>

          <p className="subtitle">
            Bir kategori seç ve karakteri tahmin etmeye başla.
          </p>

          {gamesPlayed > 0 && (
            <div className="mini-score-card">
              Seri Skoru: <strong>{totalScore}</strong> / Oynanan Tur:{" "}
              <strong>{gamesPlayed}</strong>
            </div>
          )}

          {message && (
            <div className="result-card error">
              <p>{message}</p>
            </div>
          )}

          <div className="mode-grid">
            {gameModes.map((mode) => (
              <button
                key={mode.key}
                className="mode-button"
                onClick={() => startGame(mode.key)}
              >
                <div className="mode-image">
                  <span>{mode.emoji}</span>
                </div>

                <div className="mode-content">
                  <strong>{mode.label}</strong>
                  <small>{mode.description}</small>
                </div>
              </button>
            ))}
          </div>

          {gamesPlayed > 0 && (
            <div className="support-actions menu-actions">
              <button className="end-game-button" onClick={endSession}>
                End Game
              </button>
            </div>
          )}
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <section className="game-card">
        <div className="top-bar">
          <button className="secondary-button" onClick={goToMenu}>
            Ana Menü
          </button>

          <span>
            {currentItem.modeLabel} • Seri Skoru: {totalScore}
          </span>
        </div>

        <h1 className="title">🧠 GuessWho</h1>
        <p className="subtitle">İpuçlarını aç, cevabı bul.</p>

        <div className="hint-header">
          <h2>İpucu Seç</h2>
          <span>{totalHintCount} ipucu açıldı</span>
        </div>

        <div className="hint-board">
          {currentItem.hintGroups.map((group) => {
            const revealedCount = revealedHints[group.key]?.length || 0;
            const totalCount = group.hints.length;
            const isCompleted = revealedCount === totalCount;
            const hints = revealedHints[group.key] || [];

            return (
              <div className="hint-column" key={group.key}>
                <button
                  className="category-button"
                  onClick={() => revealRandomHint(group.key)}
                  disabled={isCompleted || gameStatus !== "playing"}
                >
                  <span>{group.label}</span>
                  <strong>
                    {revealedCount}/{totalCount}
                  </strong>
                </button>

                <div
                  className={
                    hints.length > 0
                      ? "inline-hint-card"
                      : "inline-hint-card empty"
                  }
                >
                  {hints.length > 0 ? (
                    <div className="hint-list">
                      {hints.map((hint, index) => (
                        <span className="hint-pill" key={`${hint}-${index}`}>
                          {hint}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="empty-hint-text">Henüz açılmadı</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {isBigHintUsed && (
          <div className="big-hint-card">
            <strong>Büyük İpucu</strong>
            <p>{bigHintText}</p>
          </div>
        )}

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

          <button onClick={checkGuess} disabled={gameStatus !== "playing"}>
            Tahmin Et
          </button>
        </div>

        <div className="support-actions">
          <button
            className="big-hint-button"
            onClick={useBigHint}
            disabled={isBigHintUsed || gameStatus !== "playing"}
          >
            Büyük İpucu -50
          </button>

          <button
            className="pass-button"
            onClick={passGame}
            disabled={gameStatus !== "playing"}
          >
            Pas Geç
          </button>

          <button className="end-game-button" onClick={endSession}>
            End Game
          </button>
        </div>

        {message && (
          <div
            className={
              gameStatus === "won"
                ? "result-card success"
                : gameStatus === "passed"
                  ? "result-card pass"
                  : "result-card error"
            }
          >
            <p>{message}</p>

            {(gameStatus === "won" || gameStatus === "passed") && (
              <>
                {gameStatus === "won" ? (
                  <h2>Tur Skoru: {roundScore}</h2>
                ) : (
                  <h2>Tur Skoru: 0</h2>
                )}

                <p>Toplam Seri Skoru: {totalScore}</p>
                <p>Cevap: {currentItem.name}</p>

                <div className="result-actions">
                  <button onClick={restartGame}>Aynı Modda Yeni Oyun</button>
                  <button onClick={goToMenu}>Ana Menüye Dön</button>
                  <button onClick={endSession}>End Game</button>
                </div>
              </>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;