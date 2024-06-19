import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { PredictionTitle } from "../prediction/PredictionTitle";

export const TickCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="prediction.id"
          reference="Prediction"
          label="Prediction"
        >
          <SelectInput optionText={PredictionTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="tickDigit" source="tickDigit" />
      </SimpleForm>
    </Create>
  );
};
