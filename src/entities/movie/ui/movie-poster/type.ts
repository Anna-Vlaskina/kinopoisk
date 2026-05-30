import React from "react";
import type { PosterProps } from "@/shared/ui/poster/type";

export interface MoviePosterProps {
  src?: string;
  title: string;
  variant?: PosterProps["variant"];
  children?: React.ReactNode;
}
