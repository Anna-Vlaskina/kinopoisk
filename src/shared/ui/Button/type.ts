import React from "react";

type ButtonVariant = "filled" | "outlined";
type ButtonHTMLType = "button" | "submit" | "reset";

export interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  variant: ButtonVariant;
  type?: ButtonHTMLType;
  onClick?: () => void;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
  disabled?: boolean;
}
