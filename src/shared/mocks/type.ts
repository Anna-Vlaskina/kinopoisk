export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  rating: number;
  type: string;
  genre: string;
  season?: number;
  premiereDate: string;
}
