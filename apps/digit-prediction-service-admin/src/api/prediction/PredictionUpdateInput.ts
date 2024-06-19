import { TickUpdateManyWithoutPredictionsInput } from "./TickUpdateManyWithoutPredictionsInput";

export type PredictionUpdateInput = {
  predictedNumber?: number | null;
  result?: boolean | null;
  ticks?: TickUpdateManyWithoutPredictionsInput;
};
