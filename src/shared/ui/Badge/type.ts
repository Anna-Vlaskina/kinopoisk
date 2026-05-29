import React from "react";

export interface BadgeProps {
  children?: React.ReactNode;
  variant?: "default" | "text" | "rating";
  className?: string;
}
