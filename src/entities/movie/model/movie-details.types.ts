export interface MovieDetails {
  id: string;
  title: string;
  ageRating?: string;
  rating?: number;
  date?: string;
  genre?: string;
  country?: string[];
  runtime?: number;
  backdropUrl?: string;
  posterUrl?: string;
  overview?: string;
}
