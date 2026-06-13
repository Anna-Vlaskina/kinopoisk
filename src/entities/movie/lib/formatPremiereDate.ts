export const formatPremiereDate = (date?: string): string => {
  if (!date) {
    return "";
  }

  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
  }).format(new Date(date));
};
