import { TickWhereInput } from "./TickWhereInput";
import { TickOrderByInput } from "./TickOrderByInput";

export type TickFindManyArgs = {
  where?: TickWhereInput;
  orderBy?: Array<TickOrderByInput>;
  skip?: number;
  take?: number;
};
