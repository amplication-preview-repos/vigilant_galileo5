import { StringFilter } from "../../util/StringFilter";
import { PredictionWhereUniqueInput } from "../prediction/PredictionWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TickWhereInput = {
  id?: StringFilter;
  prediction?: PredictionWhereUniqueInput;
  tickDigit?: IntNullableFilter;
};
