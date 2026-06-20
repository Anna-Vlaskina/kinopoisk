const AVATAR_BASE_URL = "https://image.tmdb.org/t/p/w185";

export const getAvatarUrl = (avatarPath?: string | null): string => {
  if (!avatarPath) {
    return "";
  }

  if (avatarPath.startsWith("/http")) {
    return avatarPath.slice(1);
  }

  return `${AVATAR_BASE_URL}${avatarPath}`;
};
