import { defineConfig } from "orval";

export default defineConfig({
  movieApi: {
    input: {
      target: "https://developer.themoviedb.org/openapi/tmdb-api.json",
    },
    output: {
      mode: "single",
      target: "./src/api/api-client.ts",
      schemas: "./src/api/types",
      client: "fetch",
      baseUrl: "https://api.themoviedb.org",
      override: {
        mutator: {
          path: "./src/api/app-fetch.ts",
          name: "appFetch",
        },
      },
      tsconfig: "./tsconfig.app.json",
    },
    hooks: {
      afterAllFilesWrite: undefined,
    },
  },
});
