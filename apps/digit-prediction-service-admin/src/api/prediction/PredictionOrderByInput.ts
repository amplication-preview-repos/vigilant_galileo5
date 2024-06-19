import { SortOrder } from "../../util/SortOrder";

export type PredictionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  predictedNumber?: SortOrder;
  result?: SortOrder;
  updatedAt?: SortOrder;
};
