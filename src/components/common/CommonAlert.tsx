import { FC } from "react";
import Alert, { AlertProps } from "@mui/material/Alert";

const CommonAlert: FC<AlertProps> = ({ children, severity, variant }) => {
  return (
    <Alert variant={variant} severity={severity}>
      {children}
    </Alert>
  );
};

export default CommonAlert;
