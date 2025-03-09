import { DeepPartial, Theme } from "@brifui/types";

// Empty theme config as the base tokens already contain tokens of the `light` theme.
export const light = {} as const satisfies DeepPartial<Theme>;
