import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TickTitle } from "../tick/TickTitle";

export const PredictionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
