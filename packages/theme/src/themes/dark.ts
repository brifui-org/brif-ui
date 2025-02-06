import { darkBackground } from "../colors/sys/background";
import { darkBorder } from "../colors/sys/border";
import { darkDanger } from "../colors/sys/danger";
import { darkDefault } from "../colors/sys/default";
import { darkForeground } from "../colors/sys/foreground";
import { darkPrimary } from "../colors/sys/primary";
import { darkSecondary } from "../colors/sys/secondary";
import { darkSuccess } from "../colors/sys/success";
import { darkWarning } from "../colors/sys/warning";
import type { DeepPartial } from "../types";
import { DefaultBaseTheme } from "./base";

export const dark = {
  colors: {
    sys: {
      background: darkBackground,
      foreground: darkForeground,
      border: darkBorder,
      primary: darkPrimary,
      secondary: darkSecondary,
      success: darkSuccess,
      warning: darkWarning,
      danger: darkDanger,
      default: darkDefault
    }
  }
} satisfies DeepPartial<DefaultBaseTheme>;
