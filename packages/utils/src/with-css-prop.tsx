import { Styles } from "@brifui/styled/css";

export type WithCssProps<T = {}> = {
  css?: Styles;
} & T;
