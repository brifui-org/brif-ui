import { defineConfig } from "@brifui/theme";

export default defineConfig({
  include: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "../node_modules/@brifui/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extends: {
      tokens: {
        fonts: {
          heading: {
            value: "var(--font-funnel-display)"
          },
          body: {
            value: "var(--font-geist-sans)"
          },
          mono: {
            value: "var(--font-geist-mono)"
          }
        }
      },
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
    }
  },
  themes: {
    purple: {
      semanticTokens: {
        colors: {
          primary: {
            DEFAULT: {
              value: "{colors.purple.700}"
            },
            foreground: {
              value: "{colors.gray.100}"
            },
            hover: {
              value: "{colors.purple.600}"
            },
            active: {
              value: "{colors.purple.800}"
            },
            disabled: {
              value:
                "color-mix(in oklab, {colors.primary}, {colors.background} 68%)"
            }
          }
        }
      }
    },
    amber: {
      semanticTokens: {
        colors: {
          primary: {
            DEFAULT: {
              value: "{colors.amber.700}"
            },
            foreground: {
              value: "{colors.gray.100}"
            },
            hover: {
              value: "{colors.amber.600}"
            },
            active: {
              value: "{colors.amber.800}"
            },
            disabled: {
              value:
                "color-mix(in oklab, {colors.primary}, {colors.background} 68%)"
            }
          }
        }
      }
    }
  }
});
