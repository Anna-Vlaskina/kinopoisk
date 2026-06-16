import type { MovieReleaseDates200ResultsItem } from "@/api/types";

const CERTIFICATION_MAP: Record<string, string> = {
  G: "+0",
  PG: "+6",
  "PG-13": "+12",
  R: "+16",
  "NC-17": "+18",

  "6+": "+6",
  "12+": "+12",
  "16+": "+16",
  "18+": "+18",
};

const normalizeAgeRating = (certification: string): string => {
  return CERTIFICATION_MAP[certification] ?? certification;
};

export const getAgeRating = (results?: MovieReleaseDates200ResultsItem[]): string => {
  const country =
    results?.find((item) => item.iso_3166_1 === "RU") ??
    results?.find((item) => item.iso_3166_1 === "US");

  const certification = country?.release_dates?.find((item) =>
    item.certification?.trim(),
  )?.certification;

  return certification ? normalizeAgeRating(certification) : "";
};
