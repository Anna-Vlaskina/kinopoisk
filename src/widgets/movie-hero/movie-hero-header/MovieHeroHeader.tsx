import { Text } from "@/shared/ui/text";
import type { MovieHeroHeaderProps } from "./MovieHeroHeader.types";
import type { FC } from "react";

export const MovieHeroHeader: FC<MovieHeroHeaderProps> = (props) => {
  const { title, ageRating } = props;

  return (
    <div>
      <Text
        tag="h1"
        size="4xl"
        weight="extrabold"
      >
        {title}
      </Text>
      <Text
        tag="span"
        size="md"
        weight="semibold"
      >
        {ageRating}
      </Text>
    </div>
  );
};
