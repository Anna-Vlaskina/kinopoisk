import { format } from "date-fns";
import { ru } from "date-fns/locale";

export const formatReviewDate = (date?: string): string => {
  if (!date) {
    return "";
  }

  return format(new Date(date), "d MMMM yyyy", { locale: ru });
};
