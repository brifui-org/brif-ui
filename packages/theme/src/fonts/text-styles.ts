import { TextStyles } from "@brifui/types";

const foundation: Omit<TextStyles, "heading" | "button" | "label" | "text"> = {
  xs: {
    value: {
      fontSize: "0.75rem",
      lineHeight: "1rem"
    }
  },
  sm: {
    value: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem"
    }
  },
  md: {
    value: {
      fontSize: "1rem",
      lineHeight: "1.5rem"
    }
  },
  lg: {
    value: {
      fontSize: "1.125rem",
      lineHeight: "1.75rem"
    }
  },
  xl: {
    value: {
      fontSize: "1.25rem",
      lineHeight: "1.75rem"
    }
  },
  "2xl": {
    value: {
      fontSize: "1.5rem",
      lineHeight: "2rem"
    }
  },
  "3xl": {
    value: {
      fontSize: "1.875rem",
      lineHeight: "2.25rem"
    }
  },
  "4xl": {
    value: {
      fontSize: "2.25rem",
      lineHeight: "2.5rem"
    }
  },
  "5xl": {
    value: {
      fontSize: "3rem",
      lineHeight: "1"
    }
  },
  "6xl": {
    value: {
      fontSize: "3.75rem",
      lineHeight: "1"
    }
  },
  "7xl": {
    value: {
      fontSize: "4.5rem",
      lineHeight: "1"
    }
  },
  "8xl": {
    value: {
      fontSize: "6rem",
      lineHeight: "1"
    }
  },
  "9xl": {
    value: {
      fontSize: "8rem",
      lineHeight: "1"
    }
  }
} as const;

const heading: TextStyles["heading"] = {
  "7xl": {
    value: {
      fontWeight: "semibold",
      letterSpacing: "-0.06em",
      ...foundation["7xl"].value
    }
  },
  "6xl": {
    value: {
      fontWeight: "semibold",
      letterSpacing: "-0.06em",
      ...foundation["6xl"].value
    }
  },
  "5xl": {
    value: {
      fontWeight: "semibold",
      letterSpacing: "-0.06em",
      ...foundation["5xl"].value
    }
  },
  "4xl": {
    value: {
      fontWeight: "semibold",
      letterSpacing: "-0.06em",
      ...foundation["4xl"].value
    }
  },
  "3xl": {
    value: {
      fontWeight: "semibold",
      letterSpacing: "-0.06em",
      ...foundation["3xl"].value
    }
  },
  "2xl": {
    value: {
      fontWeight: "semibold",
      letterSpacing: "-0.06em",
      ...foundation["2xl"].value
    }
  },
  xl: {
    value: {
      fontWeight: "semibold",
      letterSpacing: "-0.06em",
      ...foundation["xl"].value
    }
  },
  lg: {
    value: {
      fontWeight: "semibold",
      letterSpacing: "-0.06em",
      ...foundation["lg"].value
    }
  },
  md: {
    value: {
      fontWeight: "semibold",
      letterSpacing: "-0.06em",
      ...foundation["md"].value
    }
  },
  sm: {
    value: {
      fontWeight: "semibold",
      letterSpacing: "-0.06em",
      ...foundation["sm"].value
    }
  }
};

const button: TextStyles["button"] = {
  xs: {
    value: {
      fontWeight: "medium",
      ...foundation["xs"].value
    }
  },
  sm: {
    value: {
      fontWeight: "medium",
      ...foundation["sm"].value
    }
  },
  md: {
    value: {
      fontWeight: "medium",
      ...foundation["md"].value
    }
  }
};

const text: TextStyles["text"] = {
  xs: {
    value: {
      fontWeight: "normal",
      ...foundation["xs"].value
    }
  },
  sm: {
    value: {
      fontWeight: "normal",
      ...foundation["sm"].value
    }
  },
  md: {
    value: {
      fontWeight: "normal",
      ...foundation["md"].value
    }
  },
  lg: {
    value: {
      fontWeight: "normal",
      ...foundation["lg"].value
    }
  },
  xl: {
    value: {
      fontWeight: "normal",
      ...foundation["xl"].value
    }
  },
  "2xl": {
    value: {
      fontWeight: "normal",
      ...foundation["2xl"].value
    }
  },
  "3xl": {
    value: {
      fontWeight: "normal",
      ...foundation["3xl"].value
    }
  }
};

export const textStyles: TextStyles = {
  ...foundation,
  heading,
  button,
  text
};
