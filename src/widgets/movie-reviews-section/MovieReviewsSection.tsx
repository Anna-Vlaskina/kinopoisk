import { useState, useEffect, type FC } from "react";

import { Text } from "@/shared/ui/text";
import { Button } from "@/shared/ui/button";

import { ReviewCard } from "@/entities/review/ui";
import type { Review } from "@/entities/review/model/review.types";
import { getMovieReviews } from "@/entities/review/api/getMovieReviews";

type Props = {
  movieId: number;
};

export const MovieReviewSection: FC<Props> = ({ movieId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (reviews.length === 0) {
    return "Рецензий пока нет";
  }

  return (
    <div>
      <div>
        <Text
          tag="h2"
          size="2xl"
          weight="bold"
        >
          Рецензии
        </Text>

        <Text
          tag="span"
          size="sm"
          weight="regular"
          color="accent"
        >
          Написать рецензию
        </Text>
      </div>

      {reviews.map((review) => (
        <ReviewCard
          key={review.id}
          review={review}
        />
      ))}

      <Button variant="outlined">Посмотреть всё</Button>
    </div>
  );
};
