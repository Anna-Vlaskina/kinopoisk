import { useState, type FC } from "react";

import { Text } from "@/shared/ui/text";
import { Button } from "@/shared/ui/button";

import { ReviewCard } from "@/entities/review/ui";
import type { Review } from "@/entities/review/model/review.types";

import { ReviewCreateForm } from "@/features/review-create/ui/ReviewCreateForm";

type Props = {
  reviews: Review[];
};

export const MovieReviewSection: FC<Props> = ({ reviews }) => {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <div>
      <div>
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
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}

          <Button variant="outlined">Посмотреть всё</Button>
        </>
      )}
    </div>
  );
};
