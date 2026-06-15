export const formatRuntime = (runtime?: number): string => {
  if (!runtime) {
    return "";
  }

  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  if (hours === 0) {
    return `${minutes} мин`;
  }

  if (minutes === 0) {
    return `${hours} ч`;
  }

  return `${hours} ч ${minutes} мин`;
};
