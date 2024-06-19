import { PredictionWhereUniqueInput } from "../prediction/PredictionWhereUniqueInput";

export type TickUpdateInput = {
  prediction?: PredictionWhereUniqueInput | null;
  tickDigit?: number | null;
};
