import { TextField } from "@mui/material";
import { styled } from "@mui/system";

export const StyledTextField = styled(TextField)`
  .Mui-focused {
    color: #ff5a13 !important;
  }
  .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #ff5a13 !important;
  }
  .MuiOutlinedInput-input {
    color: #1f1f24;
  }
`;
