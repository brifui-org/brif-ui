import { defineConfig } from "@brifui/theme";

export default defineConfig({
  include: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "../node_modules/@brifui/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extends: {
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(0)"
          },
          "100%": {
            transform: "translateX(calc(-100% - 1rem))"
          }
        }
      }
    },
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
