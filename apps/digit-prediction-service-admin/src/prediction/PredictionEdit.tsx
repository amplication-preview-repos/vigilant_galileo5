import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TickTitle } from "../tick/TickTitle";

export const PredictionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="predictedNumber"
          source="predictedNumber"
        />
        <BooleanInput label="result" source="result" />
        <ReferenceArrayInput
          source="ticks"
          reference="Tick"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TickTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
