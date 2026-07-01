import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { PageSkeleton } from "@/pages/PageSkeleton";

const HomePage = lazy(() =>
  import("@/pages/home").then((module) => ({
    default: module.HomePage,
  })),
);

const MoviePage = lazy(() =>
  import("@/pages/movie").then((module) => ({
    default: module.MoviePage,
  })),
);

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/movie/:movieId"
          element={<MoviePage />}
        />
      </Routes>
    </Suspense>
  );
};
