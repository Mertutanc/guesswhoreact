export type GuessMode =
  | "footballer"
  | "gameCharacter"
  | "movieCharacter"
  | "nbaStar"
  | "historicalFigure"
  | "musician";

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
  tags?: string[];
};

export type GameStatus = "playing" | "won" | "passed";
