/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import { fileURLToPath } from "node:url";
import { analyzer } from "vite-bundle-analyzer";
import Sonda from "sonda/vite";

const dirname =
  typeof __dirname !== "undefined" ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const isAnalyze = mode === "analyze";

  return {
    plugins: [
      react(),
      svgr(),

      ...(isAnalyze ? [analyzer(), Sonda()] : []),
    ],

    resolve: {
      alias: {
        "@": path.resolve(dirname, "./src"),
      },
    },

    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.ts",
    },

    build: {
      sourcemap: true,
    },
  };
});
