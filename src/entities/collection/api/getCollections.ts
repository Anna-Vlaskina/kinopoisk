import { collectionDetails } from "@/api/api-client";

import { mapCollection } from "./collection.mapper";
import type { Collection } from "../model/collection.types";

const COLLECTION_IDS = [10, 119, 1241, 230, 295, 528, 645, 748, 328, 9485, 86311];

export const getCollections = async (): Promise<Collection[]> => {
  const collections = await Promise.all(
    COLLECTION_IDS.map(async (id) => {
      const response = await collectionDetails(id);

      return mapCollection(response.data);
    }),
  );

  return collections;
};
