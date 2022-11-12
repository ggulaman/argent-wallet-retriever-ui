import { FC } from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

const CommonTextInput: FC<TextFieldProps> = ({
  id,
  label,
  onChange,
  variant = "outlined",
  sx,
}) => {
  return (
    <TextField
      id={id}
      onChange={onChange}
      label={label}
      variant={variant}
      sx={sx}
      data-testid={`textfield-${id}`}
    ></TextField>
  );
};

export default CommonTextInput;
