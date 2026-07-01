import { useState, type FC } from "react";

import clsx from "clsx";

import { Text } from "@/shared/ui/text";
import { Button } from "@/shared/ui/button";

import { ReviewCard } from "@/entities/review/ui";
import type { Review } from "@/entities/review/model/review.types";

import { ReviewCreateForm } from "@/features/review-create/ui/ReviewCreateForm";

import styles from "./MovieReviewSection.module.css";

type Props = {
  reviews: Review[];
};

export const MovieReviewSection: FC<Props> = ({ reviews }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const visibleReviews = showAll ? reviews : reviews.slice(0, 2);

  return (
    <div className={clsx(styles.section)}>
      <div className={clsx(styles.heading)}>
        <Text
          tag="h2"
          size="2xl"
          weight="bold"
        >
          {reviews.length === 0 ? "Рецензий пока нет" : "Рецензии"}
        </Text>

        <Button
          variant="accent-text"
          onClick={() => setIsEditorOpen(true)}
        >
          Написать рецензию
        </Button>
      </div>

      {isEditorOpen && <ReviewCreateForm onClose={() => setIsEditorOpen(false)} />}

      {reviews.length !== 0 && (
        <>
          {visibleReviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}

          {reviews.length > 2 && (
            <Button
              variant="outlined"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {showAll ? "Скрыть" : "Посмотреть всё"}
            </Button>
          )}
        </>
      )}
    </div>
  );
};
