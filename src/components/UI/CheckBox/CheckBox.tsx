import { FormControlLabel, Checkbox } from "@mui/material";
import { Control, Controller } from "react-hook-form";

type CheckBoxPropsType = {
  name: string;
  control?: Control<any>;
  label?: string;
};

const CheckBox = ({ name, control, label }: CheckBoxPropsType) => {
  return (
    <FormControlLabel
      name={name}
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Checkbox
              {...field}
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
            />
          )}
        />
      }
      label={label}
    />
  );
};

export default CheckBox;
