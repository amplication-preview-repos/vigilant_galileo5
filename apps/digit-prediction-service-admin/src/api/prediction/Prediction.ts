import { Tick } from "../tick/Tick";

export type Prediction = {
  createdAt: Date;
  id: string;
  predictedNumber: number | null;
  result: boolean | null;
  ticks?: Array<Tick>;
  updatedAt: Date;
};
