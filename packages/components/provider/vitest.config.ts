import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [],
  test: {
    globals: true,
    environment: "jsdom",
    include: ["./src/**/*.spec.{ts,tsx}"],
    setupFiles: ["../../../mocks/setup.ts"]
  }
});
