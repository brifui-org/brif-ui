import { CssKeyframes } from "@pandacss/dev";

export const keyframes: CssKeyframes = {
  spin: {
    from: {
      transform: "rorate(0deg)"
    },
    to: {
      transform: "rotate(360deg)"
    }
  },
  accordionSlideDown: {
    from: {
      height: 0
    },
    to: {
      height: "var(--radix-accordion-content-height)"
    }
  },
  accordionSlideUp: {
    from: {
      height: "var(--radix-accordion-content-height)"
    },
    to: {
      height: 0
    }
  }
};
