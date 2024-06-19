import { TickCreateNestedManyWithoutPredictionsInput } from "./TickCreateNestedManyWithoutPredictionsInput";

export type PredictionCreateInput = {
  predictedNumber?: number | null;
  result?: boolean | null;
  ticks?: TickCreateNestedManyWithoutPredictionsInput;
};
