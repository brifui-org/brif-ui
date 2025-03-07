import React from "react";
import { Styles } from "@brifui/styled/css";
import { Prefer } from "@brifui/types";

export type WithCssProps<T = {}> = {
  css?: Styles;
} & T;

export function withCss<T extends WithCssProps = WithCssProps>(
  WrappedComponent: React.ComponentType<T>
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithCss = (props: Prefer<WithCssProps, T>) => {
    return <WrappedComponent {...(props as T)} />;
  };
  ComponentWithCss.displayName = `withCss${displayName}`;

  return ComponentWithCss;
}
