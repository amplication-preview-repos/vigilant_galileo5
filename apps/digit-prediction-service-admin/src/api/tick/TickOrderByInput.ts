import { SortOrder } from "../../util/SortOrder";

export type TickOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  predictionId?: SortOrder;
  tickDigit?: SortOrder;
  updatedAt?: SortOrder;
};
