import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PREDICTION_TITLE_FIELD } from "../prediction/PredictionTitle";

export const TickShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
