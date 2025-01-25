import type { Preview } from "@storybook/react";
import { Funnel_Display, Inter } from "next/font/google";

import "../app/globals.css";

import { useLayoutEffect } from "react";

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"]
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: "centered"
  },
  decorators: [
    (Story) => {
      useLayoutEffect(() => {
        window.document.body.classList.add(
          funnelDisplay.variable,
          inter.variable
        );
      }, []);

      return <Story />;
    }
  ],
  render: () => null,
  tags: ["autodocs"]
};

export default preview;
