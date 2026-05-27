import React from "react";

type ButtonVariant = "filled" | "outlined" | "only-icon";
type ButtonHTMLType = "button" | "submit" | "reset";

export interface ButtonProps {
  variant: ButtonVariant;
  className?: string;
  children?: React.ReactNode;
  type?: ButtonHTMLType;
  onClick?: () => void;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  disabled?: boolean;
}
