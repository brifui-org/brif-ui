import React from "react";
import { css as _css, cx } from "@brifui/styled/css";
import { button, ButtonVariantProps } from "@brifui/styled/recipes";
import { findChildrenByType, WithCssProps } from "@brifui/utils";

const Prefix: React.FC<WithCssProps<React.ComponentPropsWithRef<"div">>> = ({
  className,
  css,
  ...props
}) => {
  return (
    <div
      className={cx(
        _css(
          {
            mr: "px"
          },
          css
        ),
        className
      )}
      {...props}
    />
  );
};

const Suffix: React.FC<WithCssProps<React.ComponentPropsWithRef<"div">>> = ({
  className,
  css,
  ...props
}) => {
  return (
    <div
      className={cx(
        _css(
          {
            ml: "px"
          },
          css
        ),
        className
      )}
      {...props}
    />
  );
};

export type ButtonProps = WithCssProps<
  ButtonVariantProps & React.ComponentPropsWithRef<"button">
>;

export const Button: React.FC<ButtonProps> & {
  Prefix: typeof Prefix;
  Suffix: typeof Suffix;
} = ({ children, variant, size, fluid, className, css, ...props }) => {
  const [prefixes, suffixes, others] = findChildrenByType(
    children,
    Prefix,
    Suffix
  );

  const classes = button({
    variant,
    size,
    fluid
  });

  return (
    <button
      className={cx(classes.root, "group", _css(css), className)}
      {...props}
    >
      <div className={classes.container}>
        {prefixes}
        <span
          className={_css({
            flex: 1,
            px: "1.5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          })}
        >
          {others}
        </span>
        {suffixes}
      </div>
    </button>
  );
};
Button.Prefix = Prefix;
Button.Suffix = Suffix;
