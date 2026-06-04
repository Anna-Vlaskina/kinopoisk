import React from "react";
import type { PosterProps } from "@/shared/ui/poster/Poster.types";

export interface MoviePosterProps {
  src?: string;
  alt: string;
  variant?: PosterProps["variant"];
  children?: React.ReactNode;
}
