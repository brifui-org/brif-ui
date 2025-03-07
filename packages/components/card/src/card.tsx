import React from "react";
import { css as _css, cx } from "@brifui/styled/css";
import { findChildrenByType, WithCssProps } from "@brifui/utils";

import { CardVariantProps, cardVariants } from "./variants";

export type CardProps = WithCssProps<
  CardVariantProps & React.ComponentPropsWithRef<"div">
>;
export type CardHeaderProps = CardProps;
export type CardBodyProps = CardProps;
export type CardFooterProps = CardProps;

const Header: React.FC<CardHeaderProps> = ({
  shadow,
  bordered,
  className,
  css,
  ...props
}) => {
  return (
    <div
      className={cx(
        _css(cardVariants.raw({ shadow, bordered }).header, css),
        className
      )}
      {...props}
    />
  );
};

const Body: React.FC<CardBodyProps> = ({
  shadow,
  bordered,
  className,
  css,
  ...props
}) => {
  return (
    <div
      className={cx(
        _css(cardVariants.raw({ shadow, bordered }).body, css),
        className
      )}
      {...props}
    />
  );
};

const Footer: React.FC<CardFooterProps> = ({
  css,
  shadow,
  bordered,
  className,
  ...props
}) => {
  return (
    <div
      className={cx(
        _css(cardVariants.raw({ shadow, bordered }).footer, css),
        className
      )}
      {...props}
    />
  );
};

export const Card: React.FC<CardProps> & {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
} = ({ shadow, bordered, className, children, css, ...props }) => {
  const [headers, bodies, footers, others] = findChildrenByType(
    children,
    Header,
    Body,
    Footer
  );

  return (
    <div
      className={cx(
        _css(cardVariants.raw({ shadow, bordered }).root, css),
        className
      )}
      {...props}
    >
      {headers?.map((header, idx) =>
        React.cloneElement(header, {
          key: idx,
          shadow,
          bordered
        })
      )}
      {bodies?.map((bodies, idx) =>
        React.cloneElement(bodies, {
          key: idx,
          shadow,
          bordered
        })
      )}
      {footers?.map((footers, idx) =>
        React.cloneElement(footers, {
          key: idx,
          shadow,
          bordered
        })
      )}
      {others}
    </div>
  );
};
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
