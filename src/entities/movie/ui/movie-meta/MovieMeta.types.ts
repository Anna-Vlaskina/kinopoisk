type ColorMovieMetaVariant = "secondary" | "primary";

export interface MovieMetaProps {
  rating?: number;
  type?: string;
  genre?: string;
  date?: string;
  country?: string[];
  runtime?: number;
  color?: ColorMovieMetaVariant;
}
