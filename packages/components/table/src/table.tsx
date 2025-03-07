"use client";

import React from "react";
import { css as _css, cx } from "@brifui/styled/css";
import { findChildrenByType, WithCssProps } from "@brifui/utils";

import { TableProvider, useTableStyles } from "./context";
import { TableVariantProps, tableVariants } from "./variants";

export type TableCellProps = WithCssProps<React.ComponentPropsWithRef<"td">>;
export const Cell: React.FC<TableCellProps> = ({
  css,
  className,
  ...props
}) => {
  const { size, striped, interactive } = useTableStyles();
  const raw = tableVariants.raw({ size, striped, interactive });
  return <td className={cx(_css(raw.cell, css), className)} {...props} />;
};

export type TableHCellProps = WithCssProps<React.ComponentPropsWithRef<"th">>;
export const HCell: React.FC<TableHCellProps> = ({
  css,
  className,
  ...props
}) => {
  const { size, striped, interactive } = useTableStyles();
  const raw = tableVariants.raw({ size, striped, interactive });
  return <th className={cx(_css(raw.hcell, css), className)} {...props} />;
};

export type TableRowProps = WithCssProps<React.ComponentPropsWithRef<"tr">>;
export const Row: React.FC<TableRowProps> = ({ css, className, ...props }) => {
  const { size, striped, interactive } = useTableStyles();
  const raw = tableVariants.raw({ size, striped, interactive });
  return <tr className={cx(_css(raw.row, css), className)} {...props} />;
};

export type TableBodyProps = WithCssProps<React.ComponentPropsWithRef<"tbody">>;
export const Body: React.FC<TableBodyProps> = ({
  css,
  className,
  children,
  ...props
}) => {
  const { size, striped, interactive } = useTableStyles();
  const raw = tableVariants.raw({ size, striped, interactive });

  const [rows] = findChildrenByType(children, Row);

  return (
    <tbody className={cx(_css(raw.body, css), className)} {...props}>
      {rows}
    </tbody>
  );
};

export type TableHeadProps = WithCssProps<React.ComponentPropsWithRef<"thead">>;
export const Head: React.FC<TableHeadProps> = ({
  css,
  className,
  children,
  ...props
}) => {
  const { size, striped, interactive } = useTableStyles();
  const raw = tableVariants.raw({ size, striped, interactive });

  const [rows] = findChildrenByType(children, Row);

  return (
    <thead className={cx(_css(raw.head, css), className)} {...props}>
      {rows}
    </thead>
  );
};

export type TableProps = WithCssProps<
  TableVariantProps & React.ComponentPropsWithRef<"table">
>;
const Root: React.FC<TableProps> = ({
  css,
  className,
  children,
  size,
  striped,
  interactive,
  ...props
}) => {
  const [heads, bodies] = findChildrenByType(children, Head, Body);

  const raw = tableVariants.raw({ size, striped, interactive });

  return (
    <TableProvider size={size} striped={striped} interactive={interactive}>
      <div className={cx(_css(raw.root, css), className)} {...props}>
        <table className={_css(raw.table)}>
          {heads}
          <Body
            className={_css({
              h: "12px"
            })}
            aria-hidden="true"
          />
          {bodies}
          <Body
            className={_css({
              h: "12px"
            })}
            aria-hidden="true"
          />
        </table>
      </div>
    </TableProvider>
  );
};

export const Table = { Root, Head, Cell, HCell, Row, Body };
