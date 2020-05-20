import React from "react";
import { Button } from "@material-ui/core";

export default function MUIButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}
