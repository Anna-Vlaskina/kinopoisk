import type { MovieInfo } from "../model/movie-info.types";
import type { MovieDetails200 } from "@/api/types";
import type { MovieCredits200 } from "@/api/types";
import type { MovieExternalIds200 } from "@/api/types";

const regionNames = new Intl.DisplayNames(["ru"], { type: "region" });

export const mapMovieInfo = (
  details: MovieDetails200,
  credits: MovieCredits200,
  externalIds: MovieExternalIds200,
): MovieInfo => ({
  tmdbRating: details.vote_average ? Number(details.vote_average.toFixed(1)) : undefined,

  imdbId: externalIds.imdb_id ?? undefined,

  genres: details.genres?.map((genre) => genre.name ?? "") ?? [],

  director: credits.crew?.find((person) => person.job === "Director")?.name,

  cast: credits.cast?.slice(0, 8).map((actor) => actor.name ?? "") ?? [],

  countries:
    details.production_countries?.map((country) =>
      country.iso_3166_1
        ? (regionNames.of(country.iso_3166_1) ?? country.name ?? "")
        : (country.name ?? ""),
    ) ?? [],

  runtime: details.runtime,

  languages: details.spoken_languages?.map((language) => language.english_name ?? "") ?? [],
});
