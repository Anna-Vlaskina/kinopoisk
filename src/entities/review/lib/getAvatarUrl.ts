import { TMDB_IMAGE } from "@/shared/config/tmdb";

export const getAvatarUrl = (avatarPath?: string | null): string => {
  if (!avatarPath) {
    return "";
  }

  if (avatarPath.startsWith("/http")) {
    return avatarPath.slice(1);
  }

  return `${TMDB_IMAGE.avatar}${avatarPath}`;
};
