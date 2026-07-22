import type { GuessMode } from "../types/game";

const categoryMultipliers: Record<GuessMode, number> = {
  footballer: 1.0,
  movieCharacter: 1.0,
  gameCharacter: 1.1,
  nbaStar: 1.2,
  historicalFigure: 1.5,
  musician: 1.2,
};

export const hintCosts: Record<GuessMode, Record<string, number>> = {
  footballer: {
    identity: 8,
    nationality: 5,
    positions: 5,
    birthDate: 10,
    teams: 15,
    skills: 25,
  },

  gameCharacter: {
    game: 10,
    appearance: 15,
    world: 20,
    features: 25,
  },

  historicalFigure: {
    period: 5,
    region: 10,
    role: 10,
    events: 20,
    features: 25,
  },

  movieCharacter: {
    role: 10,
    appearance: 15,
    movie: 20,
    features: 25,
  },

  nbaStar: {
    positions: 5,
    nationality: 10,
    teams: 15,
    skills: 25,
  },

  musician: {
    style: 5,
    origin: 10,
    role: 10,
    features: 25,
  },
};

export const calculateScore = (
  mode: GuessMode,
  openedHintKeys: string[]
) => {
  let totalPenalty = 0;

  openedHintKeys.forEach((key) => {
    if (key === "bigHint") {
      totalPenalty += 50;
      return;
    }

    const cost = hintCosts[mode]?.[key] || 10;
    totalPenalty += cost;
  });

  const baseScore = Math.max(100 - totalPenalty, 30);

  const multiplier = categoryMultipliers[mode] || 1.0;

  return Math.round(baseScore * multiplier);
};
