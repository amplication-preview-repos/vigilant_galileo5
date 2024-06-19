import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { PredictionTitle } from "../prediction/PredictionTitle";

export const TickEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
