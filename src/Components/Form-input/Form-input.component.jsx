import React from "react";
import { FormInputLabel, Input, Group } from "./Form-input.styles";
const FormInput = ({ label, ...props }) => {
  return (
    <Group>
      <Input {...props} required />

      {label && (
        <FormInputLabel shrink={props.value.length}>{label}</FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
