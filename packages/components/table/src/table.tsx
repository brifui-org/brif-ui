"use client";

import React from "react";
import { css, cx } from "@brifui/styled/css";
import { findChildrenByType } from "@brifui/utils";

import { TableProvider, useTableStyles } from "./context";
import { TableVariantProps, tableVariants } from "./variants";

export type TableCellProps = React.ComponentPropsWithRef<"td">;
export const Cell: React.FC<TableCellProps> = ({ className, ...props }) => {
  const { size, striped, interactive } = useTableStyles();
  const classes = tableVariants({ size, striped, interactive });
  return <td className={cx(classes.cell, className)} {...props} />;
};

export type TableHCellProps = React.ComponentPropsWithRef<"th">;
export const HCell: React.FC<TableHCellProps> = ({ className, ...props }) => {
  const { size, striped, interactive } = useTableStyles();
  const classes = tableVariants({ size, striped, interactive });
  return <th className={cx(classes.hcell, className)} {...props} />;
};

export type TableRowProps = React.ComponentPropsWithRef<"tr">;
export const Row: React.FC<TableRowProps> = ({ className, ...props }) => {
  const { size, striped, interactive } = useTableStyles();
  const classes = tableVariants({ size, striped, interactive });
  return <tr className={cx(classes.row, className)} {...props} />;
};

export type TableBodyProps = React.ComponentPropsWithRef<"tbody">;
export const Body: React.FC<TableBodyProps> = ({
  className,
  children,
  ...props
}) => {
  const { size, striped, interactive } = useTableStyles();
  const classes = tableVariants({ size, striped, interactive });

  const [rows] = findChildrenByType(children, Row);

  return (
    <tbody className={cx(classes.body, className)} {...props}>
      {rows}
    </tbody>
  );
};

export type TableHeadProps = React.ComponentPropsWithRef<"thead">;
export const Head: React.FC<TableHeadProps> = ({
  className,
  children,
  ...props
}) => {
  const { size, striped, interactive } = useTableStyles();
  const classes = tableVariants({ size, striped, interactive });

  const [rows] = findChildrenByType(children, Row);

  return (
    <thead className={cx(classes.head, className)} {...props}>
      {rows}
    </thead>
  );
};

export type TableProps = TableVariantProps &
  React.ComponentPropsWithRef<"table">;
const Root: React.FC<TableProps> = ({
  className,
  children,
  size,
  striped,
  interactive,
  ...props
}) => {
  const [heads, bodies] = findChildrenByType(children, Head, Body);

  const classes = tableVariants({ size, striped, interactive });

  return (
    <TableProvider size={size} striped={striped} interactive={interactive}>
      <div className={cx(classes.root, className)} {...props}>
        <table className={classes.table}>
          {heads}
          <Body
            className={css({
              h: "12px"
            })}
            aria-hidden="true"
          />
          {bodies}
          <Body
            className={css({
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
