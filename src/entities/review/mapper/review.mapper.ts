import type { MovieReviews200ResultsItem } from "@/api/types";
import type { Review } from "../model/review.types";
import { getAvatarUrl } from "../lib/getAvatarUrl";
import { formatReviewDate } from "../lib/formatReviewDate";

export const mapReview = (dto: MovieReviews200ResultsItem): Review => ({
  id: dto.id ?? "",
  authorName: dto.author_details?.name || dto.author_details?.username || dto.author || "",
  authorAvatar: getAvatarUrl(dto.author_details?.avatar_path),
  rating: typeof dto.author_details?.rating === "number" ? dto.author_details.rating : undefined,
  content: dto.content ?? "",
  createdAt: formatReviewDate(dto.created_at ?? ""),
});
