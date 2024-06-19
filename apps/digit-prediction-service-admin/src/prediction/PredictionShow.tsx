import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PREDICTION_TITLE_FIELD } from "./PredictionTitle";

export const PredictionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="predictedNumber" source="predictedNumber" />
        <BooleanField label="result" source="result" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Tick"
          target="predictionId"
          label="Ticks"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
