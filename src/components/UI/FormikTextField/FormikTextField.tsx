import { FieldProps, getIn } from "formik";
import { StyledTextField } from "./styled";

type labelPropType = {
  label: string;
};

export const FormikTextField = ({
  field,
  form: { errors },
  ...props
}: FieldProps & labelPropType) => {
  let error = false;
  let ErrorMessage = "";
  if (getIn(errors, field.name) !== undefined) {
    ErrorMessage = getIn(errors, field.name);
    error = true;
  }

  return (
    <StyledTextField
      {...field}
      {...props}
      error={error}
      helperText={ErrorMessage}
    />
  );
};
