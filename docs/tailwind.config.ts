import type { Config } from "tailwindcss";
import { brifui } from "@brifui/theme/tailwind";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../node_modules/@brifui/theme/**/*.{js,jsx,ts,tsx}"
  ],
  plugins: [brifui()]
} satisfies Config;
