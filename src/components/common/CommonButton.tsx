import { FC } from "react";
import Button, { ButtonProps } from "@mui/material/Button";

const CommonButton: FC<ButtonProps> = ({
  onClick,
  variant = "contained",
  color,
  sx,
  children,
  disabled,
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      color={color}
      sx={sx}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
