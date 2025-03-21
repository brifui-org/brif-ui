import React from "react";
import { css as _css, cx } from "@brifui/styled/css";
import { alert, AlertVariantProps } from "@brifui/styled/recipes";
import { findChildrenByType, WithCssProps } from "@brifui/utils";

import { AlertProvider, useAlert } from "./context";

export type AlertTitleProps = WithCssProps<React.ComponentPropsWithRef<"h5">>;
const Title: React.FC<AlertTitleProps> = ({ css, className, ...props }) => {
  const { error } = useAlert();
  const classes = alert({ error });

  return <h5 className={cx(classes.title, _css(css), className)} {...props} />;
};

export type AlertDescriptionProps = WithCssProps<
  React.ComponentPropsWithRef<"div">
>;
const Description: React.FC<AlertDescriptionProps> = ({
  css,
  className,
  ...props
}) => {
  const { error } = useAlert();
  const classes = alert({ error });

  return (
    <div className={cx(classes.description, _css(css), className)} {...props} />
  );
};

export type AlertProps = WithCssProps<
  AlertVariantProps & React.ComponentPropsWithRef<"div">
>;
const Root: React.FC<AlertProps> = ({
  css,
  className,
  children,
  error,
  ...props
}) => {
  const classes = alert({ error });
  const [titles, descriptions, others] = findChildrenByType(
    children,
    Title,
    Description
  );

  return (
    <AlertProvider error={error}>
      <div className={cx(classes.root, _css(css), className)} {...props}>
        {others}
        {titles}
        {descriptions}
      </div>
    </AlertProvider>
  );
};

export const Alert = {
  Root,
  Title,
  Description
};
