/**
 * This is the example tailwind.config.ts file for testing with CLI codegen
 */
import type { Config } from "tailwindcss";
import { brifui } from "@brifui/theme/tailwind";

export const mockTailwindConfig =  {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "../node_modules/@brifui/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-funnel-display)"]
      }
    }
  },
  plugins: [
    brifui({
      themeFileName: "./providers/theme-config.ts",
      themes: {
        violet: {}
      }
    })
  ]
} satisfies Config;
