import type { GuessItem } from "../../types/game";

import { footballers } from "../categories/footballers";
import { gameCharacters } from "../categories/gameCharacters";
import { movieCharacters } from "../categories/movieCharacters";
import { nbaStars } from "../categories/nbastars";
import { historicalFigures } from "../categories/historicalFigure";

export const guessItems: GuessItem[] = [
  ...footballers,
  ...gameCharacters,
  ...movieCharacters,
  ...nbaStars,
  ...historicalFigures,
];