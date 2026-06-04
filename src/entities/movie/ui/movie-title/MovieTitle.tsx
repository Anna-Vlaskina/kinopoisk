import type { FC } from "react";
import { Text } from "@/shared/ui/text";
import type { MovieTitleProps } from "./MovieTitle.types";

export const MovieTitle: FC<MovieTitleProps> = ({ title }) => {
  return (
    <Text
      tag="h4"
      size="lg"
      weight="semibold"
    >
      {title}
    </Text>
  );
};
