import { PredictionWhereUniqueInput } from "../prediction/PredictionWhereUniqueInput";

export type TickCreateInput = {
  prediction?: PredictionWhereUniqueInput | null;
  tickDigit?: number | null;
};
