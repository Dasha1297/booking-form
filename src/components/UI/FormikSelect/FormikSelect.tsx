import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Control, Controller, RegisterOptions } from "react-hook-form";

import { style } from "./styled";

type FormikSelectPropsType = {
  menuItems: Array<string>;
  label: string;
  name: string;
  control: Control<any>;
  rules?: Exclude<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
};

export const FormikSelect = ({
  menuItems,
  label,
  name,
  control,
  rules,
}: FormikSelectPropsType) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <FormControl
          fullWidth
          variant='outlined'
          sx={style}
          error={fieldState.invalid}
        >
          <InputLabel>{label}</InputLabel>
          <Select label={label} {...field} value={field.value || ""}>
            {menuItems && menuItems.length > 0
              ? menuItems.map((value) => (
                  <MenuItem value={value} key={value}>
                    {value}
                  </MenuItem>
                ))
              : null}
          </Select>
        </FormControl>
      )}
    />
  );
};
