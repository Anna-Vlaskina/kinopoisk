import type { FC } from "react";

import clsx from "clsx";

import { Text } from "@/shared/ui/text";

import { ReviewAuthor } from "./ReviewAuthor";
import { Badge } from "@/shared/ui/badge";
import { ReviewActions } from "./ReviewActions";
import type { Review } from "../../model/review.types";

import styles from "./ReviewCard.module.css";

type Props = {
  review: Review;
};

export const ReviewCard: FC<Props> = ({ review }) => {
  return (
    <div className={clsx(styles.card)}>
      <ReviewAuthor
        avatar={review.authorAvatar}
        name={review.authorName}
        date={review.createdAt}
      ></ReviewAuthor>

      {review.rating && <Badge variant="rating">{review.rating}</Badge>}

      <Text
        tag="p"
        size="md"
        weight="regular"
        color="secondary"
      >
        {review.content}
      </Text>

      <ReviewActions></ReviewActions>
    </div>
  );
};
