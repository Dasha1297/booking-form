import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FieldProps } from "formik";

import { style } from "./styled";

type FormikSelectPropsType = {
  menuItems: Array<string>;
  label: string;
};

export const FormikSelect = ({
  menuItems,
  label,
  field,
  form: { errors },
}: FormikSelectPropsType & FieldProps) => {
  return (
    <FormControl fullWidth variant='outlined' sx={style}>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        name={field.name}
        value={field.value || ""}
        onChange={field.onChange}
      >
        {menuItems && menuItems.length > 0
          ? menuItems.map((value) => (
              <MenuItem value={value} key={value}>
                {value}
              </MenuItem>
            ))
          : null}
      </Select>
    </FormControl>
  );
};
