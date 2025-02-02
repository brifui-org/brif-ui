import type { Config } from "tailwindcss";
import { brifui } from "@brifui/theme/tailwind";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "../node_modules/@brifui/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-funnel-display)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"]
      },
      animation: {
        push: "push .85s cubic-bezier(0, 0, 0.2, 1) forwards"
      },
      keyframes: {
        push: {
          "75%, 100%": {
            transform: "scale(1.11) scaleY(1.2)",
            opacity: "0"
          }
        }
      }
    }
  },
  plugins: [
    brifui({
      themes: {
        violet: {}
      }
    })
  ]
} satisfies Config;
