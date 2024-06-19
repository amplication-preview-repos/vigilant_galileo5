import { Prediction } from "../prediction/Prediction";

export type Tick = {
  createdAt: Date;
  id: string;
  prediction?: Prediction | null;
  tickDigit: number | null;
  updatedAt: Date;
};
