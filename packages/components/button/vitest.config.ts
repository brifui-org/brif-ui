import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    include: ["./src/**/*.spec.{ts,tsx}"],
    setupFiles: ["@brifui/mocks/setup"]
  }
});
