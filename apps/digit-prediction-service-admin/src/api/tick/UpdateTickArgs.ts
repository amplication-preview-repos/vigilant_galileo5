import { TickWhereUniqueInput } from "./TickWhereUniqueInput";
import { TickUpdateInput } from "./TickUpdateInput";

export type UpdateTickArgs = {
  where: TickWhereUniqueInput;
  data: TickUpdateInput;
};
