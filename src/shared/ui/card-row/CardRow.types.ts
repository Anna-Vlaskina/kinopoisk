import type { ReactNode } from "react";

export interface CardRowProps<T> {
  items: T[];
  visibleCount?: number;
  getKey: (item: T) => string | number;
  renderItem: (item: T) => ReactNode;
}
