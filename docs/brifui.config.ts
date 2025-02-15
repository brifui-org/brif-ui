import { defineConfig } from "@brifui/theme";

export default defineConfig({
  include: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "../node_modules/@brifui/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    fonts: {
      heading: {
        value: "var(--font-funnel-display)"
      },
      body: {
        value: "var(--font-inter-sans)"
      }
    }
  }
});
