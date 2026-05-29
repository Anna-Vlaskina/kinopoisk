import React from "react";

type TagVariant = "p" | "span" | "div" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type FontSize =
  | "xs" // 12px
  | "sm" // 14px
  | "md" // 16px
  | "lg" // 20px
  | "xl" // 24px
  | "2xl" // 32px
  | "3xl"; // 48px

type WeightVariant =
  | "regular" // 400
  | "medium" // 500
  | "semibold" // 600
  | "bold" // 700
  | "extrabold"; // 800

type ColorVariant =
  | "primary" // 100%
  | "secondary" // 50%
  | "tertiary" // 35%
  | "disabled"; // 20%

type LineHeightVariant =
  | "tight" // 1
  | "normal" // 1.2
  | "relaxed"; // 1.4

type AlignVariant = "left" | "center" | "right" | "justify";

export interface TextProps {
  tag?: TagVariant;
  size?: FontSize;
  weight?: WeightVariant;
  color?: ColorVariant;
  align?: AlignVariant;
  truncate?: boolean;
  lineHeight?: LineHeightVariant;
  className?: string;
  children: React.ReactNode;
}
