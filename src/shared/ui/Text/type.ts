import React from "react";

type TagVariant = "p" | "span" | "div" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type FontSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
type WeightVariant = "regular" | "medium" | "semibold" | "bold" | "extrabold";
type ColorVariant = "primary" | "secondary" | "tertiary" | "disabled";
type AlignVariant = "left" | "center" | "right" | "justify";

export interface TextProps {
  tag?: TagVariant;
  size?: FontSize;
  weight?: WeightVariant;
  color?: ColorVariant;
  align?: AlignVariant;
  truncate?: boolean;
  className?: string;
  children: React.ReactNode;
}
