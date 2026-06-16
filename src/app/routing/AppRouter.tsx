import { Routes, Route } from "react-router-dom";

import { HomePage } from "@/pages/home";
import { MoviePage } from "@/pages/movie";

export const AppRouter = () => {
  return (
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
  );
};
