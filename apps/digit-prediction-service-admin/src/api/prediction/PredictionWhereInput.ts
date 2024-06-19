import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TickListRelationFilter } from "../tick/TickListRelationFilter";

export type PredictionWhereInput = {
  id?: StringFilter;
  predictedNumber?: IntNullableFilter;
  result?: BooleanNullableFilter;
  ticks?: TickListRelationFilter;
};
