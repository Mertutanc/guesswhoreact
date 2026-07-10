export type GuessMode =
  | "footballer"
  | "gameCharacter"
  | "movieCharacter"
  | "nbaStar"
  | "historicalFigure";

export type HintGroup = {
  key: string;
  label: string;
  hints: string[];
};

export type GuessItem = {
  id: number;
  mode: GuessMode;
  modeLabel: string;
  name: string;
  answers: string[];
  hintGroups: HintGroup[];
};

export type GameStatus = "playing" | "won" | "passed";