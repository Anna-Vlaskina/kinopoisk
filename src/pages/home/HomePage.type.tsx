import type { Collection } from "@/entities/collection/model/collection.types";
import type { MoviesCatalogSection } from "@/widgets/movies-catalog/MoviesCatalog.types";
import type { PremiereMovie } from "@/entities/movie/model/premiere-movie.types";

export interface HomePageData {
  collections: Collection[];
  sections: MoviesCatalogSection[];
  premieres: PremiereMovie[];
}
