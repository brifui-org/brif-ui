import React from "react";
import { cx } from "@brifui/styled/css";
import { findChildrenByType } from "@brifui/utils";

import { CardVariantProps, cardVariants } from "./variants";

export type CardProps = CardVariantProps & React.ComponentPropsWithRef<"div">;
export type CardHeaderProps = CardProps;
export type CardBodyProps = CardProps;
export type CardFooterProps = CardProps;

const Header: React.FC<CardHeaderProps> = ({
  shadow,
  bordered,
  className,
  ...props
}) => {
  return (
    <div
      className={cx(cardVariants({ shadow, bordered }).header, className)}
      {...props}
    />
  );
};

const Body: React.FC<CardBodyProps> = ({
  shadow,
  bordered,
  className,
  ...props
}) => {
  return (
    <div
      className={cx(cardVariants({ shadow, bordered }).body, className)}
      {...props}
    />
  );
};

const Footer: React.FC<CardFooterProps> = ({
  shadow,
  bordered,
  className,
  ...props
}) => {
  return (
    <div
      className={cx(cardVariants({ shadow, bordered }).footer, className)}
      {...props}
    />
  );
};

export const Card: React.FC<CardProps> & {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
} = ({ shadow, bordered, className, children, ...props }) => {
  const [headers, bodies, footers, others] = findChildrenByType(
    children,
    Header,
    Body,
    Footer
  );

  return (
    <div
      className={cx(cardVariants({ shadow, bordered }).root, className)}
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
