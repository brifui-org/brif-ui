import { Theme } from "@brifui/types";

import { background, darkBackground } from "./background";
import { border, darkBorder } from "./border";
import { defaultColors } from "./default";
import { darkError, error } from "./error";
import { darkPrimary, primary } from "./primary";
import { darkText, text } from "./text";
import { darkWarning, warning } from "./warning";

export const sys: Record<"light" | "dark", Theme["semanticTokens"]["colors"]> =
  {
    light: {
      background,
      border,
      text,
      default: defaultColors,
      primary,
      error,
      warning
    },
    dark: {
      background: darkBackground,
      border: darkBorder,
      text: darkText,
      default: defaultColors,
      primary: darkPrimary,
      error: darkError,
      warning: darkWarning
    }
  } as const;
