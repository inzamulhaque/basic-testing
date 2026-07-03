/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vitest/config";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTest.ts"],
    include: ["src/__tests__/**/*.{ts,tsx}", "src/**/*.test.{ts,tsx}"],
  },
});
