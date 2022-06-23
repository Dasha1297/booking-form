import { InputBaseComponentProps, InputLabelProps } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField/TextField";
import React, { useEffect, useState } from "react";
import { Control, Controller, RegisterOptions } from "react-hook-form";
import { StyledTextField } from "./styled";

type AppInputPropsType = {
  name: string;
  control: Control<any>;
  rules?: RegisterOptions;
  label: string;
  textFieldProps?: TextFieldProps;
  inputProps?: InputBaseComponentProps;
  onKeyUp?: (evt: React.KeyboardEvent) => void;
  onKeyDown?: (evt: React.KeyboardEvent) => void;
  type: string;
  shrink?: boolean;
  InputLabelProps?: InputLabelProps;
};

export default function FormikTextField({
  name,
  control,
  rules,
  label,
  textFieldProps,
  inputProps,
  onKeyUp,
  onKeyDown,
  type,
  InputLabelProps,
}: AppInputPropsType) {
  const [validateRules, setValidateRules] = useState<RegisterOptions>({});

  useEffect(() => {
    if (textFieldProps?.type === "number") {
      rules !== undefined && setValidateRules(rules);
    }

    if (
      textFieldProps?.type === undefined ||
      textFieldProps?.type === "string"
    ) {
      rules !== undefined
        ? setValidateRules({
            ...rules,
            validate: (v) =>
              v !== ""
                ? v.trim() === ""
                  ? "Поле должно содержать хотя бы 1 символ"
                  : true
                : true,
          })
        : setValidateRules({
            validate: (v) =>
              v !== ""
                ? v.trim() === ""
                  ? "Поле должно содержать хотя бы 1 символ"
                  : true
                : true,
          });
    }
  }, [rules, textFieldProps?.type]);

  return (
    <Controller
      name={name}
      control={control}
      rules={validateRules}
      render={({ field, fieldState }) => (
        <StyledTextField
          InputLabelProps={{ ...InputLabelProps }}
          type={type}
          {...field}
          {...textFieldProps}
          inputProps={{ ...inputProps }}
          label={label}
          helperText={fieldState.error?.message}
          error={fieldState.invalid}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
        />
      )}
    />
  );
}
