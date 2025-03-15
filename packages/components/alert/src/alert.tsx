import React from "react";
import { css as _css, cx } from "@brifui/styled/css";
import { findChildrenByType, WithCssProps } from "@brifui/utils";

import { AlertProvider, useAlert } from "./context";
import { AlertVariantProps, alertVariants } from "./variants";

export type AlertTitleProps = WithCssProps<React.ComponentPropsWithRef<"h5">>;
const Title: React.FC<AlertTitleProps> = ({ css, className, ...props }) => {
  const { error } = useAlert();
  const raw = alertVariants.raw({ error });

  return <h5 className={cx(_css(raw.title, css), className)} {...props}></h5>;
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
  const raw = alertVariants.raw({ error });

  return (
    <div className={cx(_css(raw.description, css), className)} {...props}></div>
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
  const raw = alertVariants.raw({ error });
  const [titles, descriptions, others] = findChildrenByType(
    children,
    Title,
    Description
  );

  return (
    <AlertProvider error={error}>
      <div className={cx(_css(raw.root, css), className)} {...props}>
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
