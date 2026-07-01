import React from "react";

type PosterVariant = "vertical" | "horizontal" | "horizontal-sm" | "square";

export interface PosterProps {
  src?: string;
  alt?: string;
  variant?: PosterVariant;
  children?: React.ReactNode;
}
