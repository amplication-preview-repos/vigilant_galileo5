import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PREDICTION_TITLE_FIELD } from "../prediction/PredictionTitle";

export const TickList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Ticks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Prediction"
          source="prediction.id"
          reference="Prediction"
        >
          <TextField source={PREDICTION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="tickDigit" source="tickDigit" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
